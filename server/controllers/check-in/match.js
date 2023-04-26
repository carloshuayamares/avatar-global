// Libraries
const errors = require('restify-errors')
const _ = require('lodash')

// Actions
const { consultQuery, authQuery } = require('../../actions')

module.exports = async (req, res, next) => {
    // const { _id } = req.params
    try {
        const url = 'user/login'
        const method = 'POST'
        const params =
        {
            "email": "huayamares1@gmail.com",
            "password": "avatarGlobal123$"
        }
        const results = await consultQuery(params, url, method)


        const results2 = await authQuery(null, 'match', 'GET', results.data.token)

        return res.status(200).json({ code: 200, data: results2 })
    } catch (e) {
        return next(new errors.InternalError(e.message))
    }
}
