import express from 'express';

const app = express.Router();


import authRouter from './auth/init';
app.use('/auth', authRouter);

import mainRouter from './main/init';
app.use('/main', mainRouter);


app.get('/', (req, res) => {
  res.redirect('/auth/login');
});

export default app;