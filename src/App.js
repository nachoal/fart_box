import './App.css';

function App() {
  const fart = () => {
    const options = [1, 2, 3, 4, 5, 6, 7, 8];
    const randomOption = options[Math.floor(Math.random() * options.length)];

    const audio = new Audio(
      `https://www.soundjay.com/human/sounds/fart-0${randomOption}.mp3`
    );
    audio.play();
  };

  return (
    <div className="App">
      <h1>Fart button</h1>
      <div className="fart-btn" onClick={fart}>
        Fart
      </div>
    </div>
  );
}

export default App;
