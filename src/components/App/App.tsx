import { useAppSelector } from "../../redux/hooks";
import Layout from "../Layout/Layout";
import Modal from "../Modal/Modal";

const App = (): JSX.Element => {
  const {
    modal: { isOpen: isModalOpen },
  } = useAppSelector(({ ui }) => ui);

  return (
    <div className="container">
      <Layout />
      {isModalOpen && <Modal />}
    </div>
  );
};

export default App;
