import React from "react";
import { Button, Tag, P } from "../components";

export default function Home(): JSX.Element {
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
			<Tag size="m" color="ghost" href={"https://www.google.com"}>Ghost</Tag>
		</div>
	);
}
