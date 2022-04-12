const JWT = require("jsonwebtoken");
const createError = require("http-errors");
const client = require("./init_redis");

module.exports = {
	singAcessToken: (userId) => {
		return new Promise((resolve, reject) => {
			const payload = {};
			const secret = process.env.ACCESS_TOKEN_SECRET;
			const options = {
				expiresIn: "15s",
				issuer: "somepage.com",
				audience: userId,
			};

			JWT.sign(payload, secret, options, (error, token) => {
				if (error) {
					return reject(createError.InternalServerError());
				}
				resolve(token);
			});
		});
	},
	signRefreshToken: (userId) => {
		return new Promise((resolve, reject) => {
			const payload = {};
			const secret = process.env.REFRESH_TOKEN_SECRET;
			const options = {
				expiresIn: "1y",
				issuer: "somepage.com",
				audience: userId,
			};

			JWT.sign(payload, secret, options, (error, token) => {
				if (error) {
					return reject(createError.InternalServerError());
				}

				client.SET(userId, token, { EX: 365 * 24 * 60 * 60 }, (error, reply) => {
					if (error) {
						console.log(error);
						reject(createError.InternalServerError());
						return;
					}
				});
				resolve(token);
			});
		});
	},
	verifyAcessToken: (req, res, next) => {
		if (!req.headers["authorization"]) return next(createError.Unauthorized());

		const authHeader = req.headers["authorization"];
		const bearerToken = authHeader.split(" ");
		const token = bearerToken[1];

		JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, payload) => {
			if (error) {
				const message = error.name === "JsonWebTokenError" ? "Unauthorized" : error.message;
				return next(createError.Unauthorized(message));
			}
			req.payload = payload;
			next();
		});
	},
	verifyRefreshToken: (refreshToken) => {
		return new Promise((resolve, reject) => {
			JWT.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (error, payload) => {
				if (error) return reject(createError.Unauthorized());

				const userId = payload.aud;
				const result = await client.GET(userId, (error, result) => {
					if (error) {
						console.log(error.message);
						reject(createError.InternalServerError());
						return;
					}
					return result;
				});
				if (refreshToken === result) return resolve(userId);

				reject(createError.Unauthorized());
			});
		});
	},
};
