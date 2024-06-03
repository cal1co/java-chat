import { useParams } from 'react-router-dom';

import ChatComponent from "./ChatComponent"
import ChatHeaderComponent from "./ChatHeaderComponent"
import "./CurrentChatComponent.css"


const CurrentChatComponent: React.FC = (): React.ReactElement => {
    const { roomId } = useParams<{ roomId: string }>();

    return (
        <div className="current-chat-component">
            <div className="chat-components-wrapper">
                <ChatHeaderComponent roomId={roomId}/>
                <ChatComponent/>
            </div>
        </div>
    )
}

export default CurrentChatComponent