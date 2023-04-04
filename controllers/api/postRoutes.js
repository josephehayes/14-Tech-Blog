const router = require('express').Router();
const { Posts, User, UserToPosts } = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('sequelize');


router.get('/posts', withAuth, async (req, res) => { //withAuth,
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

router.post('/posts', withAuth, async (req, res) => { //withAuth
    try {
        const newPostData  = await Posts.create(req.body);
        res.status(200).json(newPostData);
        console.log("200 : New post created ", newPostData);
    } catch (e) {
        res.status(400).json(e);
        console.log("400 : Creating new Post")
    }
});

router.put('/posts/:id', async (req, res) => {
    try {
        console.log("Updating post: ", req.params.id);
        console.log("Data: ", req.body);
        const updatePost = await Posts.update({
            title: req.body.title,
            contents: req.body.contents,
            updated_at: sequelize.literal("NOW()"),
        },
        {
            where: {
                id: req.params.id,
            }
    });
        console.log("200 : Updated post");
        res.status(200).json(updatePost);
    } catch (e) {
        console.log("Error updating post: ", e);
        res.status(400).json(e);
    }
});

router.delete('/posts/:id', async (req, res) => {
    try {
        console.log("Deleting post: ", req.params.id)
        const delPost = await Posts.destroy({
            where: {
                id: req.params.id,
            }
        });
        res.status(200).json(delPost)
    } catch (e) {
        console.log("Err deleting post: ", req.params.id);
        res.status(400).json(e);
    }
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