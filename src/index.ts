import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';
import LocalStagedStrategy from '../passport/local-staged-strategy';
import dotenv from 'dotenv';
import ejs from 'ejs';
import morgan from 'morgan';
import path from 'path';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// configure passport to use the LocalStagedStrategy
const localStrategy = new LocalStagedStrategy();
localStrategy.configure();

// initialize passport
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ resave: false, secret: process.env.SECRET || 'secret', saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// log requests
app.use(morgan('dev'));

// set the view engine to ejs
app.set('views', path.join(__dirname, '../views/'));
app.set('view engine', 'ejs');
//app.use(express.urlencoded({ extended: false }));

import initRouter from '../routers/init';

// use the initRouter
app.use('/', initRouter);

app.listen(port, () => console.log(`Express app listening on port ${port}!`));
