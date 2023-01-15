import Post from "../models/postModel";
import User from "../models/userModel";

// CREATE
export const createPost = async () => {
    try {
        const { userId, description, picturePath } = req.body;
        const user = await User.findOne(userId);
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            like: {},
            comments: []
        })
        await newPost.save();

        const post = await Post.find();
        res.status(201).json(post);
    } catch (err) {
        res.status(409).json({message: "Couldn't load posts"})
    }   
}

