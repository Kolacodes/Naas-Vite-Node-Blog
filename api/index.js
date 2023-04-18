const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require('path');
const cors = require('cors');

// Allow all origins to access the API
// app.use(cors());

// Allow only specified origins to access the API
app.use(cors({
  origin: ['http://localhost:5000', 'http://localhost:3000']
}));


dotenv.config();
app.use(express.json()); // to allow our app to send json data..

mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(console.log("Connected to MongoDB"))
.catch(err => console.log(err));


const storage = multer.diskStorage({
	destination: (req, file, cb) => {
	  cb(null, "images");
	},
	filename: (req, file, cb) => {
	  cb(null, req.body.name);
	},
  });
  

  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:5000");
	res.status(200).json("File has been uploaded");
	// console.log("File has been uploaded");
  });


app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);


app.use(express.static(path.join(__dirname, "./client/dist/")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist/index.html"));
})


app.listen(process.env.PORT || '5000', () => {
	console.log("Backend is running...")
})
