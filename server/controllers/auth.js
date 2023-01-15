import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel";

export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picurePath,
            friends,
            location,
            ocupation
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picurePath,
            friends,
            location,
            ocupation,
            viewedProfile,
            impressions, 
        })

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });

        if (!user) return res.status(400).json({message: "User does not exist"});

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) return res.status(400).json({message: "User does not exist"});

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET); 
        delete user.password;
        res.status(200).json({ token, user })
    } catch(err) {

    }
}