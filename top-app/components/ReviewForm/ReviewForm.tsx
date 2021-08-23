import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import React, { useState } from "react";
import { Button, Input, Raiting, Textarea } from "..";
import CloseIcon from "./close.svg";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewSendResponse } from "./ReviewForm.interface";
import axios from "axios";
import { API } from "../../helpers/api";

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [error, setIsError] = useState<string>();
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IReviewForm>();

	const onSubmit = async (formData: IReviewForm) => {
		try {
			const { data } = await axios.post<IReviewSendResponse>(API.review.createDemo, {
				...formData,
				productId,
			});

			if (data.message) {
				setIsSuccess(true);
				reset();
			} else {
				setIsError("Что-то пошло не так");
			}
		} catch (e) {
			setIsError(e.message);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.reviewForm, className)} {...props}>
				<Input
					{...register("name", { required: { value: true, message: "Заполните имя" } })}
					placeholder="Имя"
					error={errors.name}
				></Input>
				<Input
					{...register("title", {
						required: { value: true, message: "Заполните заголовок" },
					})}
					className={styles.title}
					placeholder="Заголовок"
					error={errors.title}
				></Input>
				<div className={styles.raiting}>
					<span>Оценка:</span>
					<Controller
						control={control}
						name="rating"
						rules={{ required: { value: true, message: "Укажите рейтинг" } }}
						render={({ field }) => (
							<Raiting
								raiting={field.value}
								ref={field.ref}
								isEditable={true}
								setRaiting={field.onChange}
								error={errors.rating}
							></Raiting>
						)}
					/>
				</div>
				<Textarea
					{...register("description", {
						required: { value: true, message: "Заполните отзыв" },
					})}
					className={styles.description}
					placeholder="Текст отзыва"
					error={errors.description}
				></Textarea>
				<div className={styles.submit}>
					<Button appearance="primary">Отправить</Button>
					<span className={styles.info}>
						* Перед публикацией отзыв пройдет предварительную модерацию и проверку
					</span>
				</div>
			</div>
			{isSuccess && (
				<div className={styles.success}>
					<div className={styles.successTitle}>Ваш отзыв отправлен</div>
					<div className={styles.description}>
						Ваш отзыв будет опубликован после проверки
					</div>
					<CloseIcon
						className={styles.close}
						onClick={() => setIsSuccess(false)}
					></CloseIcon>
				</div>
			)}
			{error && (
				<div className={styles.error}>
					Что-то пошло не так, попробуйте обновить страницу
					<CloseIcon
						className={styles.close}
						onClick={() => setIsError(undefined)}
					></CloseIcon>
				</div>
			)}
		</form>
	);
};