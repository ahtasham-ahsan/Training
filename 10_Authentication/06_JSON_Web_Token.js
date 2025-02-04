// Conponents of JWT
// 1- Header --> Contains the algorithm used and type
// 2- Payload --> Contains the details of the user
// 3- Verified Signature --> Contains the digital signature, if change in the token - signature will also change

const jwt = require("jsonwebtoken");

app.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("User not found!");
  if (user.password !== req.body.password)
    return res.status(400).send("Invalid password!");

  const token = jwt.sign({ _id: user._id }, "jwtPrivateToken");
  res.send("Login successful!", token);
});
