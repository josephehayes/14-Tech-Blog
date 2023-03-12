const router = require('express').Router();
const { Posts, User, UserToPosts } = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('sequelize');


router.get('/posts', async (req, res) => { //withAuth,
    try {
        const postData = await Posts.findAll();
        const posts = postData.map((post) => 
            post.get({ plain: true }));
    
        // res.render('posts', {
        //     ...postData
        // });

        res.status(200).json(posts);
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