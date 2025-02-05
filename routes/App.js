import express from 'express';

const appRouter = express.Router();


appRouter.get('/', (req, res) => {
    res.send('<a href="/auth/google">Login with Google</a>');
});

// Profile route (protected)
appRouter.get('/profile', (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/');
    }
    res.send(`<h1>Welcome ${req.user.displayName}</h1><a href="/auth/logout">Logout</a>`);
});

export default appRouter;