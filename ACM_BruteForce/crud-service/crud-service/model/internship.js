import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const internshipSchema = mongoose.Schema({
    cname: String,
    batch: Number,
    stipend: Number,
    detail: String
});


autoIncrement.initialize(mongoose.connection);
internshipSchema.plugin(autoIncrement.plugin, 'internship');

const postInternship = mongoose.model('internship', internshipSchema);

export default postInternship;