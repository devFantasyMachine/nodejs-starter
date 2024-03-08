import { Request, Response } from 'express';
import { autoCatch } from '../../infrastructure/utils/auto-catch';
import { EventService } from '../../domain/service/event.service';
import { EventHandler } from '../../domain/handler/action-handler';
import { Event } from '../../domain/types/event';




const eventService = new EventService();
const eventHandler =  new EventHandler(eventService);
 


const getActions = async (req: Request, res: Response) => {

    const actions = await eventHandler.getEventTypes();
    return actions;

};


const createAction = async (req: Request<any, any, Event>, res: Response) => {


    const dto = req.body;
    const event = await eventHandler.createEventType();



};




export default  {

    getActions: autoCatch(getActions),
    createAction: autoCatch(createAction),
}

