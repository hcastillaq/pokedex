import { FC, PropsWithChildren } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { colourNameToHex, convertHexToRGBA } from "../../utils/uitl";
import styles from "./Background.module.scss";

const Background: FC<PropsWithChildren> = ({ children }) => {
	const convert = (name: string) => {
		const hex = colourNameToHex(name);
		const rgb = convertHexToRGBA(hex);
		return `rgba(${rgb}, 0.6)`;
	};

	const backgroundColor = useAppSelector((state) =>
		convert(state.app.pokemon?.color || "white"),
	);

	return (
		<div className={styles.background} style={{ backgroundColor }}>
			{children}
		</div>
	);
};

export default Background;
