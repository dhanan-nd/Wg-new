import { Header } from "../../layouts/header"
import { Footer } from "../../layouts/footer"
import { Outlet } from "react-router-dom"

export const Main = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}