import { Friends } from "../Models/friends";
import express from "express";

type req = express.Request;
type res = express.Response;

const allFriends = async (req: req, res: res): Promise<void> => {
	try {
		const friends = await Friends.find({});
		res.json(friends);
	} catch (error: any) {
		res.json(error.message);
	}
};

const addFriend = async (req: req, res: res): Promise<void> => {
	try {
		const friend = await Friends.create(req.body);
		res.json(friend);
	} catch (error: any) {
		res.json(error.message);
	}
};

const findFriend = async (req: req, res: res): Promise<void> => {
	try {
		const find = await Friends.find({ _id: req.body.id });
		res.json(find);
	} catch (error: any) {
		res.json(error.message);
	}
};

const delFriend = async (req: req, res: res): Promise<void> => {
	try {
		const del = await Friends.deleteOne({ _id: req.body.id });
		res.json(del);
	} catch (error: any) {
		res.json(error.message);
	}
};

const filterFriends = async (req: req, res: res): Promise<void> => {
	try {
		const name = req.body.friendName;
		const search = new RegExp(name, "gi");
		const friends = await Friends.find({ friendName: search });
		res.json(friends);
	} catch (error: any) {
		res.json(error.message);
	}
};

const updateFriend = async (req: req, res: res): Promise<void> => {
	try {
		const { friendName, birthday, likes, personality, presents, notes, id } = req.body;

		const friend = await Friends.updateOne(
			{ _id: id },
			{
				friendName,
				birthday,
				likes,
				personality,
				presents,
				notes,
				id,
			}
		);

		res.json(friend);
	} catch (error: any) {
		res.json(error.message);
	}
};

export { allFriends, addFriend, findFriend, delFriend, filterFriends, updateFriend };
