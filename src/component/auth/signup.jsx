import React from "react"
import logo from '../../imgs/logo2.png'
import axios from 'axios'

class SignUp extends React.Component {
    constructor() {
        super()
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
        axios.post('https://api.paywith.click/auth/signup/', {
            email: this.state.fields.email,
            password: this.state.fields.password
        })
            .then(function (response) {
                window.localStorage.setItem('token', response.data.token)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    render() {
        return (
            <div className="container" id='body'>
                <div className="form">
                    <img src={logo} width='100px' alt=''/>
                    <input name='email' type="text" className='input-login' placeholder='Email'
                           onChange={(event) => this.handleChange(event)}/>
                    <input name='password' type="password" className='input-login' placeholder='Password'
                           onChange={(event) => this.handleChange(event)}/>
                    <label className="label"> Remember me<input type="checkbox" name="remember me" id=""/></label>
                    <button onClick={() => this.handleRequest()}>Sign Up</button>
                </div>
            </div>
        )
    }
}

export default SignUp