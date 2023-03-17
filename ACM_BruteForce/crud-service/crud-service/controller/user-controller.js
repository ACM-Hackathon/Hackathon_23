
import User from '../model/user.js';
import Internship from '../model/internship.js';


// Get all users
export const getUsers = async (request, response) => {
    try{
        const users = await User.find();
        response.status(200).json(users);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of the user in database
export const addUser = async (request, response) => {
    const user = request.body;
    
    const newUser = new User(user);
    try{
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Get a user by id
export const getUserById = async (request, response) => {
    try{
        const user = await User.findById(request.params.id);
        response.status(200).json(user);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited user in the database
export const editUser = async (request, response) => {
    let user = request.body;

    const editUser = new User(user);
    try{
        await User.updateOne({_id: request.params.id}, editUser);
        response.status(201).json(editUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of user from the database
export const deleteUser = async (request, response) => {
    try{
        await User.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

//Get all internships

export const getInternships = async (request, response) => {
    try{
        
        const internships = await Internship.find();
        response.status(200).json(internships);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}


export const addInternship = async (request, response) => {
    const internship = request.body;
    
    const newInternship = new Internship(internship);
    try{
        await newInternship.save();
        response.status(201).json(newInternship);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}


export const getInternshipById = async (request, response) => {
    try{
        const internship = await Internship.findById(request.params.id);
        response.status(200).json(internship);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}


export const deleteInternship = async (request, response) => {
    try{
        await Internship.deleteOne({_id: request.params.id});
        response.status(201).json("Internship deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}


export const editInternship = async (request, response) => {
    let internship = request.body;

    console.log("Internship");

    // const editInternship = new Internship(internship);
    try{
        // await Internship.updateOne({_id: request.params.id}, editInternship);
        const editInternship = await Internship.findByIdAndUpdate(request.params.id, { ...internship });
        console.log(editInternship)
        response.status(201).json(editInternship);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}


export const getAnnouncements = async (request, response) => {
    try{
        
        const announcements = await Announcement.find();
        
        response.status(200).json(announcements);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}