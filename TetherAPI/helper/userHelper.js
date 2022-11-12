const userModel = require('../model/userModel')

const userHelper = {
    getPeople: (myId) => {

        return new Promise(async (resolve, reject) => {
            try {
                var user = await userModel.findById(myId)
            } catch { err => reject(err) }

            userModel.find({ _id: { $nin:[...user.following,myId]} }, { password: 0 }).then(data => {
                resolve(data)
            }).catch(err => reject(err))
        })
    },

    doFollow: (myId, friendId) => {
        return new Promise((resolve, reject) => {
            userModel.findByIdAndUpdate(myId, { $addToSet: { following: friendId } }).then(data => {
                userModel.findByIdAndUpdate(friendId, { $addToSet: { followers: myId } }).then(data => {
                    resolve(data)
                }).catch(err => reject(err))
            }).catch(err => reject(err))
        })
    },

    doUnFollow: (myId, friendId) => {
        return new Promise((resolve, reject) => {
            userModel.findByIdAndUpdate(myId, { $pull: { following: friendId } }).then(data => {
                userModel.findByIdAndUpdate(friendId, { $pull: { followers: myId } }).then(data => {
                    resolve(data)
                }).catch(err => reject(err))
            }).catch(err => reject(err))
        })
    },

    getFollow: (myId) => {
        return new Promise((resolve, reject) => {
            userModel.findById(myId, { followers: 1, following: 1 }).populate('following').populate('followers').then(data => {
                resolve(data)
            }).catch(err => reject(err))
        })
    }
}

module.exports = userHelper