import PPO from '../model/ppo.js';
export const getPPOs = async (request, response) => {
    try{
        const ppos = await PPO.find();
        response.status(200).json(ppos);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}
export const addPPO = async (request, response) => {
    const ppo = request.body;
    const newPPO = new PPO(ppo);
    try{
        await newPPO.save();
        response.status(201).json(newPPO);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

export const getPPOById = async (request, response) => {
    try{
        const ppo = await PPO.findById(request.params.id);
        response.status(200).json(ppo);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

export const editPPO = async (request, response) => {
    let ppo = request.body;

    const editPPO = new PPO(ppo);
    try{
        await PPO.updateOne({_id: request.params.id}, editPPO);
        response.status(201).json(editPPO);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

export const deletePPO = async (request, response) => {
    try{
        await PPO.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}