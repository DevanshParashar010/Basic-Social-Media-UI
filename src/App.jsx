import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PostListProvider from "./Store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <PostListProvider>
        <Outlet></Outlet>
      </PostListProvider>
    </>
  );
}

export default App;
