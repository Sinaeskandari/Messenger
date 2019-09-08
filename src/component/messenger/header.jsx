import React from 'react'
import LongMenu from "../ui/3Dots";

class Header extends React.Component {
    render() {
        return (
            <div className='chat_page_header'>
                <div>{this.props.firstName}</div>
                <LongMenu id='long'/>
            </div>
        )
    }
}

export default Header