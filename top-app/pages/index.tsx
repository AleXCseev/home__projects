import { GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import { Button, Tag, P, Raiting, Input, Textarea, Search } from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.inteface";
import { API } from "../helpers/api";

function Home({ menu }: HomeProps): JSX.Element {
	const [raiting, setRaiting] = useState<number>(4);

	return (
		<>
			<Button appearance={"primary"} arrow="down">
				Button
			</Button>
			<Button appearance={"ghost"} arrow="right">
				Button
			</Button>
			<P size="l">Big</P>
			<P>Middle</P>
			<P size="s">Small</P>
			<Tag size="s" color="ghost">
				Ghost
			</Tag>
			<Tag size="m" color="primary">
				Ghost
			</Tag>
			<Tag size="m" color="green">
				Ghost
			</Tag>
			<Tag size="m" color="grey">
				Ghost
			</Tag>
			<Tag size="m" color="red">
				Ghost
			</Tag>
			<Raiting raiting={raiting} isEditable setRaiting={setRaiting}></Raiting>
			<Input></Input>
			<Textarea placeholder="textarea"></Textarea>
			
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(
		API.topPage.find,
		{
			firstCategory,
		},
	);
	return {
		props: {
			menu,
			firstCategory,
		},
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
