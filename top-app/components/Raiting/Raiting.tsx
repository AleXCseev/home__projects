import { RaitingProps } from "./Raiting.props";
import styles from "./Raiting.module.css";
import cn from "classnames";
import { useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef } from "react";
import StarIcon from "./star.svg"

export const Raiting = forwardRef(({ isEditable = false, raiting, setRaiting, ...props }: RaitingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	const [raitingArray, setRaitingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

	useEffect(() => {
		constructRaiting(raiting);
	}, [raiting])

	const constructRaiting = (currentRaiting: number) => {
		const updatedArray = raitingArray.map((el: JSX.Element, index: number) => {
			return (
				<span
					className={cn(styles.star, {
						[styles.filled]: index < currentRaiting,
						[styles.editable]: isEditable
					})}
					onMouseEnter={() => changeDisplay(index + 1)}
					onMouseLeave={() => changeDisplay(raiting)}
					onClick={() => onClick(index + 1)}
				>
					<StarIcon 
						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handelSpace(index + 1, e)}
					></StarIcon>
				</span>
			);
		});
		setRaitingArray(updatedArray)
	};

	const changeDisplay = (index: number) => {
		if(!isEditable) {
			return;
		}
		constructRaiting(index)
	}

	const onClick = (index: number) => {
		if(!isEditable || !setRaiting) {
			return;
		}
		setRaiting(index)
	}

	const handelSpace = (index: number, e: KeyboardEvent<SVGAElement>) => {
		if (e.code != "Space" || !setRaiting) {
			return;
		}
		setRaiting(index)
	}

	return (
		<div {...props} ref={ref}>
			{raitingArray.map((el: JSX.Element, index: number) => {
				return(
					<span key={index}>{el}</span>
				)
			})}
		</div>
	);
});
