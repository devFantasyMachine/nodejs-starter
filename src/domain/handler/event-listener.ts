import { EventService } from "../service/event.service";
import { Action, Event } from "../types/event";


export abstract class EventListener {

    private readonly eventService: EventService;


    constructor(eventService: EventService){
        this.eventService = eventService;
    }


    onEvent(event: Event){

        //action.id = "new id";

        return this.eventService.save(event);

    }

 

}


 

