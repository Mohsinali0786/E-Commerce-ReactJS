import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import img1 from '../Assets/Images/draw1.png'

const SignUp = () => {


    const [userdata, setuserdata] = useState({})
    const Navigate = useNavigate()

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const data = (e) => {
        console.log(e.target.name + "=" + e.target.value)
        setuserdata({ ...userdata, [e.target.name]: e.target.value, IsLogin: false })

    }
    const Submit = () => {

        localStorage.setItem('id', JSON.stringify(userdata))
        Swal.fire(
            'You Registered Successfully!',
            '',
            'success'
        )
        Navigate('/form')

        // if (true) {
        //     const userData = [localStorage.getItem('id')]
        //     console.log("Getting Data===>", (userData))
        // }
    }
    // useEffect(() => {

    //     localStorage.clear()
    // }, []);
    return (
        <div className='signin-formcontainer'>


            <div className='form-section'>

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

                    <h2 className='form-h2'>Create an Account </h2>
                    <Form.Item
                        label="Username"
                        name="Username"

                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input name="Username" value='name' className='stylinginput' onChange={(e) => { data(e) }} />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="Email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]}
                    >
                        <Input className='stylinginput' name='Email' onChange={(e) => { data(e) }} />
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
                        <Input.Password className='stylinginput' name='Password' onChange={(e) => { data(e) }} />
                    </Form.Item>
                    <Form.Item
                        label="Confirm Password"
                        name="Confirm Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password className='stylinginput' name='Confirm Password' onChange={(e) => { data(e) }} />
                    </Form.Item>
                    <Form.Item style={{ display: 'flex', flexDirection: 'row' }}
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button className='Loginoutbtns' type="primary" htmlType="submit" onClick={() => { Submit() }}>
                            Register
                        </Button>

                    </Form.Item>
                </Form>
                <img className='form-image' src={img1} />
            </div>
        </div >
    );
};
export default SignUp;