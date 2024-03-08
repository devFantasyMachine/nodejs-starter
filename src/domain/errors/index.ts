
export type DomainErrorContent = {
    message: string,
    context?: { [key: string]: any }
};

export abstract class DomainError extends Error {

    abstract readonly code: string;
    private readonly errors: DomainErrorContent[]; 

    constructor(message: string, errors: DomainErrorContent[]) {
        super(message);
        this.errors = errors;

        // Only because we are extending a built in class
        Object.setPrototypeOf(this, DomainError.prototype);
    }
}


export class ActionNotFound extends DomainError {

    constructor(message: string, errors: DomainErrorContent[]){
        super(message, errors);
    }
 
    get code(){
        return "ACTION_NOT_FOUND";
    }

}




