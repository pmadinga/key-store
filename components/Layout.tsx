
import Footer from "./Footer";
import SiteHeader from "./SiteHeader";

interface LayoutType{
    children: React.ReactNode;
}

const Layout= ({children}: LayoutType) =>{
    return(
        <>
            <SiteHeader/>
            {children}
            <Footer/>
        </>
    );
};
export default Layout;