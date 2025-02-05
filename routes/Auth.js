import express from 'express';
import passport from "passport";


const authRouter = express.Router();

// Google authentication route
authRouter.get('/google',
    passport.authenticate('google', {scope: ['profile', 'email']})
);

// Google callback route
authRouter.get('/google/callback',
    passport.authenticate('google', {failureRedirect: '/'}),
    (req, res) => {
        res.redirect('/profile');
    }
);

// Logout route
authRouter.get('/logout', (req, res) => {
    req.logout(() => {
        res.redirect('/');
    });
});

export default authRouter;