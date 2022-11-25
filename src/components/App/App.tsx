import InputSet from "../InputSet/InputSet";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <InputSet
        handleValue={() => {}}
        labelText="not"
        id="not"
        captionText="nots"
      />
    </div>
  );
};

export default App;
