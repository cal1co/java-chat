import ChatsComponent from "../Components/ChatsComponent";
import CurrentChatComponent from "../Components/CurrentChatComponent";
import "./ChatPage.css"

const ChatApp:React.FC = ():React.ReactElement => {
    return (
        <div className="chat">
            <ChatsComponent/>
            <CurrentChatComponent/>
        </div>
    )
} 

export default ChatApp;