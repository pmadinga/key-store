import DashFooter from "./DashFooter";
import DashHeader from "./DashHeader";

interface DashLayoutProps{
    children: React.ReactNode;
}
const DashLayout = ({ children }: DashLayoutProps) =>{
    return(
        <>
            <DashHeader/>
            {children}
            <DashFooter/>
        </>
    );
};

export default DashLayout;