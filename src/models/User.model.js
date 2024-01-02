import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please provide first name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  lastName: {
    type: String,
    maxlength: 20,
    default: "",
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
  },
});
const User = mongoose.model("User", UserSchema);
export default User;
