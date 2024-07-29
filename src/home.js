import './App.css';
import Greet from './Greet'; // does not need .js; both are js files
import Message from './Message';
import Button from './Button';
import Hello from './hello';
import Employee from './employee';



import { Container, Row, Col } from 'react-bootstrap';



function Home() {
  return (
    <div>
      <header className="App-header">
        <img src="https://media.discordapp.net/attachments/520468614000934925/1264599222960001136/image.png?ex=66a9014d&is=66a7afcd&hm=e5ac90db7e1d9a6291924601b672640db47a1cfc54e4e54cf20ef26d180b5c69&=&format=webp&quality=lossless&width=610&height=525" className="App-logo" alt="logo" />
        <p>
          いやぁぁ~~
        </p>
        
        <p>{Hello()}</p>
        
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

export default Home;
