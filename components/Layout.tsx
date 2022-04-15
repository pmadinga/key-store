
import Footer from "./Footer";
import SiteHeader from "./SiteHeader";


const Layout= ({children}: any) =>{
    return(
        <>
            <SiteHeader/>
            {children}
            <Footer/>
        </>
    );
};
export default Layout;