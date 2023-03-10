import rasm from "./logo192.png";
import "./app.scss";

function App() {
  const name = "John";

  return (
    <div className="container">
      <h2>{name}</h2>
      <p className="h3" style={{ color: "green", backgroundColor: 'black', backgroundImage: `url(${rasm})` }}>
        {12 + 21}
      </p>
      <label htmlFor="name">
        <input type="text" name="" id="name" />
        <img src={rasm} alt="" />
      </label>
    </div>
  );
}

export default App;
