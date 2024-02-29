const LoginModel = require("../models/login");
const resultWrapper = require("../utlils/ResultWrapper");

const responseWrapper = { ...resultWrapper() };
exports.login = async (req, res) => {
  //--------only allow for shubham tyagi-----------
  if (req.body?.email?.toLowerCase() !== "shubhamtyagi072@gmail.com") {
    // will throw error here
    res.status(400);
    return res.send({
      ...responseWrapper,
      error: "Not a valid user use(test@id.com)",
    });
  } else {
    const find = await LoginModel.find({ email: req.body.email });
    if (find.length > 0) {
      res.send({ ...responseWrapper, response: find[0] });
      return;
    }
    const user = new LoginModel(req.body);
    const result = await user.save();
    res.send({ ...responseWrapper, response: result });
    return;
  }

  /*
-------- to allow every one --------
  const find = await LoginModel.find({ email: req.body.email });
  console.log("login", req.body);
  if (find.length > 0) {
    res.send(find[0]);
    return;
  }
  const user = new LoginModel(req.body);
  const result = await user.save();
  res.send(result);
  */
};
