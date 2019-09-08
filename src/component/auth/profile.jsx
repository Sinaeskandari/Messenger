import React, {useState} from 'react'
import Modal from '@material-ui/core/Modal'

function Profile() {
    const [fields, setFields] = useState({
        name: '',
        phone: '',
        mobile: '',
        location: ''
    })
    const [isShowData, setIsShowData] = useState(false)
    const [showModal, setShowModal] = useState(false)

    function submit() {
        setIsShowData(true)
        setShowModal(true)
    }

    function handleClose() {
        setShowModal(false)
    }

    console.log(isShowData)
    return (
        <div className="container" style={{marginRight: '20px'}}>
            <div className='form'>
                <input type="text" className='input-login' placeholder='Name'
                       onChange={(e) => setFields({...fields, name: e.target.value})}/>
                <input type="text" className='input-login' placeholder='phone'
                       onChange={(e) => setFields({...fields, phone: e.target.value})}/>
                <input type="text" className='input-login' placeholder='mobile'
                       onChange={(e) => setFields({...fields, mobile: e.target.value})}/>
                <input type="text" className='input-login' placeholder='location'
                       onChange={(e) => setFields({...fields, location: e.target.value})}/>
                <button onClick={() => submit()}>submit</button>

            </div>
            <Modal className="form" open={showModal} style={{width: 'auto', height: 'auto'}}
                   onClose={() => handleClose()}>
                {isShowData &&
                <div>
                    <p style={{color: 'white'}}>Name: {fields.name}</p>
                    <p style={{color: 'white'}}>Phone: {fields.phone}</p>
                    <p style={{color: 'white'}}>Phone: {fields.mobile}</p>
                    <p style={{color: 'white'}}>Phone: {fields.location}</p>
                </div>
                }
            </Modal>
        </div>
    )
}

export default Profile