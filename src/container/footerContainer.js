import Footer from '../component/messenger/footer'
import {connect} from 'react-redux'

const mapDispatchToProps = (dispatch) => ({
    dispatch:dispatch
})

const mapStateToProps = (state) => ({
    convid:state.convid
})

export default connect(mapStateToProps,mapDispatchToProps)(Footer)