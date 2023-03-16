import { useAppSelector } from "../../hooks/hooks";
import { capitalize } from "../../utils/uitl";
import Name from "../Name/Name";
import Tag from "../Tag/Tag";
import styles from "./Info.module.scss";

const Info = () => {
	const pokemon = useAppSelector((state) => state.app.pokemon);

	return (
		<div className={`${styles.info}`}>
			<div className="mb2">
				<Name />
			</div>
			<div className="flex flex-wrap" style={{ gap: "10px" }}>
				{pokemon?.types.map((type) => {
					return (
						<Tag key={type} type="rounded">
							<img alt={type} src={`/types/${capitalize(type)}.png`} />
						</Tag>
					);
				})}
			</div>

			<div className="flex flex-wrap pt2 pb2 mt1" style={{ gap: "10px" }}>
				{pokemon?.stats.map((stat) => {
					return (
						<Tag key={stat.name}>
							{stat.name}: {stat.value}
						</Tag>
					);
				})}
			</div>
		</div>
	);
};

export default Info;
