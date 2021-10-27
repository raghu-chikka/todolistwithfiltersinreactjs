import { Button, Grid, Typography } from '@mui/material';
import React from 'react'

const TodoItems = (props) => {
    const {item, removeTodo, completeTodo} = props;
    return (
        <Grid key={item.id}>
            <Grid style={{maxWidth: "400px", my: 1, mx: 'auto', p: 2, backgroundColor:"white", borderRadius:"4px", marginTop:"10px"}} item xs>
            <Typography style={{padding:"5px",marginLeft:"5px", textAlign:"left"}}>{item.item}</Typography>
           {item.completed === false &&
           (
            <Button style={{ marginLeft:"290px", marginBottom:"2px"}} variant="outlined" color="success" size="small" onClick={() => props.completeTodo(item.id)}  >completed</Button>
           )}
            {item.completed && <Button style={{marginLeft:"290px", marginBottom:"2px"}} variant="contained" color="success" size="small"  disabled>Completed</Button>}
          </Grid>
          </Grid>      
    )
}

export default TodoItems
