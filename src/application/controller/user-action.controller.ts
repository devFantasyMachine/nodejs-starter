import { Request, Response } from 'express';
import { autoCatch } from '../../infrastructure/utils/auto-catch';


 


const getAllUserActions = async (req: Request, res: Response) => {

    const { id } = req.params;

    const {timestamp} = req.body;

};


const getUserActionByName = async (req: Request, res: Response) => {

    const { id, name } = req.params;


};


const getUserByActionNameBetweenDate = async (req: Request, res: Response) => {

    const { id, name } = req.params;


};



 


export default  {
 
    getUserActionByName: autoCatch(getUserActionByName),
}

