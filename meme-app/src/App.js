import React from 'react';
import Joke from './components/Joke'
import './App.css';

function App() {
  return (
    <div className="App">
      <Joke punchline="It's hard to explain puns to kleptomanics because they always take things literally."
            isPun={true}
      />
      <Joke setup="I got my daughter a fridge for her birthday." 
            punchline="I can't wait to see her face light up when she opens it."
            isPun={true}
      />
      <Joke setup="How did the hacker escape the police?" 
            punchline="He just ransomare."
            isPun={true}
      />
      <Joke setup="Why don't prirate travel on mountain roads?" 
            punchline="Scurvy"
            isPun={true}
      />
      <Joke setup="Why do bees stay in the hive in the winter?" 
            punchline="swarm"
            isPun={true}
      />
      <Joke setup="What's the best thing about Switerland?" 
            punchline="Well i don't know but the flag is a big plus!"
            isPun={false}
      />
    </div>
  );
}
export default App;
