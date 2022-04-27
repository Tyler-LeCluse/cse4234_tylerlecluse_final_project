


export const signUp = async (req, res) => {
  if(userValid) {
    bcrypt
      .compare(req.body.password_digest, user.password_digest)
      .then((result) => {
        if (result) {
          res.cookie('user_id', user.id, {
              httpOnly: true,
              secure: isSecure,
              signed: true
          })
          res.json({
              message: 'Logged in'
          });
        } else {
          next(new Error('Invalid Login'))
        }
    });
  }
}

