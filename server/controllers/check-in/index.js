const login = require('./login.js')
const register = require('./register.js')

const getAllTeams = require('./getAllTeams.js')
const match = require('./match.js')

module.exports = {
    getAllTeams,

    login,
    register,
    match,
}
