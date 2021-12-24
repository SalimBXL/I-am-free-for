import "./styles.css";
import Activities from "./components/Activities/Activities";
import Friends from "./components/Friends/Friends";

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
