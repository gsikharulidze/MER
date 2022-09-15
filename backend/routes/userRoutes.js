const express = require('express')
const router = express.Router()
const {
    registerUser,
    loginUser,
    getMe,
} = require('../controllers/userController')

const {protect} =require('../middleware/authMiddleware')

router.post('/',registerUser)
router.post('/login',loginUser)
router.get('/me', protect, getMe)
//router.route('/').get(getUsers).post(registerUser)
//router.route('/:id').put(updateGoal).delete(deleteGoal)


module.exports = router