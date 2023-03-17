const User = require('./../models/user');

module.exports.createProfile = async (req, res) => {

    try {

        const { name, email, mobile } = req.body;

        if(!name || !email || !mobile) {
            return res.status(400).json({
                message: "Missing required field(s)"
            });
        }

        const user = await User.create({ name, email, mobile });

        res.status(200).json({
            user: user,
            message: "User Registered Successfully"
        });

    } catch (error) {

        res.status(400).json({
            message: error
        });

    }

}

module.exports.getProfileById = async (req, res) => {

    try {
        
        const { id } = req.params;

        const user = await User.findById(id);

        if(!user) {
            res.status(404).json({
                message: "User not found !!!"
            });
        }

        res.status(200).json({
            user: user,
            message: "User fetched successfully !!!"
        });

    } catch (error) {
        
        res.status(400).json({
            message: error
        });

    }

}