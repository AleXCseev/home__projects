import { RaitingProps } from "./Raiting.props";
import styles from "./Raiting.module.css";
import cn from "classnames";
import { useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef, useRef } from "react";
import StarIcon from "./star.svg";

export const Raiting = forwardRef(
	(
		{ isEditable = false, raiting, setRaiting, error, tabIndex, ...props }: RaitingProps,
		ref: ForwardedRef<HTMLDivElement>,
	): JSX.Element => {
		const [raitingArray, setRaitingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
		const raitingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

		useEffect(() => {
			constructRaiting(raiting);
		}, [raiting, tabIndex]);

		const computeFocus = (r: number, i: number): number => {
			if (!isEditable) {
				return -1;
			}
			if (!raiting && i == 0) {
				return tabIndex ?? 0;
			}
			if (r == i + 1) {
				return tabIndex ?? 0;
			}
			return -1;
		};

		const constructRaiting = (currentRaiting: number) => {
			const updatedArray = raitingArray.map((el: JSX.Element, index: number) => {
				return (
					<span
						className={cn(styles.star, {
							[styles.filled]: index < currentRaiting,
							[styles.editable]: isEditable,
						})}
						onMouseEnter={() => changeDisplay(index + 1)}
						onMouseLeave={() => changeDisplay(raiting)}
						onClick={() => onClick(index + 1)}
						tabIndex={computeFocus(raiting, index)}
						onKeyDown={handelKey}
						ref={(r) => raitingArrayRef.current?.push(r)}
						role={isEditable ? "slider" : ""}
						aria-invalid={error ? true : false}
						aria-valuenow={raiting}
						aria-valuemax={5}
						aria-label={isEditable ? "Укажите рейтиг" : "рейтинг " + raiting}
						aria-valuemin={1}
					>
						<StarIcon></StarIcon>
					</span>
				);
			});
			setRaitingArray(updatedArray);
		};

		const changeDisplay = (index: number) => {
			if (!isEditable) {
				return;
			}
			constructRaiting(index);
		};

		const onClick = (index: number) => {
			if (!isEditable || !setRaiting) {
				return;
			}
			setRaiting(index);
		};

		const handelKey = (e: KeyboardEvent) => {
			if (!isEditable || !setRaiting) {
				return;
			}
			if (e.code == "ArrowRight" || e.code == "ArrowUp") {
				if (!raiting) {
					setRaiting(1);
				} else {
					e.preventDefault();
					setRaiting(raiting < 5 ? raiting + 1 : 5);
				}
				raitingArrayRef.current[raiting]?.focus();
			}
			if (e.code == "ArrowLeft" || e.code == "ArrowDown") {
				if (!raiting) {
					setRaiting(1);
				} else {
					e.preventDefault();
					setRaiting(raiting > 1 ? raiting - 1 : 1);
				}
				raitingArrayRef.current[raiting - 2]?.focus();
			}
		};

		return (
			<div
				{...props}
				ref={ref}
				className={cn(styles.raitingWrapper, {
					[styles.error]: error,
				})}
			>
				{raitingArray.map((el: JSX.Element, index: number) => {
					return <span key={index}>{el}</span>;
				})}
				{error && (
					<span role="alert" className={styles.errorMessage}>
						{error.message}
					</span>
				)}
			</div>
		);
	},
);
