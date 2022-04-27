import mongoose from 'mongoose';

// Creating user schema 
const UserSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true
  },
  likedMovies : {
    type: [String],
    required: false
  },
  passwordHash : {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', UserSchema);

export default User;