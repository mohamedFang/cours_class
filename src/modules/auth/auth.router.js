

import * as authController from './controller/registration.js'
import * as validators from './auth.validation.js'
import {validation} from '../../middleware/validation.js'
import { Router } from "express";
const router = Router()



router.post('/signup',
 validation(validators.signup), 
 authController.signup)


router.get('/', 
 
authController.getUser);

export default router
