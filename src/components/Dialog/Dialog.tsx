import { FC, PropsWithChildren, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setNotFound } from "../../redux/store";
import styles from "./Dialog.module.scss";

const Dialog: FC<PropsWithChildren> = ({ children }) => {
	const notFound = useAppSelector((state) => state.app.notFound);
	const dispatch = useAppDispatch();
	useEffect(() => {
		const handleScape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				dispatch(setNotFound(false));
			}
		};

		window.addEventListener("keydown", handleScape);

		return () => {
			window.removeEventListener("keydown", handleScape);
		};
	}, []);

	const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const el = e.target as HTMLElement;
		el.id === "overlay" && dispatch(setNotFound(false));
	};

	return notFound ? (
		<div>
			<div className={styles.overlay} onClick={handleClick} id="overlay">
				<dialog open className={styles.dialog}>
					<div className="mb3">{children}</div>
					<div className="flex justify-end">
						<button
							className={styles.closeBtn}
							onClick={() => dispatch(setNotFound(false))}
							type="button"
						>
							close
						</button>
					</div>
				</dialog>
			</div>
		</div>
	) : null;
};

export default Dialog;
