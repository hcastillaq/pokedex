import Background from "./components/Background/Background";
import Container from "./components/Container/Container";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Sprite from "./components/Sprite/Sprite";
import { useAppSelector } from "./hooks/hooks";

const App = () => {
	const loading = useAppSelector((state) => state.app.loading);
	const pokemon = useAppSelector((state) => state.app.pokemon);
	return (
		<Background>
			<Container>
				<Header />
				{!pokemon ? null : (
					<>
						<Content>
							<Sprite />
							<Info />
						</Content>
					</>
				)}
			</Container>
		</Background>
	);
};

export default App;
