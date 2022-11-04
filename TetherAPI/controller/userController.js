const userHelper = require('../helper/userHelper')


module.exports = {
    getPeople: (req, res, next) => {
        userHelper.getPeople(req.userId).then(data => {
            res.json(data)
        })
    },
    requestFollow: (req, res, next) => {
       
        userHelper.doFollow(req.userId,req.body.friendId).then(data=>{
            res.json(data)

        })

    }
}