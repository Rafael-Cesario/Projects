/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import produce from 'immer';
import { useEffect, useRef, useState } from 'react';

import { IInitialValue } from '../context/leveContext';
import { IPlayerData } from '../context/leveContext';

interface bodyData {
	id: string;
	changes: {
		name?: string;
		skill?: string;
		level?: number;
		have?: number;
		need?: number;
		activeDays?: string[];
	};
}

interface Response {
	user: { message?: string; _id?: string | null; name?: string; skill?: string };
}

export const useDatabase = (initialValue: IInitialValue) => {
	const [player, setPlayer] = useState(initialValue.player);
	const [experiencPoints, setExperiencPoints] = useState(initialValue.experiencPoints);
	const [activeDays, setActiveDays] = useState(initialValue.activeDays);

	const storageID = useRef<string>('');

	const loadData = async () => {
		const { data: playerData } = await axios.post<IPlayerData>('http://localhost:4000', { id: storageID });

		if (!playerData.data) return;

		const generateStates = <StateType>(stateToGenerate: StateType) => {
			const newState = produce(stateToGenerate, (draft) => {
				const entries = Object.entries(draft);

				entries.forEach(([key, value]) => {
					draft[key] = playerData.data[key] || value;
				});
			});

			return newState;
		};

		setPlayer(generateStates(player));
		setExperiencPoints(generateStates(experiencPoints));
		setActiveDays(playerData.data.activeDays || activeDays);
	};

	const updateDatabase = async () => {
		const { name, skill } = player;
		const { have, level, need } = experiencPoints;

		const uri = 'http://localhost:4000/user';

		const body: bodyData = {
			id: storageID.current,
			changes: { name, skill, have, level, need, activeDays },
		};

		const { data: database } = await axios.post<Response>(uri, body);

		if (!database.user._id) return;
		localStorage.setItem('playerID', database.user._id);
	};

	useEffect(() => {
		storageID.current = localStorage.getItem('playerID');
		loadData();
	}, []);

	useEffect(() => {
		if (!player.name && !player.skill) return;

		storageID.current = localStorage.getItem('playerID');

		const updateAfterDelay = setTimeout(() => {
			updateDatabase();
		}, 2000);

		return () => clearTimeout(updateAfterDelay);
	}, [player, experiencPoints, activeDays]);

	return {
		player,
		setPlayer,

		experiencPoints,
		setExperiencPoints,

		activeDays,
		setActiveDays,
	};
};
