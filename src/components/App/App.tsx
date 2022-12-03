import { useAppSelector } from "../../redux/hooks";
import Layout from "../Layout/Layout";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";

const App = (): JSX.Element => {
  const {
    modal: { isOpen: isModalOpen },
    isLoading,
  } = useAppSelector(({ ui }) => ui);

  return (
    <div className="container">
      <Layout />
      {isModalOpen && <Modal />}
      {isLoading && <Loading />}
    </div>
  );
};

export default App;
