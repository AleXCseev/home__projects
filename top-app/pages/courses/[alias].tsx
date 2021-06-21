import { GetStaticProps } from "next";
import React, { useState } from "react";
import { withLayout } from "../layout/Layuot";
import axios from "axios";
import { MenuItem } from "../../interfaces/menu.inteface";

function Course({ menu }: CourseProps): JSX.Element {
	return (
		<>
		
		</>
	);
}

export default withLayout(Course);

export const getStaticProps: GetStaticProps = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<CourseProps>(
		process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
		{
			firstCategory,
		},
	);
    const { data: page } = await axios.post<CourseProps>(
		process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
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

interface CourseProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
