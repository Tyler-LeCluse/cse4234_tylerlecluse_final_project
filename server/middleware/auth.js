import jwt from "jsonwebtoken";

const JWT_SECRET = 'asd32f1a3sd21fa5wvew325rt263r#$!@*wfasf*&8B@';

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ errorMessage: 'Unauthorizes' });
    }

    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified.user;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ errorMessage: 'Unauthorizes' });
  }
};

export default auth;