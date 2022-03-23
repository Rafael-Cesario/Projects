const User = require("../Models/User.model");
const { singAcessToken, signRefreshToken, verifyRefreshToken } = require("../Helpers/jwt_helper");
const { authSchema } = require("../Helpers/validate_schema");
const client = require("../Helpers/init_redis");
const createError = require("http-errors");

module.exports = {
	register: async (req, res, next) => {
		try {
			const result = await authSchema.validateAsync(req.body);
			const hasUser = await User.findOne({ email: result.email });
			const user = new User(result);

			if (hasUser) throw createError.Conflict(`${result.email} allready exist`);

			const savedUser = await user.save();
			const accessToken = await singAcessToken(savedUser.id);
			const refreshToken = await signRefreshToken(savedUser.id);

			res.send({ accessToken, refreshToken });
		} catch (error) {
			if (error.isJoi === true) error.status = 422;
			next(error);
		}
	},

	login: async (req, res, next) => {
		try {
			const result = await authSchema.validateAsync(req.body);

			const user = await User.findOne({ email: result.email });
			if (!user) throw createError.NotFound("User not Registred");

			const isMatch = await user.isValidPassword(result.password);
			if (!isMatch) throw createError.Unauthorized("UserName/Password not valid");

			const accessToken = await singAcessToken(user.id);
			const refreshToken = await signRefreshToken(user.id);

			res.send({ accessToken, refreshToken });
		} catch (error) {
			if (error.isJoi === true) {
				return next(createError.BadRequest("Invalid Username or Password"));
			}
			next(error);
		}
	},

	refresh_token: async (req, res, next) => {
		try {
			const { refreshToken } = req.body;
			if (!refreshToken) throw createError.BadRequest();

			const userId = await verifyRefreshToken(refreshToken);
			const accessToken = await singAcessToken(userId);
			const newRefreshToken = await signRefreshToken(userId);

			res.send({ accessToken: accessToken, refreshToken: newRefreshToken });
		} catch (error) {
			next(error);
		}
	},

	logout: async (req, res, next) => {
		try {
			const { refreshToken } = req.body;
			if (!refreshToken) throw createError.BadRequest();
			const userId = await verifyRefreshToken(refreshToken);
			console.log(userId);
			const value = await client.DEL(userId, (error, value) => {
				if (error) {
					console.log(error);
					throw createError.InternalServerError();
				}
				return value;
			});
			console.log(value);
			res.sendStatus(204);
		} catch (error) {
			next(error);
		}
	},
};
