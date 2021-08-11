import { ReviewProps } from "./Review.props";
import styles from "./Review.module.css";
import UserIcon from "./user.svg";
import cn from "classnames";
import { format } from "date-fns"
import { ru } from "date-fns/locale" 
import React from "react";
import { Raiting } from "..";

export const Review = ({ review, className, ...props }: ReviewProps): JSX.Element => {
	const { name, title, description, createdAt, rating} = review

	return (
		<div className={cn(styles.review, className)} {...props}>
			<UserIcon className={styles.user}></UserIcon>
			<div className={styles.title}>
				<span className={styles.name}>{name}:</span>&nbsp;&nbsp;
				<span>{title}</span>
			</div>
			<div className={styles.date}>
				{format( new Date(createdAt), "dd MMMM yyyy", { locale: ru })}
			</div>
			<div className={styles.raiting}>
				<Raiting raiting={rating}></Raiting>
			</div>
			<div className={styles.description}>
				{description}
			</div>
		</div>
	);
};
