import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from "classnames";
import Logo from "../logo.svg"
import React, { useEffect, useState } from "react";
import { ButtonIcon } from "../../components";
import { motion, useReducedMotion } from "framer-motion";
import { Sidebar } from "../Sidebar/Sidebar";
import { useRouter } from "next/router"

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	const [isOpened, setIsOpened] = useState<boolean>(false)
	const router = useRouter()
	const shouldReducedMotion = useReducedMotion()

	useEffect(() => {
		setIsOpened(false)
	}, [router]);

	const variants = {
		opened: {
			opacity: 1,
			x: 0,
			transition: {
				stiffness: 20
			}
		},
		closed: {
			opacity: shouldReducedMotion ? 1 : 0,
			x: "100%",
		}
	}

	return (
		<header className={cn(className, styles.header)} {...props}>
			<Logo></Logo>
			<ButtonIcon appearance="white" icon="menu" onClick={() => setIsOpened(true)}></ButtonIcon>
			<motion.div 
				className={styles.mobileMenu}
				variants={variants}
				initial={"closed"}
				animate={isOpened ? "opened" : "closed"}
			>
				<Sidebar></Sidebar>
				<ButtonIcon 
					className={styles.menuClose} 
					appearance="white" 
					icon="close" 
					onClick={() => setIsOpened(false)}
				></ButtonIcon>
			</motion.div>
		</header>
	);
};
