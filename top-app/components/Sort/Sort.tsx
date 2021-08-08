import { SortEnum, SortProps } from "./Sort.props";
import styles from "./Sort.module.css";
import cn from "classnames";
import SortIcon from "./sort.svg"

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
	return (
		<div className={cn(styles.sort, className)} {...props}>
			<span 
				onClick={() => setSort(SortEnum.Raiting)}
				className={cn({
					[styles.active]: sort == SortEnum.Raiting
				})}
			>
				<SortIcon className={styles.sortIcon}></SortIcon>
				По рейтингу
			</span>
			<span 
				onClick={() => setSort(SortEnum.Price)}
				className={cn({
					[styles.active]: sort == SortEnum.Price
				})}
			>
				<SortIcon className={styles.sortIcon}></SortIcon>
				По цене
			</span>
		</div>
	);
};