
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppLayout from "./AppLayout";

export default function Homepage() {
  return (
    <div>
        <PageNav/>
        <h1>Home Page</h1>
        <Link to="/app" element={<AppLayout/>}>App</Link>
    </div>
  )
}
