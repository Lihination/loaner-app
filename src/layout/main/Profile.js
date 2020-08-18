import React, {Fragment, useState} from 'react';
import {Modal} from 'react-bootstrap';
import Header from'../common/Header'

export default function Profile() {
    const [editProfileModal, setEditProfileModal] = useState(false);

    const closeEditModal =()=>{
        setEditProfileModal(false)
    }

    return (
        <Fragment>
            <Header/>
            <div className="container pt-4">
                <div style={{display:"flex", justifyContent: 'space-between'}}>
                    <h5>My Profile</h5>
                    <button onClick={()=>setEditProfileModal(true)} className='btn btn-success px-3'>Edit</button>
                </div>
                <hr/>
                <div className='p-5 offset-2'>
                    
                </div>
                <Modal show={editProfileModal} onHide={closeEditModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                        <h4 className="text-center">Edit Profile</h4>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form action="">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" placeholder='Enter Full Name' className='form-control'/>
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="phone number" placeholder='Enter Phone Number' className='form-control'/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder='Enter email' className='form-control'/>
                            </div>
                            <div className="form-group">
                                <label>BVN</label>
                                <input type="number" placeholder='Enter BVN' className='form-control'/>
                            </div>
                            <div className="form-group">
                                <label>Employment Status</label>
                                <div>
                                    <label className='px-2'> <b className='px-2'>Employed</b> 
                                        <input type="radio" name='em-status' />
                                    </label>
                                    <label className='px-2'> <b className='px-2'>Unemployed</b> 
                                        <input type="radio" name='em-status'/>
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Bank Statement</label>
                                <input type="file" className='form-control'/>
                            </div>
                            <div className="form-group">
                                <label>Link Card(PayStack)</label>
                                <input type="card" placeholder='Enter Card Number' className='form-control'/>
                            </div>
                            <div className="form-group">
                                <label>Reset Password</label>
                                <input type="password" className='form-control'/>
                            </div>
                            <button className="btn btn-success btn-block">Save</button>
                        </form> 
                    </Modal.Body>
                </Modal>
            </div>

        </Fragment>
    )
}
