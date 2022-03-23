const crypto = require("crypto");

const key01 = crypto.randomBytes(32).toString("hex");
const key02 = crypto.randomBytes(32).toString("hex");

console.table({ key01, key02 });
