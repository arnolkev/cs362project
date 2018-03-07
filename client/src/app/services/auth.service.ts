import {Injectable, EventEmitter} from "@angular/core";

@Injectable()
export class AuthService {
    constructor() {

    }

    loggedIn: EventEmitter<boolean> = new EventEmitter();
    loggedOut: EventEmitter<boolean> = new EventEmitter();

    logIn() {
        localStorage.setItem('user_logged_in', 'yes');
        this.loggedIn.emit(true);
    }

    logOut() {
        localStorage.removeItem('user_logged_in');
        this.loggedOut.emit(true);
    }

    isLoggedIn() {
        return !!(localStorage.getItem('user_logged_in'));
    }
}