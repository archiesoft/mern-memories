import React, {useState, useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

//actions
import {getPosts} from './actions/posts.js';
//components
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';

import memories from './images/memories.png';
import useStyles from './styles.js';
import {useDispatch} from 'react-redux';

function App() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  
  return (
   <Container maxwidth="lg">
     <AppBar className={classes.appBar} position="static" color="inherit">
     <Typography className={classes.heading} variant="h3" align="center">Memories 
     <img className={classes.image} src={memories} alt="memories" width="30" height="40"/></Typography>
     
     </AppBar>
     <Grow in>
      <Container>
        <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing="3">
          <Grid item xs={12} sm={7} >
            <Posts setCurrentId = {setCurrentId} />
          </Grid>
          <Grid xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
     </Grow>
   </Container>
  );
}

export default App;
