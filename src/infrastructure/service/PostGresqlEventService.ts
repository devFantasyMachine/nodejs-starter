import { EventService } from "../../domain/service/event.service";
import { Event } from "../../domain/types/event";



export class PostGresqlEventService extends EventService {


    public save = (event: Event) => {


        return Promise.resolve({} as Event);
    };

    public delete: (event: Event) => Promise<void>;
    public saveAll: (events: Event[]) => Promise<Event[]>;
    public deleteAll: (events: Event[]) => Promise<void>;
    public getEventById: (id: string) => Promise<Event>;
    public getEventsByType: (eventType: string, afterDate: string) => Promise<Event[]>;
    public getDaysEvents: (date: string, eventType?: string | undefined) => Promise<Event[]>;
    public getEventsByUser: (userId: string, afterDate?: string | undefined) => Promise<Event[]>;
    public getEventsByUserAndType: (userId: string, eventType: string) => Promise<Event[]>;


}





