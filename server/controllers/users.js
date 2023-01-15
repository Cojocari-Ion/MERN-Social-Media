import User from "../models/userModel";

// READ 
export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({ message: "Couldn't find user" });
    }
}

export const getUserFriends = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        const friends = Promise.all(
            user.friends.map((id) => User.findById(id))
        );

        const formattedFriends = friends.map(
            ({_id, firstName, lastName, occupation, location, picturePath}) => {
                return {_id, firstName, lastName, occupation, location, picturePath};
            }
        );
        res.status(200).json(formattedFriends);

    } catch(err) {
        res.status(404).json({message: "Couldn't find users"})
    }
}

const addRemoveFriend = async () => {
    try {
        const { id, friendId } = req.params;
        const user = User.findById(id);
        const friend = User.findById(friendId);

        if (user.friends.includes(friendId)) {
            user.friend = user.friends.filter((id) => id !== friendId);
            friend.friends = friend.friends.filter((id) => id !== id)
        } else {
            user.friends.push(friendId);
            friend.friends.push(id);
        }

        await user.save();
        await friend.save();

        const friends = Promise.all(
            user.friends.map((id) => User.findById(id))
        );

        const formattedFriends = friends.map(
            ({_id, firstName, lastName, occupation, location, picturePath}) => {
                return {_id, firstName, lastName, occupation, location, picturePath};
            }
        );

        res.status(200).json(formattedFriends);

    } catch(err) {
        res.status(404).json({message: "Couldn't delete user"})
    }
}