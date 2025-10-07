import { ReactNode } from "react";
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';

interface LayoutProps {
    children :ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <>
        <Header />
        <main>{children}</main>
        <Footer />
        </>
    )
}
export default Layout;