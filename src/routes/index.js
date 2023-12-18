import express from 'express'
import { router as userRoute } from '../modules/users/users.route.js'
import { router as transferRoute } from '../modules/transfers/transfer.route.js'


export const router = express.Router()

router.use('/users', userRoute)
router.use('/transfers', transferRoute)