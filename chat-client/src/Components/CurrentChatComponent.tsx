import ChatComponent from "./ChatComponent"
import ChatHeaderComponent from "./ChatHeaderComponent"
import "./CurrentChatComponent.css"

const CurrentChatComponent: React.FC = (): React.ReactElement => {
    return (
        <div className="current-chat-component">
            <ChatHeaderComponent/>
            <ChatComponent/>
        </div>
    )
}

export default CurrentChatComponent