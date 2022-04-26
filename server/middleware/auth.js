import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const secret = '123456789KdafskjLKAJedfLKDSjf;lSDDlkfjSDlgfkadsLKJD*9g234gh(Sdg314kt()D';
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 50;
    // console.log(token);
    let decodedData;

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, secret);

      console.log(decodedData);
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;