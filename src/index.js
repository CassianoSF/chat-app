import express from 'express'
import mosca from 'mosca'

import AuthController from './controllers/AuthController'

authRoutes = express.Router()
authRoutes.post('/login', AuthController.login)
authRoutes.post('/register', AuthController.register)

server = express()
server.use(authRoutes)

server.listen (3000, (success, err) => {
	console.log('Server listening on port http://localhost:3000')
})
