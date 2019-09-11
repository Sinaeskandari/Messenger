import React from 'react'
import axios from 'axios'
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
        formdata.append('token',window.localStorage.getItem('token'))
        formdata.append('conversation_id',this.props.convid)
        this.interval =setInterval(()=>{
            axios.post('https://api.paywith.click/conversation/seen/',formdata)
                .then((response)=>{
                    console.log(response)
                })
        },3000)

    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div className='contact' onClick={() => this.handleRequestMessageList()}>
                <div style={{display: 'flex'}}>
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