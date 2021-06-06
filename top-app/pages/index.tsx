import React, { useEffect, useState } from "react";
import { Button, Tag, P, Raiting } from "../components";

export default function Home(): JSX.Element {
	const [raiting, setRaiting] = useState<number>(4)
	return (
		<div>
			<Button appearance={"primary"} arrow="down">
				Button
			</Button>
			<Button appearance={"ghost"} arrow="right">
				Button
			</Button>
			<P size="l">Big</P>
			<P>Middle</P>
			<P size="s">Small</P>
			<Tag size="s" color="ghost">Ghost</Tag>
			<Tag size="m" color="primary">Ghost</Tag>
			<Tag size="m" color="green">Ghost</Tag>
			<Tag size="m" color="grey">Ghost</Tag>
			<Tag size="m" color="red">Ghost</Tag>
			<Raiting raiting={raiting} isEditable setRaiting={setRaiting}></Raiting>
		</div>
	);
}
