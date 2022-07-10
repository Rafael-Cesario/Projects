import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import BlogDetails from "./Pages/BlogDetails";
import EditBlog from "./Pages/EditBlog";
import Home from "./Pages/Home";
import NewBlog from "./Pages/NewBlog";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/NewBlog" element={<NewBlog />} />
          <Route exact path="/BlogDetails/:id" element={<BlogDetails />} />
          <Route exact path="/EditBlog/:id" element={<EditBlog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
