import Head from "next/head";
import DashFooter from "./DashFooter";
import DashHeader from "./DashHeader";

interface DashLayoutProps{
    children: React.ReactNode;
}
const DashLayout = ({ children }: DashLayoutProps) =>{
    return(
        <>
            <Head>
                <title>Project Lunar</title>
            </Head>
            <DashHeader/>
            {children}
            <DashFooter/>
        </>
    );
};

export default DashLayout;