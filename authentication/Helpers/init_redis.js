const redis = require("redis");

const client = redis.createClient({
	port: 6379,
	host: "127.0.0.1",
});

client.connect();

client.on("connect", () => {
	console.log("client connected to redis...");
});

client.on("connect", () => {
	console.log("client ready to use...");
});

client.on("error", (error) => {
	console.log(error.message);
});

client.on("end", () => {
	console.log("client disconnected from redis");
});

process.on("SIGINT", () => {
	client.quit();
});

// (setRedis = async (value) => {
// 	await client.set("teste", "testando");
// })();

// (getRedis = async () => {
// 	const value = await client.get("teste");
// 	console.log(value);
// })();

module.exports = client;
