const userHelper = require('../helper/userHelper')


module.exports = {
    getPeople: (req, res, next) => {
        userHelper.getPeople(req.userId).then(data => {
            res.json(data)
        }).catch(err=>res.json(err))
    },
    requestFollow: (req, res, next) => {
       
        userHelper.doFollow(req.userId,req.body.friendId).then(data=>{
            res.json(data)

        }).catch(err=>res.json(err))

    },
    requestUnFollow: (req, res, next) => {
       
        userHelper.doUnFollow(req.userId,req.body.friendId).then(data=>{
            res.json(data)

        }).catch(err=>res.json(err))

    },
    getFollow: (req, res, next) => {
        userHelper.getFollow(req.userId).then(data => {
            res.json(data)
        }).catch(err=>res.json(err))
    },
}