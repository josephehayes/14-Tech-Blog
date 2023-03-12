const router = require('express').Router();
const { Posts, User, UserToPosts } = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('sequelize');


router.get('/posts', withAuth, async (req, res) => {
    try {
        const postData = await Posts.findAll().get({ plain: true });

        res.render('posts', {
            ...postData
        });
    } catch (e) {
        res.status(500).json(e);
    }
});

router.post('/posts', withAuth, async (req, res) => {

});

router.put('/posts/:id', withAuth, async (req, res) => {

});

router.delete('/posts/:id', withAuth, async (req, res) => {

});

router.get('/dashboard', withAuth, async (req, res) => {

});

module.exports = router;