import express from 'express';
import passport from 'passport';

const mainRouter = express.Router();

// create a route for the home page
mainRouter.get('/', (req, res) => {
  // res.send('Home page');
  //res.render('default', { path: 'index', title: 'Home' });
  res.redirect('/main/index');
});

mainRouter.get('/index', (req, res) => {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login');
    return;
  }
  res.render('default', { path: 'main/index', title: 'Manager', req: req });
});

export default mainRouter;