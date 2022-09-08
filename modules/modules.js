import user, {deniedAccess} from './user.js';
import admin, {login, checkAuth} from './admin.js';

function validateLogin(obj){

    if(checkAuth(obj.auth) === false){

        deniedAccess(obj.username);
        return;
    }

    login(obj.username);
}


validateLogin(user);
validateLogin(admin);