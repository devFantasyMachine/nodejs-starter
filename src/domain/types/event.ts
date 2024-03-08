import cuid from 'cuid'

export abstract class Event {

    readonly id: string;
    readonly timestamp: string;
    readonly type: string;

    constructor(timestamp: string, type: string, id?: string) {
        this.timestamp = timestamp;
        this.id = id || cuid();
        this.type = type;

        Object.setPrototypeOf(this, Event.prototype);
    }



}











export interface SessionStartedEvent extends Event {

    userId: string,
    userIp: string,
    userLocation: string
}



export interface UserAction {

    userId: string,
    action: EventType;
    timestamp: Date,
    details: Object,
    permission: string
}




export class EventType {

    readonly id: string;
    readonly code: number;
    readonly name: string;
    readonly description: string;

    constructor(code: number, name: string, description: string, id?: string) {
        this.code = code;
        this.id = id || cuid();
        this.name = name;
        this.description = description;

        // Only because we are extending a built in class
        Object.setPrototypeOf(this, EventType.prototype);
    }


}


















