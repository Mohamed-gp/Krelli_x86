import joiPasswordComplexity from "joi-password-complexity";
import joi from "joi";

const verifySignUp = (object) => {
  const emailSchema = joi.object({
    firstName: joi.string().required().trim().min(5).max(20),
    lastName: joi.string().required().trim().min(5).max(20),
    email: joi.string().required().trim().min(5).max(50).email(),
    password: joiPasswordComplexity(),
  });

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
  const schema = joi.object({
    username: joi.string().trim().min(2).max(20),
    password: joiPasswordComplexity(),
    bio: joi.string(),
  });
  return schema.validate(obj);
};

export { verifyLogin, verifySignUp, verifyUpdateUser };
