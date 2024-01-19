import express from 'express';
import passport from 'passport';

const authRouter = express.Router();

// create a route for the login page
authRouter.get('/login', (req, res) => {
  // res.send('Login page');
  // console.log(1);
  if (req.isAuthenticated()) {
    res.redirect('/main/index');
    return;
  }
  res.render('default', { path: 'login', title: 'Login', req: req });
});
authRouter.post('/login', passport.authenticate('local', { session: true }), (req, res) => {
  // res.send('You are logged in!');
  res.redirect('/main/index');
});

export default authRouter;