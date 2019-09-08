import React from 'react'
import HeaderContainer from '../../container/headerContainer'
import MessagesContainer from '../../container/messagesContainer'
import FooterContainer from '../../container/footerContainer'

class ChatPage extends React.Component {
    render() {
        return (
            <div className='chat_page'>
                <HeaderContainer />
                <MessagesContainer />
                <FooterContainer />
            </div>
        )
    }
}

export default ChatPage