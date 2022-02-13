import express from "express";

import { allLists, addList, updateList, deleteList } from "../methods/lists";

const router = express.Router();

router.get("/", (req, res) => {
	allLists(req, res);
});

router.post("/", (req, res) => {
	addList(req, res);
});

router.put("/", (req, res) => {
	updateList(req, res);
});

router.delete("/", (req, res) => {
	deleteList(req, res);
});

export default router;
