import { Container } from '@mui/material';
import { Box } from '@mui/system';
import {  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Todos from './components/Todos';



function App() {
  return (
    <Container maxWidth="lg">
    <Box sx={{ bgcolor: '#cfe8fc', marginTop:"70px", height: '600px' }} >
      <Router>      
        <Switch> 
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/Todos" >
            <Todos />
          </Route>
        </Switch>
      </Router>    
    </Box>
    </Container>
      
  );
}

export default App;

