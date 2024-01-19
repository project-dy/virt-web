import passport from "passport";
import passportLocal from "passport-local";
import dotenv from "dotenv";
import { User } from "../models/user";

dotenv.config();

// create a new instance of LocalStrategy and pass a callback function
// get the username and password from the dotenv file

const LocalStrategy = passportLocal.Strategy;
class LocalStagedStrategy {
  configure() {
    passport.use(
      new LocalStrategy(
        {
          usernameField: "username",
          passwordField: "password",
        },
        (username, password, done) => {
          // check if the username and password are correct
          if (username === process.env.USERNAME && password === process.env.PASSWORD) {
            // if correct, return the user object
            return done(null, { username });
          } else {
            // if not correct, return false
            return done(null, false);
          }
        }
      )
    );
    passport.serializeUser((user, done) => {
      done(null, user);
    });
    passport.deserializeUser((username, done) => {
      done(null, { username });
    });
  }
}

export default LocalStagedStrategy;
// export { LocalStagedStrategy };