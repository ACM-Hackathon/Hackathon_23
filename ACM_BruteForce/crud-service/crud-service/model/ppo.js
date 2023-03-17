import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const ppoSchema = mongoose.Schema({
    pcname: String,
    pbatch: Number,
    pctc: Number,
    pdetail: String

});

autoIncrement.initialize(mongoose.connection);
ppoSchema.plugin(autoIncrement.plugin, 'ppo');

const postPPO = mongoose.model('ppo', ppoSchema);

export default postPPO;