import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greeting from './components/Greetings'
import Card from './components/Card'


function App() {
  const [name, setName] = useState("Amit");
  const [color, setColor] = useState("#000000");

  const handleColorChange = () => {
    // Generate a random hex color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    setColor(randomColor);
  }
  // IMPERATIVE WAY
  // useEffect(() => {
  //   // Get the section by its id
  //   const section = document.getElementById('center');
  //   
  //   // Create a button element
  //   const button = document.createElement('button');
  //   button.textContent = 'Button, It is.';
  //   button.style.backgroundColor = color;
  //   
  //   // Add click event listener
  //   button.addEventListener('click', () => {
  //     const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  //     button.style.backgroundColor = randomColor;
  //   });
  //   
  //   // Append button to the section
  //   section.appendChild(button);
  //   
  //   // Cleanup function to remove button when component unmounts
  //   return () => {
  //     section.removeChild(button);
  //   };
  // }, []); // Empty dependency array means this runs once on mount

  const fruits = ["apple", "mango", "banana"]

  return (
    <>
      <section id="center">
        <h3>Exercise #1</h3>
        <h1>My AI Journey Begins</h1>
        <hr />

        <h3>Exercise #3</h3>

        <button
          onClick={handleColorChange}
          style={{ backgroundColor: color, width: "100px", height: "50px" }}
        >
          Button, It is.
        </button>

        <h3>{name}</h3>

        <div>
          {fruits.map((fruit, index) => (
            <ul key={index}>{fruit}</ul>
          ))}
        </div>
      </section>

      <h3>Exercise #4</h3>
      <section style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>


        <Greeting name={"Amit"} />
        <Greeting name={"Rohit"} />
        <Greeting name="Palak" />

      </section>


      <section style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Card title="Components" description="Build UI from independent, reusable pieces." />
        <Card title="State" description="Add interactivity by remembering data over time." />
        <Card title="Virtual DOM" description="React uses a virtual representation of the UI for performance." />
      </section>


      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App;