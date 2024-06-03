import { useState } from 'react';
import { Link } from 'react-router-dom';


type RoomData = {
    roomName: string,
    id: number
}

const seedRoom:RoomData = {
    roomName: "room 1",
    id: 1
}

const OpenChatsComponent: React.FC = (): React.ReactElement => {
    const [room, setRoom] = useState<RoomData[]>([seedRoom]);

    return (
        <div className="open-chats-component">
            <Link to={`/rooms/${room[0].id}`} key={room[0].id}>
                {room[0].roomName}
            </Link>
            {/* <ChatPreviewComponent/> */}
        </div>
    )
}

export default OpenChatsComponent