import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import '@mantine/core/styles.css';

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
