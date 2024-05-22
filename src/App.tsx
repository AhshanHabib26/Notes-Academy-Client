import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import "@mantine/core/styles.css";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster richColors expand={false} position="top-right" />
    </>
  );
}

export default App;
