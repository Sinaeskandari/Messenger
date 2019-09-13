import React from 'react'
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar'
import {getConvId, getMessageFromServer, getUserName} from '../../action/conversation'

class Contact extends React.Component {
    handleRequestMessageList() {
        let fdata = new FormData()
        fdata.append('token', window.localStorage.getItem('token'))
        fdata.append('conversation_id', this.props.convid)
        fdata.append('size', 10)
        fdata.append('date', (new Date().getTime() / 1000).toFixed(0))
        axios.post('https://api.paywith.click/conversation/details/', fdata)
            .then((response) => {
                this.props.dispatch(getMessageFromServer(response.data.data.messages))
                this.props.dispatch(getConvId(this.props.convid))
                this.props.dispatch(getUserName(this.props.firstName))
            })
        let formdata = new FormData()
        formdata.append('token', window.localStorage.getItem('token'))
        formdata.append('conversation_id', this.props.convid)
        this.interval = setInterval(() => {
            axios.post('https://api.paywith.click/conversation/seen/', formdata)
        }, 3000)

    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    colorChooser = () => {
        let colors = ['#c63e29', '#9C27B0', '#03A9F4', '#009688', '#e91e63', '#ff9800', '#ff6f00', '#004d40']
        let index = Math.floor(Math.random() * colors.length)
        return colors[index]
    };

    render() {
        return (
            <div className='contact' onClick={() => this.handleRequestMessageList()}>
                <div style={{display: 'flex'}}>
                    <Avatar style={{
                        backgroundColor: this.colorChooser(),
                        fontSize: '14px'
                    }}>{this.props.firstName[0].toUpperCase()}</Avatar>
                    <div style={{
                        alignSelf: 'center',
                        marginLeft: '3%'
                    }}>{this.props.firstName}</div>
                </div>
                <div className='latest_unseen_message'>
                    <span style={{marginLeft: '14%'}}>{this.props.latestMessage}</span>
                    <span className='unseen_message'>{this.props.unseenMessage}</span>
                </div>
            </div>

        )
    }
}

export default Contact