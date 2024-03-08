import { Router, Request, Response } from 'express';
 

import userActionController from '../controller/user-action.controller';

const userActionRouter = Router();


userActionRouter.get("/:id/:name", userActionController.getUserActionByName); 
 

export default userActionRouter;

