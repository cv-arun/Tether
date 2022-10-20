import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import useHandleForm from '../costomHooks/usehandleForm';
import axios from '../axios'
import { Link, useNavigate } from 'react-router-dom'


function Login() {

    const [data, setData, clearData] = useHandleForm({});
    const navigate = useNavigate();
    const [msg,setMsg]=useState('')


    const style = {
        display: 'flex',
        flexDirection: 'column',
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 5
    }
    const handleSubmit = () => {
        console.log(data)
        axios.post('/login', data).then(response => {
            console.log(response.data)
            response && localStorage.setItem('userKey', JSON.stringify(response.data.token))
            response && response.data.token && navigate('/')
            response.data.msg ?setMsg(response.data.msg):setMsg('')
        }).catch(err=>console.log(err))
    }

    return (
        <Box sx={{
            backgroundColor: 'whitesmoke',
            padding: 1,
            width: 500,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 20,
            boxShadow: 5, borderRadius: 1
        }}>
            <Box sx={{ typography: 'subtitle2', fontSize: 30, textAlign: 'center' }}>Login</Box>
            <Box  sx={{ typography: 'body2', fontSize: 15, textAlign: 'center',color:'red' }}>{msg}</Box>
            <form >
                <Box sx={style}>


                    <TextField
                        label="Email"
                        variant="filled"
                        type="email"
                        required
                        value={data.email}
                        name='email'
                        onChange={(e) => { setData(e) }}

                    />
                    <TextField
                        label="Password"
                        variant="filled"
                        type="password"
                        required
                        value={data.password}
                        sx={{ marginTop: 2 }}
                        name='password'
                        onChange={(e) => { setData(e) }}
                    />
                    <div>
                        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', m: 3 }}>
                            <Button variant="contained" color="primary" onClick={handleSubmit}>
                                Login
                            </Button>
                        </Box>
                    </div>
                    <Box sx={{ typography: 'body', fontSize: 15, textAlign: 'center' }}>Dont have an account?</Box>
                    <Link style={{textAlign:'center'}} to='/signup'>Signup</Link>
                </Box>
            </form>
        </Box>
    )
}

export default Login

