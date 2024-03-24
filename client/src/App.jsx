import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout/layout";
import AddUser from "./pages/addUser/addUser";
import AddTask from "./pages/addTask/addTask";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
          element : <AddUser/>
				},
        {
          path : "/addTask",
          element : <AddTask/>
        }
			],
		},
	]);

	return <RouterProvider router={router} />;
};
export default App;
