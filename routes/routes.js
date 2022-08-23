import express from 'express'
import user from './userRouter.js'
import restaurant from './restaurant.js'
import login from './loginRoutes.js';
import review from './review.js'

const router = express.Router();

router.use('/user/', user)
router.use('/restaurant', restaurant)
router.use('review', review)
router.use('/login', login)

export default router;