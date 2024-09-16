import joi from "joi";

const verifyAddProperty = (object) => {
  const schema = joi
    .object({
      title: joi.string().required().trim().min(5).max(30),
      price: joi.number().required().min(5),
      bathrooms: joi.number().required().min(1).max(50),
      bedrooms: joi.number().required().min(1).max(50),
      guests: joi.number().required().min(1).max(50),
      category: joi.string().required().min(2).max(15),
      description: joi.string().required().min(20),
    })
    .unknown(true);

  return schema.validate(object);
};

export { verifyAddProperty };
