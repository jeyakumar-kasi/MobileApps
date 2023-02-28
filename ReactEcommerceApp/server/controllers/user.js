const User = require('../models/user');

exports.create = async (req, res) => {
    const {email, name, picture} = req.user; // Updated from firebase response in auth middleware.
    if (!name) {
        // Extract from the email address
        name = email.split('@')[0];
    }

    // Check in Mongoose database
    const dbUser = await User.findOneAndUpdate({email: email}, {name: name, profileImage: picture}, {new: true});

    if (dbUser) {
        // Found in the database
        res.json(dbUser);
    } else {
        // Create a new one
        const newUser = await new User({
            name: name,
            email: email,
            profileImage: picture
        });

        // commit
        newUser.save();

        res.json(newUser);
    }

    
};

exports.get = (req, res) => {
    const {email} = req.user;

    // Get the user details from the database
    User.findOne({email: email}).exec((error, user) => {
        if (error) {
            // Not found
            throw new Error(error);
        }

        // Return user details
        res.json(user);
    });
}