import { useAppSelector } from "../../hooks/hooks";
import Search from "../Search/Search";
import styles from "./Header.module.scss";

const Header = () => {
	const pokemon = useAppSelector((state) => state.app.pokemon);

	return (
		<div className={styles.header}>
			<Search />
		</div>
	);
};
export default Header;
