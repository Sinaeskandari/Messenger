import React from 'react'
import axios from 'axios'
class Messages extends React.Component {
    componentDidMount() {
        let fdata = new FormData()
        fdata.append('token',window.localStorage.getItem('token'))
        fdata.append('date',(new Date().getTime()/1000).toFixed(0))

        setInterval(() => {
            axios.post('https://api.paywith.click/conversation/update/',fdata)
                .then((response)=>{
                    console.log(response)
                })
        },3000)
    }

    render() {
        return (
            <div className='chat_page_main'>
                {this.props.messages.map((item, index) => {
                        if (item.sender['id'] == window.localStorage.getItem('id')) {
                            return (
                                <div key={index} className='sender'>{item.text}</div>
                            )
                        } else {
                            return (
                                <div key={index} className='receiver'>{item.text}</div>
                            )
                        }
                    }
                )
                }
            </div>
        );
    }
}

export default Messages