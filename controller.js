//   Controller Functions 

const getUsers = (request, response) => {
    response.status(200).send(users)
}

const getUserByParam = (request, response) => {
    // Destructure ID from req.params
    const {id} = request.params

    // Loop through users to find user with matching ID
    for(let i = 0; i < users.length; i++){
        if(users[i].id === +id){
            response.status(200).send(users[i])
        }
    }
}

const getUserByQuery = (request, response) => {
    const {id} = request.query

    const foundUser = users.filter((user) => {
        if(user.id === +id) return user
    })
    response.status(200).send(foundUser[0])
}

const createNewUser = (request, response) => {
    const newUser = {
        id: users.length + 1,
        first_name: request.body.first_name || "",
        last_name: request.body.last_name || "",
        email: request.body.email || "",
        hobbies: request.body.hobbies || [],
        laptop: request.body.laptop || {}
    }

    users.push(newUser)

    response.status(200).send(users)
}

const updateUser = (request, response) => {
    const {id} = request.params

    for(let i = 0; i < users.length; i++){
        if(users[i].id === +id){
            users[i]. first_name = "Kyle"
        }
    }

    response.status(200).send(users)
}

const deleteUser = (request, response) => {
    const {id} = request.params

    users = users.filter((user) => {
        if(user.id !== +id) return user
    })
    response.status(200).send(users)
}

module.exports = {
    getUsers,
    getUserByParam,
    getUserByQuery,
    createNewUser,
    updateUser,
    deleteUser
}