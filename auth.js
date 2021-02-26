const register = function(username){

    console.log(`User ${username} has been registered!`)


}

const login = function(username, password){

    console.log(`User ${username} is Logged In!`)

}

module.exports = {

    register, 
    login

}