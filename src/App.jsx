import { useEffect, useState } from 'react';
import './App.css';
import { GameScreen, LeftController as LeftControl, PokemonDetails, RightController as RightControl, Screen } from './components';
import { useFetch } from './hooks';
import { validateMovement } from './utils';

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';
  const { data } = useFetch(url); // TODO: agregar el loading y error
  const [pokemones, setPokemones] = useState([]);
  const [position, setPosition] = useState(1);
  const [myPokemonSelection, setMyPokemonSelection] = useState([]);
  const [pcPokemonSelection, setPcPokemonSelection] = useState([]);

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

  const getListPokemones = () => {
    const list = data?.results?.filter((p) => p.url);
    const plist = list?.map((l) => fetch(l.url).then((res) => res.json()));

    Promise.all(plist).then((values) => {
      const saniData = values?.map((e) => {
        return {
          name: e.name,
          id: e.id,
          types: e.types,
          moves: e.moves.map((e) => {
            return {
              ...e,
              attack: getRandomInt(20, 98),
            };
          }),
          sprites: e.sprites,
        };
      });

      setPokemones(saniData);
    });
  };

  useEffect(() => {
    if (!data?.results) return;
    getListPokemones();
  }, [data]);

  const handleDirection = (direction) => {
    setPosition((prev) => validateMovement(prev, direction, pokemones.length));
  };

  const computerSelection = () => {
    const rnd = getRandomInt(0, pokemones.length);
    const pc = pokemones.filter((p) => p.id === rnd);
    setPcPokemonSelection(pc);
  };

  const handleSelection = () => {
    const selectedPokemon = pokemones.filter((p) => p.id === position);
    setMyPokemonSelection(selectedPokemon);
    computerSelection();
  };



  const pokemonActual = pokemones.filter((p) => p.id === position);

  return (
      <div>
        <div className="h-128 flex gap-4 p-4 justify-center">
          <div className="w-56"><LeftControl handleDirection={handleDirection}/></div>
          {myPokemonSelection.length && pcPokemonSelection.length ? (
              <GameScreen miSeleccion={myPokemonSelection[0]} pcSeleccionado={pcPokemonSelection[0]}/>
          ) : (
              <div className="flex-1"><Screen pokemones={pokemones} position={position}/></div>
          )}
          <div className="w-56"><RightControl handleSelection={handleSelection}/></div>
        </div>

        <div className={"justify-center flex items-center rounded-t-xl"}>
          <PokemonDetails actual={pokemonActual} />
        </div>

      </div>
  );
}

export default App;
