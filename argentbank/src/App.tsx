import { Outlet } from "react-router-dom";
import "./App.css";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<TopNav />
				<Outlet />
      <Footer />
		</>
	);
}

export default App;
