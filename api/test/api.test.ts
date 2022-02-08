import request from "supertest";
import { app } from "../src/api";

describe("test api server", () => {
	it("testing get method", async () => {
		const res = await request(app).get("/");

		expect(res).toBe({});
	});
});
