const { Posts, User, UserToPosts } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('sequelize');
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.render('homepage', {
            logged_in: req.session.logged_in,
        });
    } catch (e) {
        res.status(500).json(e);
    }
});

router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/dashboard', async (req, res) => {
    try {
        console.log("loading dashboard for user: ", req.session.user_id);
        const userPosts = await Posts.findAll({
            where: {
                user_id: req.session.user_id,
            }
        });
        //const posts = userPosts.get({ plain: true });
        
        // res.render('dashboard', {
        //     ...posts,
        // })
        console.log("200 : Loading dashboard for user ", req.session.user_id)
        res.status(200).json(userPosts);
    } catch (e) {
        console.log("Err loading dashboard ", e);
        res.status(500).json(e)
    }
});

module.exports = router;