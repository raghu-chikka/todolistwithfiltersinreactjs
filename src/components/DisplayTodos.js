import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodos, completeTodos, removeTodos } from '../redux/reducer';
import TodoItems from './TodoItems';

const mapStateToProps = (state) => {
    return {
        todos: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
        removeTodo: (id) => dispatch(removeTodos(id)),
        completeTodo: (obj) => dispatch(completeTodos(obj)),
    }
}


const DisplayTodos = (props) => {
    const [filter, setFilter] = useState("active")
        return (
            <Box sx={{marginTop:"20px"}} ><center>
            <Button style={{marginRight:"20px", marginLeft:"30px"}} variant="contained" onClick = {() => setFilter("active")} >Active</Button>
            <Button style={{marginRight:"20px"}} variant="contained" onClick = {() => setFilter("completed")}>Completed</Button>
            <Button variant="contained" onClick = {() => setFilter("All")}>All</Button>
    
            <ul style={{marginTop:"20px"}}>
                {
                    props.todos.length>0 && filter === "active" ?
    
                    props.todos.map(item => {
                        return (
                            item.completed === false &&
                             <TodoItems key = {item.id} item = {item} 
                            remove = {props.removeTodo}
                            updateTodo = {props.updateTodo}
                            completeTodo ={props.completeTodo} />
                        )
                    }) : null
                    }
                        {
                    props.todos.length>0 &&  filter === "completed" ?
    
                    props.todos.map(item => {
                        return (
                            item.completed === true &&
                             <TodoItems key = {item.id} item = {item} 
                            remove = {props.removeTodo}
                            updateTodo = {props.updateTodo}
                            completeTodo ={props.completeTodo} />
                        )
                    }) : null
                    }
                    {
                    props.todos.length>0 && filter === "All" ?
    
                    props.todos.map(item => {
                        return ( 
                             <TodoItems key = {item.id} item = {item} 
                            remove = {props.removeTodo}
                            updateTodo = {props.updateTodo}
                            completeTodo ={props.completeTodo} />
                        )
                    }) : null
                    }
            </ul></center>
            </Box>
        )
}

export default connect (mapStateToProps, mapDispatchToProps) (DisplayTodos)
