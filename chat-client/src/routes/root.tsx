import { Outlet } from 'react-router-dom'
import App from '../App.tsx'
import "../Pages/ChatPage.css"

export default function Root() {
    return (
        <>
            <div className="chat">
                <App/>
                <Outlet/>
            </div>
        </>
    )
}