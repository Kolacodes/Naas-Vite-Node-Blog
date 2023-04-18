const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

const express = require('express');
const app = express();
const cors = require('cors');

// Allow all origins to access the API
// app.use(cors());

// Allow only specified origins to access the API
app.use(cors({
  origin: ['http://localhost:5000', 'http://localhost:3000']
}));

// REGISTER
router.post("/register", async (req, res) => {
	try {
		res.setHeader("Access-Control-Allow-Origin", "http://localhost:5000");
		const salt = await bcrypt.genSalt(10);
		const hashedPass = await bcrypt.hash(req.body.password, salt);
		const newUser = new User({
			username: req.body.username,
			email: req.body.email,
			password: hashedPass,
		})

		const user = await newUser.save();
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}

})

// LOGIN
router.post('/login', async (req, res) => {
	try {
		res.setHeader("Access-Control-Allow-Origin", "http://localhost:5000");
		const user = await User.findOne({username: req.body.username})
		!user && res.status(400).json("Wrong credentials!")

		const validated = await bcrypt.compare(req.body.password, user.password)
		!validated && res.status(400).json("Wrong credentials!")
		
		const { password, ...others } = user._doc; //to destructure the user object password removed
		res.status(200).json(others);
	} catch (error) {
		
	}
})

module.exports = router