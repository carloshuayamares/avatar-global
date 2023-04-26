// Libraries
const errors = require('restify-errors')
const _ = require('lodash')

// Actions
const { consultQuery } = require('../../actions')

module.exports = async (req, res, next) => {
    // const { _id } = req.params
    try {
        const url = 'user'
        const method = 'POST'
        const params =
        {
            "name" : "Carlos Alberto",
            "email": "huayamares1@gmail.com",
            "password": "avatarGlobal123$",
            "passwordConfirm" : "avatarGlobal123$"
        }

        const results = await consultQuery(params, url, method)

        return res.status(200).json({ code: 200, data: results })
    } catch (e) {
        return next(new errors.InternalError(e.message))
    }
}
