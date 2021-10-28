import TextField from '@mui/material/TextField';
import React, { useRef, useState } from 'react'
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';
import { connect } from 'react-redux';
import { addTodos, completeTodos, removeTodos, updateTodos } from '../redux/reducer'
import DisplayTodos from './DisplayTodos';


const mapStateToProps = (state) => {
    return {
        todos: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
        removeTodo: (id) => dispatch(removeTodos(id)),
        updateTodo: (obj) => dispatch(updateTodos(obj)),
        completeTodo: (id) => dispatch(completeTodos(id)),
    }
}

const Todos = (props) => {

    const [todo, setTodo] = useState("");



    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    return (
        <Container  >

            <center><br />
                <Typography style={{ marginTop: "1px" }} variant="h3">
                    { } Todo List
                </Typography>
                <Typography variant="subtitle1">
                    Please Add your task here
                </Typography>
                <TextField sx={{ marginTop: "30px", borderRadius: "5px", width: "400px", bgcolor: "white" }} label="Enter your Task here" onChange={(e) => handleChange(e)} variant="outlined" size="small" />
                <Button style={{ marginTop: "31px", marginLeft: "12px", height: "38px" }} variant="outlined" onClick={() => props.addTodo({
                    id: Math.floor(Math.random() * 1000),
                    item: todo,
                    completed: false,
                })}>Add Task</Button>



            </center>

            <DisplayTodos />
        </Container>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
