import { useState } from 'react';

const ChatComponent: React.FC = ():React.ReactElement => {

    const [message, setMessage] = useState<string>('');

    const sendMessage = () => {
        setMessage('')
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && message.trim() !== '') {
            e.preventDefault();
            sendMessage();
        }
    }

    return (
        <div className="chat-component">
            Chat
            <div className="chat-wrapper">

            </div>

            <div className="message-wrapper">
                <input
                    type="text"
                    placeholder="Write Something"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button 
                    onClick={sendMessage} 
                    disabled={message.length === 0}
                    type="submit"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <path fill="#636363" fill-rule="evenodd" d="M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z" clip-rule="evenodd"/>
                    </svg>

                </button>
            </div>
        </div>
    )
}

export default ChatComponent