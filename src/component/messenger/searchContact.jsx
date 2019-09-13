import React from 'react'
import axios from 'axios'

class SearchContact extends React.Component{
    constructor(){
        super()
        this.state = {
            newConv: '',
            suggestionUsers: [],
            token: window.localStorage.getItem('token')
        }
    }

    handleSearch (e) {
        let fdata = new FormData()
        fdata.append('token', this.state.token)
        fdata.append('query', e.target.value)
        fdata.append('size', 4)

        axios.post('https://api.paywith.click/explore/search/contacts/', fdata)
            .then((response) => {
                this.setState({ suggestionUsers: response.data.data.users })
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    handleConversationRequest(user){
        let fdata = new FormData()
        fdata.append('token',window.localStorage.getItem('token'))
        fdata.append('user_id',user)
        console.log('11111',user)
        axios.post('https://api.paywith.click/conversation/',fdata)
            .then((response) => {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    render() {
        return(
            <div className="searchContact">
                <input className='input-login' id='input-search' type="text" placeholder="Search users" onChange={(e)=>this.handleSearch(e)}/>
                {
                    this.state.suggestionUsers.map((user, index) => {
                        let id = user.id
                        return (
                            <p key={index} className='p-search' onClick={()=>this.handleConversationRequest(id)}>
                                {user.email}
                            </p>
                        )
                    })
                }
            </div>
        )
    }
}

export default SearchContact