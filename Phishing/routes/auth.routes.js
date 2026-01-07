const express = require('express');
const router = express.Router();

const {
  handleLogin,
  handleSignin
} = require('../controllers/auth.controller');

router.post('/login', handleLogin);
router.post('/signin', handleSignin);

router.get('/', (req, res) => {
  res.redirect('/login');
});

module.exports = router;
