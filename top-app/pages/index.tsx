import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Button } from "../components";
import { P } from "../components/P/P";

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
		</div>
	);
}
