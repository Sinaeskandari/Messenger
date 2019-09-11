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
            myId: window.localStorage.getItem('id')
        }
    }

    componentDidMount() {
        let latest_date=0
        axios.get('https://api.paywith.click/conversation/', {
            params: {
                token: window.localStorage.getItem('token')
            }
        })
            .then((response) => {
                this.props.dispatch(saveDataFromServer(response.data.data.conversation_details))
                latest_date=response.data.data.conversation_details[0].latest_message_date
            })
            .catch(function (error) {
                console.log(error)
            })
        let fdata = new FormData()
        fdata.append('token', window.localStorage.getItem('token'))
        fdata.append('date', latest_date)
        setInterval(() => {
            axios.post('https://api.paywith.click/conversation/update/', fdata)
        }, 30000)
    }

    render() {
        return (
            <div className='contact_list'>
                <SearchContactContainer/>
                {this.props.contacts.map((conversation, index) => {
                    return (
                        conversation.users.map((user, idx) => {
                            if (user.id != this.state.myId) {
                                return (
                                    <ContactContainer
                                        key={index}
                                        firstName={user.email}
                                        lastName={conversation.lastName}
                                        latestMessage={conversation.latestMessage}
                                        unseenMessage={conversation.unseenMessage}
                                        convid={conversation.id}
                                    />
                                )
                            }
                        })
                    )
                })

                }
            </div>
        )
    }
}

export default ContactList