import React from 'react'
import MyButton from '../utils/button';
import Login from './login';

const RegisterLogin = () => {
  return (
    <div className='page_wraper'>
        <div className='container'>
            <div className='register_login_container'>
                <div className='left'>
                    <h1>New Customers</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eiusmod tempor incididunt yt labre ae dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullaco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <MyButton 
                        type='default'
                        title='Create an account'
                        linkTo='/register'
                        addStyles={{
                            margin: '10px 0 0 0'
                        }}
                    />
                </div>
                <div className='right'>
                     <h2>Registered customers</h2>
                     <p>If you have an account please log in.</p>
                    <Login/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default RegisterLogin;