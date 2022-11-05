const userModel = require('../model/userModel')

const userHelper = {
    getPeople: async (myId) => {
        let user =myId?await userModel.findById(myId):'';
        return new Promise((resolve, reject) => {
            userModel.find({_id:{$nin:user.following}},{password:0}).then(data => {
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
               
                resolve(data)
            }).catch(err => reject(err))
        })
    },
    getFollow: (myId) => {
        return new Promise((resolve, reject) => {
            userModel.findById(myId,{ followers: 1, following: 1 }).populate('following').populate('followers').then(data => {
                resolve(data)
            }).catch(err => reject(err))
        })
    }
}

module.exports = userHelper