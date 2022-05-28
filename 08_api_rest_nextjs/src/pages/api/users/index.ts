import type { NextApiRequest, NextApiResponse } from "next";

import "../../../utils/database/index";

import { allUsers } from "../../../utils/database/methods/allUsers";
import { deleteUser } from "../../../utils/database/methods/deleteUser";
import { newUser } from "../../../utils/database/methods/newUser";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const method = req.method;

	if (method === "GET") {
		const users = await allUsers();
		res.status(200).json({ users });
		return;
	}

	if (method === "POST") {
		const { name } = req.body;
		const user = await newUser(name);
		res.status(200).json({ message: "Novo Usuario Criado", user });
		return;
	}

	if (method === "DELETE") {
		const { name } = req.body;
		const user = await deleteUser(name);
		res.status(200).json({ message: "Usuario deletado", user });
		return;
	}
};
