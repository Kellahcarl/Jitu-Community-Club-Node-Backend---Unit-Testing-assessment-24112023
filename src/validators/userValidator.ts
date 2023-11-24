import Joi from "joi";

export const validateLoginUser = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const validateuserId = Joi.object().keys({
  club_id: Joi.string().min(8).required(),
});

export const validateRegisterUser = Joi.object().keys({
  user_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(
    new RegExp(
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"
    )
  ),
});

export const validateUserEmail = Joi.object().keys({
  email: Joi.string().email().required(),
});


export const validateUpdateuser = Joi.object().keys({
  user_name: Joi.string().required(),
  email: Joi.string().email().required(),
  club_id: Joi.string().min(8).required(),
});

