import { RaitingProps } from "./Raiting.props";
import styles from "./Raiting.module.css";
import cn from "classnames";
import { useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef, useRef } from "react";
import StarIcon from "./star.svg"

export const Raiting = forwardRef(({ isEditable = false, raiting, setRaiting, error, ...props }: RaitingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	const [raitingArray, setRaitingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))
	const raitingArrayRef = useRef<(HTMLSpanElement | null)[]>(null)

	useEffect(() => {
		constructRaiting(raiting);
	}, [raiting])

	const computeFocus = (r:number, i:number): number => {

	}

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
					tabIndex={computeFocus(raiting, i)}
					onKeyDown={handelKey}
					ref={ r => raitingArrayRef.current?.push(r)}
				>
					<StarIcon 
						
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

	const handelKey = (e: KeyboardEvent) => {
		if (!isEditable || !setRaiting) {
			return
		};
		if (e.code == "ArrowRight" || e.code == "ArrowUp" ) {
			if(!raiting) {
				setRaiting(1)
			} else {
				e.preventDefault()
				setRaiting(raiting < 5 ? raiting + 1 : 5);
			}
		};
		if (e.code == "ArrowLeft" || e.code == "ArrowDown" ) {
			if(!raiting) {
				setRaiting(1)
			} else {
				e.preventDefault()
				setRaiting(raiting > 1 ? raiting - 1 : 1);
			}
		}
	}

	return (
		<div {...props} ref={ref} className={cn(styles.raitingWrapper, {
			[styles.error]: error
		})}>
			{raitingArray.map((el: JSX.Element, index: number) => {
				return(
					<span key={index}>{el}</span>
				)
			})}
			{error && <span className={styles.errorMessage}>{error.message}</span>}
		</div>
	);
});
