import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography  from '@material-ui/core/Typography';
import Box from '@material-ui/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { CardActionArea, CardActions, CardMedia, CardContent } from '@material-ui/core';
import Avatar from "@material-ui/core/Avatar";
import BookmarkBorderIcon from "@materia-ui/icons/BookmarkBorderIcon";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  }
}));

function App() {

  const classes = useStyles();

  return (
  <div className="App">
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Typography variant="h6" color="primary">Blog</Typography>
      </Toolbar>
    </AppBar>
    <Box className={classes.hero}>
    <Box>React Blog</Box>
    </Box>
    <Container maxWidth="lg" className={classes.blogsContainer}>
    <Typography variant="h4" className={classes.blogTitle}>Articles</Typography>
    <Grid container spacing={3}>
    <Grid item xs={12} sm={6} md="4">
    <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" title="Comtemplative Reptite"/>
         <CardContent>
         <Typography gutterBottom variant="h5" component="h2">React useContext</Typography>
         <Typography variant="body2" component="p">Article Text</Typography>
           </CardContent> 
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Box className={classes.author}>
            <Avatar src="#"/>
            <Box ml={2}>
            <Typography variant="subTitle2" component="p" color="textSecondary">May 14, 2020</Typography>
            </Box>
          </Box>
          <Box>
            <BookmarkBorderIcon/>
          </Box>
        </CardActions>
      </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" title="Comtemplative Reptite"/>
         <CardContent>
         <Typography gutterBottom variant="h5" component="h2">React useContext</Typography>
         <Typography variant="body2" component="p">Article Text</Typography>
           </CardContent> 
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Box className={classes.author}>
            <Avatar src="#"/>
            <Box ml={2}>
            <Typography variant="subTitle2" component="p" color="textSecondary">May 14, 2020</Typography>
            </Box>
          </Box>
          <Box>
            <BookmarkBorderIcon/>
          </Box>
        </CardActions>
      </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" title="Comtemplative Reptite"/>
         <CardContent>
         <Typography gutterBottom variant="h5" component="h2">React useContext</Typography>
         <Typography variant="body2" component="p">Article Text</Typography>
           </CardContent> 
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Box className={classes.author}>
            <Avatar src="#"/>
            <Box ml={2}>
            <Typography variant="subTitle2" component="p" color="textSecondary">May 14, 2020</Typography>
            </Box>
          </Box>
          <Box>
            <BookmarkBorderIcon/>
          </Box>
        </CardActions>
      </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" title="Comtemplative Reptite"/>
         <CardContent>
         <Typography gutterBottom variant="h5" component="h2">React useContext</Typography>
         <Typography variant="body2" component="p">Article Text</Typography>
           </CardContent> 
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Box className={classes.author}>
            <Avatar src="#"/>
            <Box ml={2}>
            <Typography variant="subTitle2" component="p" color="textSecondary">May 14, 2020</Typography>
            </Box>
          </Box>
          <Box>
            <BookmarkBorderIcon/>
          </Box>
        </CardActions>
      </Card>
      </Grid>
    </Grid>
    </Container>
  </div>
  );
}
export default App;