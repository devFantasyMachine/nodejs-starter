import { Router, Request, Response } from 'express';
 

import actionController from '../controller/action.controller';

const actionRouter = Router();


actionRouter.get("", actionController.getActions);
actionRouter.post("", actionController.createAction);
 

export default actionRouter;
