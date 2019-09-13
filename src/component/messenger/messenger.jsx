import React from 'react'
import PersistentDrawerLeft from '../ui/drawrer'
import ContactListContainer from '../../container/contactListContainer'
import ChatPage from './chatPage'
import NoChat from "./noChat";

class Messenger extends React.Component {
    render() {
        return (
            <div>
                <PersistentDrawerLeft id='drawer'/>
                <div className='Messenger_Container'>
                    <ContactListContainer/>
                    {this.props.convid === -1 ? (
                        <NoChat/>
                    ) : (
                        <ChatPage/>
                    )}
                </div>
            </div>
        )
    }
}

export default Messenger