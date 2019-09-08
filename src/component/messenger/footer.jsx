import React from 'react'
import axios from 'axios'

class Footer extends React.Component {
    constructor() {
        super()
        this.state = {
            newMessage: '',
            rerender:''
        }
    }

    handleCreateMessage() {
        let fdata = new FormData()
        fdata.append('token', window.localStorage.getItem('token'))
        fdata.append('conversation_id', this.props.convid)
        fdata.append('text', this.state.newMessage)
        axios.post('https://api.paywith.click/conversation/create/', fdata)
            .then((response) => {
                console.log(response)
                this.forceUpdate()
            })
    }

    render() {
        return (
            <div className='chat_page_input'>
                <input type='text' placeholder='type sth' value={this.state.newMessage}
                       onChange={(event) => this.setState({newMessage: event.target.value})}/>
                <button onClick={() => this.handleCreateMessage()}>Send</button>
            </div>
        )
    }
}

export default Footer