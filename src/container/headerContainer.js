import Header from '../component/messenger/header'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    firstName:state.firstName,
    lastName:state.lastName
})

export default connect(mapStateToProps)(Header)