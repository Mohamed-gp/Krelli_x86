import joiPasswordComplexity from "joi-password-complexity";
import joi from "joi";

const verifyAddProperty = (object) => {

  const schema = joi.object({
    email: joi.string().required().trim().min(5).max(50).email(),
    password: joiPasswordComplexity(),
  });

  return schema.validate(object);
};


export { verifyAddProperty };
