import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
import { createPost } from './controllers/posts.js';
import { register } from './controllers/auth.js';
import { fileURLToPath } from 'url';
import { verifyToken } from './middleware/auth.js';
import User from './models/userModel.js';
import Post from './models/postModel.js';
import { users } from './data/index.js';
import { posts } from './data/index.js';

// CONFIGURATIONS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// File storage

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage });

//File Routes
app.post("/auth/register", upload.single("picture"), register);
app.post("/posts", verifyToken, upload.single("picture"), createPost);
//Routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

//Mongoose

mongoose.set("strictQuery", true);
mongoose.connect('mongodb+srv://ion_ion:Freestail1@cluster0.qwqa5qi.mongodb.net/SocialMedia?retryWrites=true&w=majority')
.then(() => {
    console.log("DB OK")
    // ADD DATA ONE TIME
    // User.insertMany(users);
    // Post.insertMany(posts);
})
.catch((err) => {console.log("db error", err)});

// Listen
app.listen(4444, (err) => {
    if(err) {
        return console.log(err);
    }

    console.log('Server OK');
});
