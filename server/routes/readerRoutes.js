const express = require('express')
const router = express.Router()
const themeController = require('../apis/theme/themeController')
const storyController = require('../apis/story/storyController')
const feedbackController = require('../apis/feedback/feedbackController')
const readerController = require('../apis/reader/readerController')
const userController = require('../apis/user/userController')

router.post('/register', readerController.register)
router.post('/login', userController.login)

// theme routes
router.post('/theme/all', themeController.all)
router.post('/theme/single', themeController.single)
// theme routes

// story routes
router.post('/story/all', storyController.all)
router.post('/story/single', storyController.single)
// story routes


// middleware
router.use(require('../middleware/tokenChecker'))

//auth
router.post('/changePassword', userController.changePassword)
router.post('/profile', readerController.single)
router.post('/updateProfile', readerController.update)

// feedback routes
router.post('/feedback/add', feedbackController.add)
router.post('/feedback/all', feedbackController.all)
router.post('/feedback/single', feedbackController.single)
// feedback routes



router.all('*',(req, res)=>{
    res.send({
        success:false,
        status:404,
        message:"Invalid Address"
    })
})

module.exports = router

