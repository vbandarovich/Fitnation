import { BehaviorSubject } from 'rxjs';
import { handleResponse } from '../helpers/handleResponce';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    register,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"Email": email, "Password": password})
    };

    return fetch(`https://localhost:44348/api/login`, requestOptions)
        .then(handleResponse)
        .then(
            (user) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            if (user !== null && user !== '') {
                localStorage.setItem('currentUser', JSON.stringify(user));
                currentUserSubject.next(user);

                return user;
            } else {
                return null;
            }
            
        }
        );       
}

function register(userName, email, phone, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"UserName": userName, "Email": email, "Phone": phone, "Password": password})
    };

    return fetch(`https://localhost:44348/api/register`, requestOptions)
        .then(handleResponse)
        .then(
            (user) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            if (user !== null && user !== '') {
                localStorage.setItem('currentUser', JSON.stringify(user));
                currentUserSubject.next(user);
                return user;
            } else {
                return null;
            }    
            }
        );    
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}