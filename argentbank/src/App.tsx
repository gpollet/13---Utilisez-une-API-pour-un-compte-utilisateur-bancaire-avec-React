import { Outlet } from "react-router-dom";
import "./App.css";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<TopNav />
			<main>
				<Outlet />
			</main>
      <Footer />
		</>
	);
}

export default App;
