import { useAppSelector } from "../../hooks/hooks";
import styles from "./Sprite.module.scss";
const Sprite = () => {
	const pokemon = useAppSelector((state) => state.app.pokemon);
	return (
		<div className={styles.sprite_container}>
			{pokemon ? (
				<img
					className={styles.sprite}
					src={pokemon?.image}
					alt="pokemon image"
				/>
			) : null}
		</div>
	);
};

export default Sprite;
