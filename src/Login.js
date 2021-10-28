import { Button, Container, Typography, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useHistory } from 'react-router'



import Todos from './components/Todos'

const Login = (props) => {

    const [login, setLogin] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })

    }

    const [error, setError] = useState("")

    const history = useHistory("");

    const handleClick = () => {

        if (login.username == "" || login.password == "") {
            return setError("Please Enter All Details")
        } else { return history.push("/Todos") }
    }

    return (
        <Container>
            <center><br /><br /><br />
                <Typography variant="h3">
                    Todo List App
                </Typography>
                <Typography variant="subtitle1">
                    Please login to your Todo List
                </Typography>
                <TextField onChange={handleChange} sx={{ marginTop: "80px", borderRadius: "5px", width: "400px", bgcolor: "white" }} label="Username" name="username" variant="outlined" size="small" /><br />
                <TextField onChange={handleChange} type="password" sx={{ marginTop: "30px", borderRadius: "5px", width: "400px", bgcolor: "white" }} label="Password" name="password" variant="outlined" size="small" /> <br />
                <Button onClick={handleClick} style={{ marginTop: "31px", marginLeft: "12px", height: "38px" }} variant="outlined" >Log in</Button>
            </center><br />
            <center>
                <span variant="body2">
                    {error}
                </span>
            </center>
            <Typography style={{ textAlign: "right", marginTop: "120px" }} variant="body2" >
                Login with Username & Password. Signup not Required.
            </Typography>
        </Container>
    )

}

export default Login
