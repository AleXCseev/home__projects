import { AdvantagesProps } from "./Advanatges.props";
import styles from "./Advantages.module.css";
import CheckIcon from "./check.svg";
import React from "react";

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
	return (
		<>
			{advantages.map(a => (
				<div key={a._id} className={styles.advanatge}>
					<CheckIcon></CheckIcon>
					<div className={styles.title}>{a.title}</div>
					<div className={styles.vline}/>
					<div>{a.description}</div>
				</div>
			))}
		</>
	);
};
