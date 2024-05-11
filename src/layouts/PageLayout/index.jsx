import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const PageLayout = () => {
  return (
    <>
      <Header />
      {/* Outlet recarrega o componente a depender da rota determinada */}
      <Outlet />
    </>
  );
}
 
export default PageLayout;