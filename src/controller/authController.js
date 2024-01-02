const register = async (req, res) => {
  console.log(req.body);
  res.json({ msg: "success" });
};

export { register };
