import SearchContact from '../component/messenger/searchContact'
import {connect} from 'react-redux'

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
})

export default connect(mapDispatchToProps)(SearchContact)