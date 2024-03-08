import { EventService } from "../service/event.service";




const createAction = () => {







}



export class EventHandler {


    readonly eventService: EventService;

    constructor(eventService: EventService) {
        this.eventService = eventService; 
      
        // Only because we are extending a built in class
        Object.setPrototypeOf(this, EventHandler.prototype);
    }


    getEventTypes() {
        
        return this.eventService.getEventTypes();
    }
 
}










