import { Outlet } from "react-router-dom"
import Header from "./component/header"
import Footer from "./component/footer"

export default function Layout() {
    return (
        <>
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </>
    )
}