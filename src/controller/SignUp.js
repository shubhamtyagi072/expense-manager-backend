const SignUpModel = require("../models/SignUp");
const resultWrapper = require("../utlils/ResultWrapper");
const responseWrapper = { ...resultWrapper() };
exports.signUp = async (req, res) => {
  console.log(req.body);
  if (!req.body.email || !req.body.name) {
    return res.status(400).send({
      ...responseWrapper,
      error: { errorMessage: "Wrong request" },
    });
  }
  const find = await SignUpModel.find({ email: req.body.email });
  if (find.length > 0) {
    res
      .status(200)
      .send({ ...responseWrapper, response: "Data save successfully" });
    return;
  }
  const user = new SignUpModel({ ...req.body });
  await user.save();
  res
    .status(200)
    .send({ ...responseWrapper, response: "Data save successfully" });
};

exports.login = async (req, res) => {
  const find = await SignUpModel.find({ email: req.body.email });
  if (find.length > 0) {
    res.status(200).send({ ...responseWrapper, response: find[0] });
    return;
  }
  res.status(400).send({
    ...responseWrapper,
    error: { errorMessage: "email id not register with us" },
  });
};
