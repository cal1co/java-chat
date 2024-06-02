import "./ChatsComponent.css"

import ChatSearchComponent from "./ChatSearchComponent"
import OpenChatsComponent from "./OpenChatsComponent"
import UserComponent from "./UserComponent"

const ChatsComponent: React.FC = (): React.ReactElement => {
    return (
        <div className="chats-component">
            <UserComponent/>
            <ChatSearchComponent/>
            <OpenChatsComponent/>
        </div>
    )
}

export default ChatsComponent