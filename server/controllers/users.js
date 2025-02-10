import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/users.js';

const router = express.Router();

// Yes in a perfect world this would be a environment variable, but this is an assignment and I just mashed my keyboard to get this string...
const JWT_SECRET = 'asd32f1a3sd21fa5wvew325rt263r#$!@*wfasf*&8B@';

export const getLikedMovies = async (req, res) => {
  try {
    const userId = req.user; // get the userId from the
    // find the user
    const user = await User.findById(userId);

    // return the users liked movies
    res.status(200).json(user.likedMovies);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
}


export const likeMovie = async (req, res) => {
  try {
    const { movieID } = req.body;  // get the ID of the specified movie
    const userId = req.user;  // get the userID

    // find the user
    const user = await User.findById(userId);

    // get the users liked movies
    let newLikedMovies = user.likedMovies;

    // check if it already exists in the users account
    if (!newLikedMovies.includes(movieID)) {
      // add if it does not exist
      newLikedMovies.push(movieID);
    } else {
      // remove if it does exist
      const removeIndex = newLikedMovies.indexOf(movieID);
      newLikedMovies.splice(removeIndex);
    }

    // update the users account
    const updatedUser = await User.findByIdAndUpdate(userId, { likedMovies: newLikedMovies }, { new: true });
    
    // return the users updated account
    res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
}

export const logout = (req, res) => {
  res.cookie('token', '', {
    httpOnly: true,
    expires: new Date(0)
  }).send();
}

// login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check for valid input / existing input
    if (!email || !password) {
      return res.status(400).json({ errorMessage: 'Please enter all required fields'});
    }

    const existingUser = await User.findOne({email});

    if (!existingUser) {
      return res.status(401).json({ errorMessage: 'Wrong email or password'});
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.passwordHash);

    if (!isPasswordCorrect) {
      return res.status(401).json({ errorMessage: 'Wrong email or password'});
    }
    // generate a new jwt token for cookies
    const token = jwt.sign({
      user: existingUser._id
    }, JWT_SECRET);

    // send a cooking as a response
    res.cookie('token', token, {
      httpOnly: true
    }).send();
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
}

// register a new user
export const signUp = async (req, res) => {
  try {
    const { email, password, first, last } = req.body;
    // check for valid input / existing input
    if (!email || !password || !first || !last) {
      return res.status(400).json({ errorMessage: 'Please enter all required fields'});
    }

    if (password.length < 8) {
      return res.status(400).json({ errorMessage: 'Passwords minimun length = 8'});
    }

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({ errorMessage: 'Email already taken'});
    }

    // generate salt and encrypt password using bcrypt
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // create a new user model
    const newUser = new User({
      email: email,
      name: `${first} ${last}`,
      passwordHash: passwordHash
    });

    // save the model
    const savedUser = await newUser.save();

    // generate a new jwt token for cookies
    const token = jwt.sign({
      user: savedUser._id
    }, JWT_SECRET);

    // send a cooking as a response
    res.cookie('token', token, {
      httpOnly: true
    }).send();
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
}

export default router;