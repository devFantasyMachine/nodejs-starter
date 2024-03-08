import { Event, EventType } from "../types/event"




export abstract class EventService {

    public abstract save: (event: Event) => Promise<Event>;
    public abstract saveAll: (events: Event[]) => Promise<Event[]>;

    public abstract delete: (event: Event) => Promise<void>;
    public abstract deleteAll: (events: Event[]) => Promise<void>;

    public abstract getEventById: (id: string) => Promise<Event>;
    public abstract getEventTypes: () => Promise<EventType[]>;
    public abstract getEventsByType: (eventType: string, afterDate: string) => Promise<Event[]>;
    public abstract getDaysEvents: (date: string, eventType?: string) => Promise<Event[]>;

    public abstract getEventsByUser: (userId: string, afterDate?: string) => Promise<Event[]>;
    public abstract getEventsByUserAndType: (userId: string, eventType: string) => Promise<Event[]>;
}

