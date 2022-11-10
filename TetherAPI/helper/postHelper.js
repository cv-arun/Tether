const postModel = require('../model/postModel');


module.exports = {

    updataPostDetails: (profile, caption, images, userId,privacy) => {
        return new Promise((resolve, reject) => {
            postModel.create({
                profilePic: profile,
                text: caption,
                images: images,
                user: userId,
                privacy:privacy
            }).then(data => resolve(data))
                .catch(err => reject(err))
        })
    },
    getAllPost:()=>{
        return new Promise((resolve,reject)=>{
            postModel.find({}).sort('-createdAt').populate('user').then(data=>{
                resolve(data)
            }).catch(err=>reject(err))
        })
    }

}