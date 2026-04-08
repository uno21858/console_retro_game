import { useEffect, useState } from 'react';
import './App.css';
import LeftControl from './components/LeftController.jsx';
import RightControl from './components/RightController';
import Screen from './components/Screen';
import useFetch from './hooks/useFetch';
import GameScreen from "./components/GameScreen.jsx";

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';
  const { data, loading, error } = useFetch(url);

  const [pokemones, setPokemones] = useState([]);


  const getListPokemones = () => {
    if (!data?.results) return;
    const list = data.results.filter((p) => p.url);
    const plist = list.map((l) => fetch(l.url).then((res) => res.json()));
    Promise.all(plist).then((values) => {
      console.log('promesa values', values);
      setPokemones(values);
    });
  };

  useEffect(() => {
    getListPokemones();
  }, [data]);



  const [position,setPosition] = useState(  [0]);
  const [myPokemonSelection, setMyPokemonSelection] = useState([]);
  const [pcPokemonSelection, setPcPokemonSelection] = useState([]);

  const handleDirection = (direction) => {
    if (direction === 'right') {
      setPosition((prev) => prev + 1);
    } else {
      setPosition((prev) => prev -1 )
    }
  }

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

  const computerSelection = () => {
    const pc = pokemones.filter((p) => p.id === rnd)
    const rnd = getRandomInt(0, 100)
    setPcPokemonSelection(pc)

  }

  const handleSelection = () => {
    const selectedPokemon = pokemones.filter((p) => p.id === position);
    setMyPokemonSelection(selectedPokemon);
    computerSelection();
  }

  return (
      <div className="h-128 flex gap-4 p-4 justify-center">
        <div className="w-56"><LeftControl handleDirection={handleDirection}/></div>
        {myPokemonSelection.length && pcPokemonSelection.length ? (
            <GameScreen/>
        ) : (
            <div className="flex-1 min-w-0"><Screen pokemones={pokemones} position={position} /></div>
        )}
        <div className="w-56"><RightControl handleDirection={handleSelection} /></div>
      </div>
  );
}

export default App;