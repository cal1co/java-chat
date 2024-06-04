import { useState, useRef, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';
import SockJS from 'sockjs-client';
import { Client, Frame } from '@stomp/stompjs';

type Message = {
    messageId: string
    userId: number,
    sender: string,
    message: string,
    timestamp: Date, 
}

const ChatComponent: React.FC = (): React.ReactElement => {
    const [message, setMessage] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [currUser, setCurrUser] = useState<String>("Alex");

    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const chatWrapperRef = useRef<HTMLDivElement>(null);
    const clientRef = useRef<Client | null>(null);

    useEffect(() => {
        const socket = new SockJS('http://localhost:8080/chat');
        const client = new Client({
            webSocketFactory: () => socket,
            debug: (str) => console.log("DEBUG", str),
            onConnect: (frame: Frame) => {
                console.log('Connected: ' + frame);
                client.subscribe('/topic/public', (message) => {
                    if (message.body) {
                        console.log(message)
                        const receivedMessage: Message = JSON.parse(message.body);
                        setMessages((prevMesages) => [...prevMesages, receivedMessage])
                    }
                })
            },
            onStompError: (frame: Frame) => {
                console.log('Broker reported error: ' + frame.headers['message']);
                console.log('Additional details: ' + frame.body);
            }
        })

        client.activate();
        clientRef.current = client;

        return () => {
            if (clientRef.current) {
                clientRef.current.deactivate();
            }
        }

    }, [])

    useEffect(() => {
        adjustTextareaHeight();
    }, [message])

    useEffect(() => {
        if (chatWrapperRef.current) {
            chatWrapperRef.current.scrollTop = chatWrapperRef.current.scrollHeight;
        }
    }, [messages]);

    const sendMessage = () => {
        if (message.trim() === '') return; 

        const newMessage: Message = {
            messageId: uuidv4(),
            message,
            userId: 1,
            sender: "Ro",
            timestamp: new Date()
        }
        
        if (clientRef.current) {
            clientRef.current.publish({
                destination:'/app/chat.sendMessage',
                body: JSON.stringify(newMessage),
            })
        }

        // setMessages([...messages, newMessage]);
        setMessage('');
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey && message.trim() !== '') {
            e.preventDefault();
            sendMessage();
        }
    }

    const adjustTextareaHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }

    return (
        <div className="chat-component">
            <div className="chat-wrapper" ref={chatWrapperRef}>
                <div className={`chat-message non-user-message`}>
                    <div className={`message-content`}>
                        other user message
                    </div>
                </div>
                {messages.map((msg) => (
                    <div className={`chat-message ${msg.sender == currUser ? "user-message" : "non-user-message"}`} key={msg.messageId}>
                        <div className={`message-content`}>
                            {msg.message}
                        </div>
                    </div>
                ))}
                    
            </div>

            <div className="message-wrapper">
                <textarea
                    className="chat-box"
                    ref={textareaRef}
                    placeholder="Write Something"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    rows={1}
                    style={{ resize: 'none', overflow: 'hidden' }}
                />
                <button 
                    onClick={sendMessage} 
                    disabled={message.trim() === ''}
                    type="submit"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <path fill="#636363" fillRule="evenodd" d="M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z" clipRule="evenodd"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default ChatComponent;
