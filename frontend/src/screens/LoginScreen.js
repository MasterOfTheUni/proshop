import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormConatiner from '../components/FormConatiner'
import { login } from '../actions/userActions'


const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const location = useLocation()

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'
    //console.log("Redirect: " + redirect)
    useEffect(() => {
        if (userInfo) {
            if (redirect === '/') {
                navigate(redirect)
            } else {
                navigate('/'+ redirect)
            }
        }
    }, [navigate, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()

        dispatch(login(email, password))
    }

  return (
    <FormConatiner>
        <h1>Sign In</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
            {/* Email */}
            <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                    type='email' 
                    placeholder='Enter Email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
            </Form.Group>
            {/* Password */}
            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type='password' 
                    placeholder='Enter Password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary'>
                Sign In
            </Button>
        </Form>

        <Row className='py3'>
            <Col>
                New Customer?{' '} 
                <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                    Register
                </Link> 
            </Col>
        </Row>
    </FormConatiner>
  )
}

export default LoginScreen