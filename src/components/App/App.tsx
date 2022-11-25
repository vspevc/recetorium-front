import { showModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Modal from "../Modal/Modal";

const App = (): JSX.Element => {
  const { modal } = useAppSelector(({ ui }) => ui);
  const dispatch = useAppDispatch();

  return (
    <>
      <div
        onClick={() => {
          dispatch(showModalActionCreator(<h2>Hola</h2>));
        }}
        className="container"
      >
        p:
      </div>
      {modal && <Modal children={modal} />}
    </>
  );
};

export default App;
