import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchOneNB } from "../shared/request";

interface NB {
	name: string;
	id: number;
}

const Notes = () => {
	const params = useParams();

	const [NB, setNBdata] = useState<NB>({ name: "", id: 0 });

	useEffect(() => {
		fetchOneNB(Number(params.id), setNBdata);
	}, []);

	return (
		<div>
			<h1>{NB.name}</h1>
			<h1>{NB.id}</h1>
		</div>
	);
};

export { Notes };
