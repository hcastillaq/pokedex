import { useAppSelector } from "../../hooks/hooks";
import styles from "./Name.module.scss";

const Name = () => {
	const pokemon = useAppSelector((state) => state.app.pokemon);
	return (
		<div className={styles.name}>
			{` #${pokemon?.id} ${pokemon?.name} ` || ""}
		</div>
	);
};

export default Name;
