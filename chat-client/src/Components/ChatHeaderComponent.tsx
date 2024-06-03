interface ChatHeaderComponentProps {
    roomId: string | undefined;
}

const ChatHeaderComponent: React.FC<ChatHeaderComponentProps> = ({ roomId }): React.ReactElement => {
    return (
        <div className="chat-header-component">
            <h1>Room {roomId}</h1>
        </div>
    );
};

export default ChatHeaderComponent