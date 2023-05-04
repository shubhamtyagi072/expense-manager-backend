const LoginModel = require("../models/login");

exports.login = async (req, res) => {
  // only allow for shubham tyagi

  if (req.body?.email?.toLowerCase() !== "shubhamtyagi072@gmail.com") {
    // will throw error here
    return res.send({ error: "invalid user" });
  }else{
    const find = await LoginModel.find({ email: req.body.email });
    console.log(res)
    res.send(find[0]);
    return 
  }

//   const find = await LoginModel.find({ email: req.body.email });
//   console.log("login", req.body);
//   if (find.length > 0) {
//     res.send(find[0]);
//     return;
//   }
//   const user = new LoginModel(req.body);
//   const result = await user.save();
//   res.send(result);
};
