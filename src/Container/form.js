import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import img1 from '../Assets/Images/loginimage.png'


const MyForm = () => {
    const Navigate = useNavigate()

    const [email, setEmail] = useState('')

    const [password, setpassword] = useState('')
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const LoginEmail = (e) => {
        setEmail(e.target.value)

    }
    const LoginPassword = (e) => {
        setpassword(e.target.value)

    }
    const myalert1 = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }
    const Getdatafromlocalstorage = () => {
        if (localStorage.getItem("id") === null) {
            Swal.fire(
                'Not Found any account !',
                'Please Signup first then try again login with you email and password',
                'warning'
            )

        }
        else {
            var data = JSON.parse(localStorage.getItem('id'))
            localStorage.setItem('id', JSON.stringify({ Username: data.Username, Email: data.Email, Password: data.Password, IsLogin: true }))
            console.log(localStorage.getItem('id'))

            if (data.Email === email && data.Password === password) {
                Swal.fire(
                    'Successfully Login!',
                    'Now You can Enjoy Your Shopping!',
                    'success'
                )
                Navigate('/Women')
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'May be Your Password or Email Id incorrect Plese input correct Email or Password!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        }
    }

    return (
        <div className='signin-formcontainer'>

            <div className='form-section' >

                <Form className='signin-formstyling'
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <h2 className='form-h2'>Login Form </h2>

                    <h4 className='form-h4'>Before Add Item in cart you should first login</h4>
                    <Form.Item
                        label="Email"
                        name="Email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input className='stylinginput' onChange={(e) => LoginEmail(e)} />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password className='stylinginput' onChange={(e) => { LoginPassword(e) }} />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            // offset: 8,
                            // span: 16,
                        }}
                    >
                        <div style={{
                            display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', flexWrap: 'wrap', textAlign: 'left', marginLeft: '10px'
                        }}>
                            < Button className='Loginoutbtns' htmlType="submit" onClick={() => { Getdatafromlocalstorage() }}>
                                LoginIn
                            </Button>
                            <Button className='Loginoutbtns' type='link' onClick={() => Navigate('/signup')}>Register Account </Button>

                            <Button className='Loginoutbtns' type='primary' onClick={() => { Navigate('/') }}>Back To Home</Button>
                        </div>
                    </Form.Item >
                </Form >
                <img src={img1} className='form-image' />
            </div>
        </div >
    );
};
export default MyForm;