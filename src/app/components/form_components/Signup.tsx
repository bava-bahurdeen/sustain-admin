'use client';

import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

import { ToastContainer, Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

const SignupForm: React.FC = () => {
const router =useRouter()
  const onFinish = async (values: any) => {
    try {
      const res = await axios.post('http://localhost:5000/signup', values);

      toast('🦄 Successfully submitted...', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

      setTimeout(() => {
        router.push('/pages/signin');
        
         
      }, 3000);
    } catch (error: any) {
      console.log(error.message);
      alert('User already exists');
    }
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <ToastContainer />
      <Form
        name="signup"
        onFinish={onFinish}
        layout="vertical"
        onFinishFailed={onFinishFailed}
        className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input your Name!' }]}
        >
          <Input placeholder="Name" size="large" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input placeholder="Email" size="large" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please input your Password!' }, { min: 5,message:"'Password must be at least 5 characters long!'" },
            {
              pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
              message: 'Password must contain at least one uppercase letter, one lowercase letter, and one number!',
            },
          ]}
        >
          <Input.Password placeholder="Password" size="large" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={['password']} // This should match the name of the password field
          hasFeedback
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords do not match!'));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Re-enter Password" size="large" />
        </Form.Item>

        <Form.Item className="text-center">
          <Button type="primary" htmlType="submit" className="w-full">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignupForm;
