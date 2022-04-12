import express from "express";

import { allFriends, addFriend, findFriend, delFriend, filterFriends, updateFriend } from "../Methods/friends";

const router = express.Router();

router.get("/all", (req, res) => {
	allFriends(req, res);
});

router.post("/add", (req, res) => {
	addFriend(req, res);
});

router.post("/find", (req, res) => {
	findFriend(req, res);
});

router.delete("/del", (req, res) => {
	delFriend(req, res);
});

router.post("/filter", (req, res) => {
	filterFriends(req, res);
});

router.put("/update", (req, res) => {
	updateFriend(req, res);
});

export default router;
