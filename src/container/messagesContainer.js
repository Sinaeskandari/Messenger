import Messages from '../component/messenger/messages'
import {connect} from 'react-redux'
const mapStateToProps = (state) => ({
    messages:state.messages
})
export default connect(mapStateToProps)(Messages)