const { Router } = require('express');
const router = Router();
const { loginController, registerController, meController } = require('../contillers/users-controller');

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/me', meController);

module.exports = router;