import "./styles.css";
import Activities from "./Activities";
import Friends from "./Friends";

export default function App() {
  return (
    <div className="App">
      <h1>I Am Free For...</h1>
      <h2>Start sharing your free time with your friends!</h2>
      <Activities />
      <Friends />
    </div>
  );
}
