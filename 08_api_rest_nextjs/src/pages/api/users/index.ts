import type { NextApiRequest, NextApiResponse } from "next";

import "../../../utils/database/index";

import { allUsers } from "../../../utils/database/methods/allUsers";
import { deleteUser } from "../../../utils/database/methods/deleteUser";
import { newUser } from "../../../utils/database/methods/newUser";
import { updateUser } from "../../../utils/database/methods/updateUser";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const method = req.method;

	if (method === "GET") {
		try {
			const users = await allUsers();
			res.status(200).json({ users });
		} catch (error) {
			res.status(400).json({ message: "something went wrong" });
		}
		return;
	}

	if (method === "POST") {
		try {
			const { name } = req.body;
			const user = await newUser(name);
			res.status(201).json({ message: "New user created", user });
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
		return;
	}

	if (method === "DELETE") {
		try {
			const { name } = req.body;
			const user = await deleteUser(name);
			res.status(200).json({ message: "User deleted", user });
		} catch (error) {
			res.status(400).json({ message: "no user with this name was found, user not deleted." });
		}
		return;
	}

	if (method === "PUT") {
		try {
			const { id, name } = req.body;
			const user = await updateUser(id, name);
			res.status(200).json({ message: "User update", user });
		} catch (error) {
			res.status(400).json({ message: "Unable to edit this user, incorrect ID" });
		}
	}
};
