// Libraries
const router = require('express').Router()

// Controllers
const { CheckInControllers } = require('../controllers')

router.get('/', [
    (req, res, next) => res.status(200).json({ message: 'Respuesta exitosa!', ruta: 'https://andesairlines-api.fly.dev/flights/:id/passengers' }),
])

router.get('/login', [
    CheckInControllers.login,
])

router.get('/register', [
    CheckInControllers.register,
])

router.get('/getAllTeams', [
    CheckInControllers.getAllTeams,
])

router.get('/match', [
    CheckInControllers.match,
])



module.exports = router
