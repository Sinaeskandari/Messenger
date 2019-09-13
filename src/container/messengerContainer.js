import Messenger from '../component/messenger/messenger'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    convid:state.convid
})

export default connect(mapStateToProps)(Messenger)