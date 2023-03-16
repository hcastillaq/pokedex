import { FC, PropsWithChildren } from "react";
import styles from "./Tag.module.scss";

interface Props {
	type?: "normal" | "rounded";
}
const Tag: FC<PropsWithChildren & Props> = ({ children, type = "normal" }) => {
	const getType = (type: string) => {
		switch (type) {
			case "normal":
				return styles.normal;
			case "rounded":
				return styles.rounded;
			default:
				return "";
		}
	};
	return <div className={`${styles.tag} ${getType(type)}`}>{children}</div>;
};

export default Tag;
