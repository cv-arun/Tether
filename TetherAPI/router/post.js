const express=require('express')
const router=express.Router();
const verify = require('../middleware/jwt')
const postController=require('../controller/postController')


router.post('/create-post',verify,postController.uploadImages)
router.get('/get-post',verify,postController.getPost)







module.exports=router