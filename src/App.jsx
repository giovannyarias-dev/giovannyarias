import Glasses from "./components/glasses/Glasses";
import "./App.css";
import face from "./assets/face.png";

function App() {
  return (
    <>
      <div className="face">
        <img src={face} />
      </div>
      <div className="glasses">
        <Glasses />
      </div>
    </>
  );
}

export default App


