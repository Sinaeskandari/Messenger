import ContactList from '../component/messenger/contactList'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    contacts:state.contacts
})

export default connect(mapStateToProps)(ContactList)