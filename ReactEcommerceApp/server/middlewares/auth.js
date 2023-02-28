const admin = require('../_firebase');
const User  = require('../models/user');

exports.verifyToken = async (req, res, next) => {
    const token = {...req.headers}.authtoken;
    console.log('Verifying the token', token);
    try {
        // Authenticate with firebase
        const firebaseUser = await admin.auth().verifyIdToken(token);

        // Add to 'req' variable to access globally
        req.user = firebaseUser;

        // call the Callback function
        next();

    } catch (error) {
        console.log('AuthError', error.message);
        res.status(401).json({
            error: `Authentication is failed. ${error.message}`
        });
    }
}


// Check if trying to access the Admin's pages and have the relevant permissions?
exports.adminCheck = async (req, res, next) => {
    // Get e-mail address from previous "verifyToken" middleware.
    const {email} = req.user; 

    // Check in database
    const user = await User.findOne({email: email}).exec();

    // Check the 'role'
    if (user.role !== 'admin') {
        res.status(403).json({
            error: "It's admin related resource. You don't have the access!"
        });
    } else {
        // Admin user, allow to proceed.
        next();    
    }
}