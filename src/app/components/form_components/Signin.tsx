// src/pages/signin.tsx
'use client'
import React, { useState } from 'react';
import { Form, Input, Button, Typography, Space, Row, Col, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { ToastContainer, Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
import { useRouter } from 'next/navigation';


const SignInPage: React.FC = () => {
  const router= useRouter()
  const [Isloading,setIsloading]=useState(false)
  const onFinish =async(values: any) => {
    setIsloading(true)
    try {
      await axios.post("http://localhost:5000/signin",values)

  toast('🦄 Login Successfully buddy...', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

      setTimeout(() => {
        router.push('/pages/admin');
      },2000)
  
    } catch (error:any) {
      toast.error(error.message+'Check Your Email or Password', {
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
      console.log(error.message+"not verify");
 
      
    }
    setIsloading(false)

  };

  return (
    <>
         <ToastContainer />
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <Col xs={22} sm={16} md={12} lg={8} xl={6}>
        <Card>
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <h1 className='text-3xl font-semibold  text-center'>Signin Page</h1>
            <Form
              name="signin"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              layout="vertical"
            >
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your Email!' }]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Email"
                  type="email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                 {Isloading?"Loading....":"Signin"}
                </Button>
              </Form.Item>
              <Form.Item>
                <Row justify="space-between">
                  <Col>
                    <Link href="/pages/signup">
                      <p>Don't have an account? Sign Up</p>
                    </Link>
                  </Col>
                  <Col>
                    <Link href="/forgot-password">
                      <p>Forgot Password?</p>
                    </Link>
                  </Col>
                </Row>
              </Form.Item>
             
            </Form>
          </Space>
        </Card>
      </Col>
    </Row>
    </>
  );
};

export default SignInPage;
