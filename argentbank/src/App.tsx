import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";

function App() {
	const currentPage = useLocation().pathname
	return (
		<>
			<TopNav />
			<main className={currentPage=='/index'?"":"main bg-dark"}>
				<Outlet />
			</main>
      <Footer />
		</>
	);
}

export default App;
