const userModel = require('../model/userModel')

const userHelper = {
    getPeople: async (myId) => {
        let follow = await userHelper.getFollow(myId)
        return new Promise((resolve, reject) => {
            userModel.find({following:{$nin:follow.following}}).then(data => {
                resolve(data)
            }).catch(err => reject(err))
        })
    },
    doFollow: (myId, friendId) => {
        return new Promise((resolve, reject) => {

            userModel.findByIdAndUpdate(myId, { $addToSet: { following: friendId } }).then(data => {
                resolve(data)
            }).catch(err => reject(err))
        })
    },
    doUnFollow: (myId, friendId) => {
        return new Promise((resolve, reject) => {

            userModel.findByIdAndUpdate(myId, { $pull: { following: friendId } }).then(data => {
                console.log(data, "do fo")
                resolve(data)
            }).catch(err => reject(err))
        })
    },
    getFollow: (myId) => {
        return new Promise((resolve, reject) => {
            userModel.findById(myId, { followers: 1, following: 1 }).then(data => {
                resolve(data)
            }).catch(err => reject(err))
        })
    }
}

module.exports = userHelper