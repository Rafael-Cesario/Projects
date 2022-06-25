import { useQuery } from "@apollo/client";
import { DocumentNode } from "graphql";
import { useEffect, useState } from "react";

type queryAllLists = {
	loading: boolean;
	data: unknown;
};

export const useQueryData = (query: DocumentNode, queryName: string) => {
	const { loading, data }: queryAllLists = useQuery(query);
	const [state, setState] = useState();

	useEffect(() => {
		!loading && setState(data[queryName]);
	}, [loading, data]);

	return state;
};
