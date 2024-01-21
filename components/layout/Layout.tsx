import Loading from "components/comm/spinner/Loading";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
// import Footer from "./Footer";
// import Navbar from "./Navbar";

const URL = process.env.NEXT_PUBLIC_WEB_URL;

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const isLoadingSpinner = useSelector((state: any) => state.spinner.isLoading); // 현재 로그인한 계정 불러오기

  return (
    <>
      {isLoadingSpinner && <Loading />}
      {/* <Navbar styleType={styleType} /> */}
      <main>{children}</main>
      {/* <Footer styleType={styleType} /> */}
    </>
  );
};

export default Layout;
