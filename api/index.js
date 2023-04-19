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




















// Set The Storage Engine
const storage = multer.diskStorage({
  destination: 'images',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('file');

// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}


app.post('/api/upload', (req, res) => {
  upload(req, res, (err) => {
    if(err){
      console.log(err);
    } else {
      if(req.file == undefined){
        res.json('no file man....')
      } else {
	   res.status(200).json("File has been uploaded");
      }
    }
  });
});




















//   MULTER MIDDLEWARE

// const storage = multer.diskStorage({
// 	destination: (req, file, cb) => {
// 	  cb(null, "images");
// 	},
// 	filename: (req, file, cb) => {
// 	  cb(null, req.body.name);
// 	},
//   });

//   const upload = multer({ storage: storage });

//   app.post("/api/upload", upload.single("file"), (req, res) => {
// 	res.setHeader("Access-Control-Allow-Origin", "http://localhost:5000");
// 	res.status(200).json("File has been uploaded");
//   });

//  END OF MULTER MIDDLEWARE



app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);


app.use(express.static(path.join(__dirname, "./client/dist/")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist/index.html"));
})


app.listen(5000, () => {
	console.log("Backend is running...")
})
