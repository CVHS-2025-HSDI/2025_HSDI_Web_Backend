import express from 'express';
import authRouter from './routes/Auth.js';
import session from "express-session";
import passport from "passport";
import {Strategy as GoogleStrategy} from "passport-google-oauth2";
import appRouter from "./routes/App.js";

const app = express();

app.use(session({
    secret: 'testtest123',
    resave: false,
    saveUninitialized: true
}));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Configure Passport with Google OAuth2 strategy
passport.use(new GoogleStrategy({
        clientID: '',
        clientSecret: '',
        callbackURL: 'http://localhost:3000/auth/google/callback',
        passReqToCallback: true
    },
    (request, accessToken, refreshToken, profile, done) => {
        return done(null, profile);
    }
));
passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((obj, done) => {
    done(null, obj);
});

app.use('/auth/', authRouter);

app.use('/', appRouter);

app.listen(3000, () => {
    console.log(`Locker backend started on port 3000`);
});