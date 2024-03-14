import logo from './logo.svg';
import './App.css';
import { SimpleParagraph } from './components/SimpleParagraph';
import LoginForm from './components/LoginForm';
import SimpleList from './components/SimpleList/SimpleList';
import Title from './components/Title';


function App() {

  const currentSeason = 'winter';
  const paragraphClick = () => {
    console.log('Paragraph clicked');
  }
  const linkClick = () => {
    console.log('Link clicked');
  }

  const myStyle = {
    color: 'red',
    fontSize: '14px',
  };

  return (
    <>
      <div className="App">
        <p>Hello World! {new Date().toLocaleDateString()}</p>
        <h2>Welcome, Guest!</h2>
        <div>
          <button>Enter</button>
          <button>Register</button>
        </div>
        <p>Now is: {currentSeason}</p>
      </div>

      <SimpleParagraph textContent='Hello from Simple Paragraph!' clickHandler={paragraphClick}  textStyle={myStyle} />

      <LoginForm />

      <SimpleList listHeaderText='Populations:' listSource={["Dwarwes", "Hobbits", "Orcs"]} listItemCLickHandler={linkClick} />

      <Title />
    </>
  );
}

export default App;
