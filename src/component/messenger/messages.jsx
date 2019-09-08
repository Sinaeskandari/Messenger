import React from 'react'

class Messages extends React.Component {
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