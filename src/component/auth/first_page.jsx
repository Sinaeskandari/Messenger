import React from 'react'
import logo from '../../imgs/logo2.png'
import Button from '@material-ui/core/Button'
import {Link} from "react-router-dom"

class FirstPage extends React.Component {
    render() {
        return (
            <div className='container'>
                <div id='sa'>
                    <div id='button_first_container'>
                        <Link to="/SignIn" className='bedoon_khat'>
                            <Button variant="outlined" id='button_material1'>
                                Sign In
                            </Button>
                        </Link>
                        <Link to="/SignUp" className='bedoon_khat'>
                            <Button variant="outlined" id='button_material2'>
                                Sign Up
                            </Button>
                        </Link>
                    </div>
                    <div id='img_first_container'>
                        <img src={logo} width='100px' alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default FirstPage