

import joi from 'joi';
import { generalFields } from '../../middleware/validation.js';

export const signup = joi.object({
   Name : joi.string().min(2).max(20).required(),
   university : joi.string().min(2).max(20).required(),
   phone : joi.string().min(2).max(20).required(),
    email : generalFields.email,
    address : joi.string().min(2).max(40).required(),
    level : joi.string().required(),


}).required()



export const token = joi.object({
    token : joi.string().required()
}).required()