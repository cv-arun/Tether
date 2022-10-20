const authhelper=require('../helper/authhelper')

module.exports = {
    signup: (req, res, next) => {
        console.log(req.body)
        authhelper.doSignup(req.body).then((response) => {
            res.json( response )
        }).catch(err=>res.json(err))
    },
    login:(req,res,next)=>{
        authhelper.dologin(req.body).then((response) => {

            if (response.token) {
                res.json(response)
            } else {
                res.json({ msg: 'invalid credential' })
            }
    
        }).catch(err => res.json(err))
    },
    updateUser:(req,res,next)=>{
        authhelper.doUpdateUser(req.body).then(response=>{
            res.json({msg:'user data updated'})
        })
    }
}