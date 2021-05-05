import Joi from 'joi'

class AuthController {
	constructor() {
		this.schema = {
			login: Joi.object({
				email: Joi.string().required(),
				password: Joi.string().required(),
			}),
			register: Joi.object({
				avatar: Joi.number().required(),
				name: Joi.number().required(),
				email: Joi.string().required(),
				password: Joi.string().required(),
			}),
		}
	}
	
	login(req, res) {
		const result = this.schema.login.validate(req.body)
		// const { email, password } = req.body
		// User.authenticate(email, password)
		res.status(200).json(result)
	}
	
	register(req, res) {
		const result = this.schema.register.validate(req.body)
		console.log(result.error)

		const { avatar, name, email, password } = req.body
		console.log(avatar, name, email, password)
		res.status(200).json('OK')
	}
	
}
export default new AuthController