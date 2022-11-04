const userModel = require('../model/userModel')

module.exports = {
    getPeople: () => {
        return new Promise((resolve, reject) => {
            userModel.find({}).then(data=>{
                resolve(data)
            }).catch(err=>reject(err))
        })
    }
}