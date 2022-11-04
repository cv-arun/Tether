const userHelper = require('../helper/userHelper')


module.exports = {
    getPeople: (req, res, next) => {
        userHelper.getPeople().then(data => {
            res.json(data)
        })
    }
}