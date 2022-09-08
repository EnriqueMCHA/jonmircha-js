const admin = {

    username: 'EnriquE',
    password: '123456',
    auth: 'Admin++'
}

export default admin;

export function login(username){

    console.log(`Login Successful ${username}!`);
}

export function checkAuth(auth){

    let authAccess = auth || false;

    return authAccess;
}