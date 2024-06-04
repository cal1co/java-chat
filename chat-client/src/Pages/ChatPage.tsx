import ChatsComponent from "../Components/ChatsComponent";
import "./ChatPage.css"

const ChatApp:React.FC = ():React.ReactElement => {
    return (
        <div className="chat">
            <ChatsComponent/>
        </div>
    )
} 

export default ChatApp; 