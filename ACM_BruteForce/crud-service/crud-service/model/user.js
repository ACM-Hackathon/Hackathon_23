import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const userSchema = mongoose.Schema({
    name: String,
    PRN: String,
    username: String,
    email: String,
    phone: Number,
    currentyear:String,
    branch: String,
    CGPA: Number,
    SSC_marks:Number,
    HSC_marks:Number
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');
// we need to turn it into a model
const postUser = mongoose.model('user', userSchema);

export default postUser;