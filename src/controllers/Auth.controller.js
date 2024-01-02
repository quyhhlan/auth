import User from "../models/User.model.js";

const register = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(200).send("registered successfully");
  } catch (error) {
    res.status(404).send(error);
  }
};

export { register };
