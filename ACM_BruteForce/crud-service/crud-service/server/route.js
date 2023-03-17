import express from 'express';
import { getUsers, addUser, getUserById, editUser, deleteUser , getInternships, addInternship ,getInternshipById, editInternship, deleteInternship } from '../controller/user-controller.js';
import {addPPO, getPPOById,getPPOs,editPPO, deletePPO} from '../controller/ppo-controller.js'
const router = express.Router();

router.get('/', getUsers);
router.post('/add', addUser);

router.get('/allint', getInternships);
router.post('/addint', addInternship);

router.put('/int/:id', editInternship);

router.get('/allppo', getPPOs);
router.post('/addppo', addPPO);

router.put('/ppo/:id', editPPO);

router.delete('/delu:id', deleteUser);


router.delete('/deli:id', deleteInternship);
router.delete('/delp:id', deletePPO);
router.put('/:id', editUser);

router.get('/:id', getPPOById);
router.get('/:id', getInternshipById);
router.get('/:id', getUserById);

export default router;