import React from 'react'
import ContactContainer from '../../container/ContactContainer'
import SearchContactContainer from '../../container/contactSearchContainer'
import axios from 'axios'
import {saveDataFromServer} from '../../action/conversation'

class ContactList extends React.Component {
    constructor() {
        super()
        this.state = {
            contactList: [],
            myId:window.localStorage.getItem('id')
        }
    }

    componentDidMount() {
        axios.get('https://api.paywith.click/conversation/', {
            params: {
                token: window.localStorage.getItem('token')
            }
        })
            .then((response) => {
                this.props.dispatch(saveDataFromServer(response.data.data.conversation_details))

            })
            .catch(function (error) {
                console.log(error)
            })
    }

    render() {
        return (
            <div className='contact_list'>
                <SearchContactContainer/>
                { this.props.contacts.map((conversation,index) => {
                    return (
                        conversation.users.map((user,idx) => {
                            if (user.id != this.state.myId ){
                            return(
                                <ContactContainer
                                    key={index}
                                    firstName={user.email}
                                    lastName={conversation.lastName}
                                    latestMessage={conversation.latestMessage}
                                    unseenMessage={conversation.unseenMessage}
                                    convid={conversation.id}
                                />
                            )}
                        })
                    )
                })

                }
            </div>
        )
    }
}

export default ContactList