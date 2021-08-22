import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import React, { FunctionComponent } from "react";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";
import { AppContextProvider, IAppContext } from "../context/app.context";
import { Up } from "../components";

const Layout = ({ children, ...props }: LayoutProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header}></Header>
			<Sidebar className={styles.sidebar}></Sidebar>
			<div className={styles.body}>{children}</div>
			<Footer className={styles.footer}></Footer>
			<Up></Up>
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
	return function withLayoutnComponent(props: T): JSX.Element {
		return (
			<AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
				<Layout>
					<Component {...props}></Component>
				</Layout>
			</AppContextProvider>
		);
	};
};
