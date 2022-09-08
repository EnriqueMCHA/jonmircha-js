const user = {

    username: 'EuqirnE',
    password: '123456',
    auth: null
}

export default user;

export function deniedAccess(username){
    
    console.log(`You ${username} don't have access right now`);
}
