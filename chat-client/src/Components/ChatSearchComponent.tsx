// import SearchIcon from '../Icons/search.svg'

const ChatSearchComponent: React.FC = (): React.ReactElement => {
    return (
        <div className="chat-search-component">
            <input type="text" className="search-field" placeholder={`🔎 Search Conversations`} />
        </div>
    )
}

export default ChatSearchComponent