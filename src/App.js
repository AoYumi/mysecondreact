import logo from './logo.svg';
import './App.css';
import Greet from './Greet'; // does not need .js; both are js files
import Message from './Message';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://imgur.com/OyXhPM6.png" className="App-logo" alt="logo" />
        <p>
          いやぁぁ~~
        </p>
        
        <Greet name="Sir Bryan">
        <Message/>
        </Greet>
        <Greet name="<o">
        <Button/>
        <p>Pag di mo pinindot babagsak ka</p>
        </Greet>
        <Greet name="Vennett"></Greet>

        <a
          className="App-link"
          href="https://cyapher.github.io/myfirstreact/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yamete Kudasai nii-sama~~
        </a>
      </header>
    </div>
  );
}

export default App;
