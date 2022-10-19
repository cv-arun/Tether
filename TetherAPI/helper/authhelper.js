

const authHelper = {

    doSignup: (userData) => {
        return new Promise(async (resolve, reject) => {
            let user = await userModel.findOne({ email: userData.email })
            if (!user) {
                userData.password = await bcrypt.hash(userData.password, 10)

                userModel.create({
                    email: userData.email,
                    password: userData.password
                }
                ).then((response) => {
                    const user = {
                        userId: response._id,
                        email:response.email
                    }

                    console.log(user)
                    resolve(user)
                }).catch(err => reject(err))
            } else {
                resolve({ msg: 'user Alredy Exist' })
            }


        })

    },
    dologin: (loginData) => {
        console.log(loginData)
        return new Promise((resolve, reject) => {

            userModel.findOne({ email: loginData.email }).then((userData) => {

                if (userData) {
                    bcrypt.compare(loginData.password, userData.password, (err, res) => {
                        if (err) { reject(err) }
                        if (res) {

                            const user = {
                                userId: userData._id,
                                name: userData.email
                            }
                            const token = jwt.sign(
                                {
                                    userId: userData._id,
                                    email:userData.email
                                },
                                process.env.TOKEN_KEY,
                                {
                                    expiresIn: "2h",
                                }
                            );

                            user.token = token;
                            console.log(user)
                            resolve(user)

                        } else {
                            resolve({ msg: 'user not found' })
                        }
                    })
                } else {
                    resolve({ msg: 'user not found' })
                }

            }).catch(err => reject(err))
        })

    }


}

module.exports = authHelper