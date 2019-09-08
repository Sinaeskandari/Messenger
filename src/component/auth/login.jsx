import React from 'react'
import logo from '../../imgs/logo2.png'
import axios from 'axios'
import {withRouter} from 'react-router'


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fields: {
                email: '',
                password: '',
            }
        }
    }

    handleChange(event) {
        let name = event.target.name
        this.setState({...this.state, fields: {...this.state.fields, [name]: event.target.value}})
    }

    handleRequest() {
        axios.post("https://api.paywith.click/auth/signin/", {
            email: this.state.fields.email,
            password: this.state.fields.password
        })
            .then((response) => {
                window.localStorage.setItem('token', response.data.data.token)
                window.localStorage.setItem('id',response.data.data.profile.id)
                this.props.history.push('/messenger/')
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    render() {
        return (
            <div className="container">
                <div className="form">
                    <img src={logo} width='100px' alt=''/>
                    <input type="text" className='input-login' placeholder='Username'
                           name='email' onChange={(event) => this.handleChange(event)}/>
                    <input type="password" className='input-login' placeholder='Password'
                           name='password' onChange={(event) => this.handleChange(event)}/>
                    <label className="label"> Remember me <input type="checkbox" name="remember me" id=""/></label>
                    <button onClick={() => this.handleRequest()}>Log In</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)