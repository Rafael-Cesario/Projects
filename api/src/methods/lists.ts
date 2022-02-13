import { Lists } from "../models/lists";
import express from "express";

type req = express.Request;
type res = express.Response;

const allLists = async (req: req, res: res): Promise<void> => {
	const lists = await Lists.find({});
	res.json(lists);
};

const addList = async (req: req, res: res): Promise<void> => {
	try {
		const lists = await Lists.create(req.body);
		res.json(lists);
	} catch (error: any) {
		res.json(error.message);
	}
};

const updateList = async (req: req, res: res): Promise<void> => {
	try {
		const [findPropertie, findValue] = req.body.find;
		const [updatePropertie, updateValue] = req.body.update;
		await Lists.updateOne({ [findPropertie]: findValue }, { [updatePropertie]: updateValue });
		allLists(req, res);
	} catch (error: any) {
		res.json(error.message);
	}
};

const deleteList = async (req: req, res: res): Promise<void> => {
	try {
		await Lists.deleteOne({ ListName: req.body.listName });
		allLists(req, res);
	} catch (error: any) {
		res.json(error.message);
	}
};

export { allLists, addList, updateList, deleteList };
