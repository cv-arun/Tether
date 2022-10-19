const authhelper=require('../helper/authhelper')

module.exports = {
    signup: (req, res, next) => {
        authhelper.doSignup(req.body).then((response) => {
            res.json({ response })
        })
    },
    login:(req,res,next)=>{
        authhelper.dologin(req.body).then((response) => {

            if (response.token) {
                res.json(response)
            } else {
                res.json({ msg: 'invalid credential' })
            }
    
        }).catch(err => res.json(err))
    }
}