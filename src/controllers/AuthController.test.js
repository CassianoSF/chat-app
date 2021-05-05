import 'regenerator-runtime'
import Joi from 'joi'
import AuthController from './AuthController'

describe('Login 123', () => {
	it('testeee 123', async (done) => {
		const res = { status: () => ({ json: (param) => console.log(param) }) } 
		const req = { body: { email: 'test@example.com', password: 123 }}
		const validateSpy = jest.spyOn(AuthController.schema.login, 'validate')
		AuthController.login(req, res)
		expect(validateSpy).toHaveBeenCalledWith(req.body)
		expect(AuthController.schema.login.validate(req.body).error.message).toBe('"password" must be a string')
		done()
	})
})
