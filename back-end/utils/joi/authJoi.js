import joiPasswordComplexity from "joi-password-complexity";
import joi from "joi";

const verifySignUp = (object) => {
  const emailSchema = joi
    .object({
      username: joi.string().required().trim().min(5).max(20),
      email: joi.string().required().trim().min(5).max(50).email(),
      password: joiPasswordComplexity(),
    })
    .unknown(true);

  return emailSchema.validate(object);
};
const verifyLogin = (obj) => {
  const loginSchema = joi.object({
    email: joi.string().required().trim().min(5).max(50).email(),
    password: joiPasswordComplexity(),
  });

  return loginSchema.validate(obj);
};

const verifyUpdateUser = (obj) => {
  const schema = joi
    .object({
      username: joi.string().trim().min(5).max(20).allow(""),
      lastName: joi.string().trim().min(5).max(20).allow(""),
    })
    .unknown(true);
  return schema.validate(obj);
};
const verifyUpdatePassword = (obj) => {
  const schema = joi.object({
    password: joiPasswordComplexity(),
  });
  return schema.validate(obj);
};

export { verifyLogin, verifySignUp, verifyUpdateUser, verifyUpdatePassword };
