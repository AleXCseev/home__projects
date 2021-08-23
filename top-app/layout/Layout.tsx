import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import React, { FunctionComponent, useState, KeyboardEvent, useRef } from "react";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";
import { AppContextProvider, IAppContext } from "../context/app.context";
import { Up } from "../components";
import cn from "classnames";

const Layout = ({ children, ...props }: LayoutProps): JSX.Element => {
	const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = useState<boolean>(false) 
	const bodyRef = useRef<HTMLDivElement>(null);

	const skipContentAction = (key:KeyboardEvent) => {
		if (key.code == "Space" || key.code == "Enter") {
			key.preventDefault()
			bodyRef.current?.focus()
		}
		setIsSkipLinkDisplayed(false)
	}

	return (
		<div className={styles.wrapper}>
			<a 
				tabIndex={1} 
				className={cn(styles.skipLink, {
					[styles.displayed]: isSkipLinkDisplayed
			})}
				onFocus={() => setIsSkipLinkDisplayed(true)}
				onKeyDown={skipContentAction}
			>
				Сразу к содержанию
			</a>
			<Header className={styles.header}></Header>
			<Sidebar className={styles.sidebar}></Sidebar>
			<div className={styles.body} ref={bodyRef} tabIndex={0}>{children}</div>
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
