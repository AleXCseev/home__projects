import './App.css';
import { Slide } from './components';
import { Slider } from './components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <Slider item={4} animationTime={1} animationFunc={"ease-in-out"}>
        <Slide>item: 1</Slide>
        <Slide>item: 2</Slide>
        <Slide>item: 3</Slide>
        <Slide>item: 4</Slide>
        <Slide>item: 5</Slide>
      </Slider>
    </div>
  );
}

export default App;
