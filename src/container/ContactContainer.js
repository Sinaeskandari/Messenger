import Contact from '../component/messenger/contact'
import {connect} from 'react-redux'

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
})

export default connect(mapDispatchToProps)(Contact)