import { useEffect, useState } from 'react';
import './App.css';
import { GameScreen, LeftController as LeftControl, PokemonDetails, RightController as RightControl, Screen } from './components';
import { useFetch } from './hooks';
import { validateMovement, Attacks } from './utils';

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';
  const { data } = useFetch(url); // TODO: agregar el loading y error
  const [pokemones, setPokemones] = useState([]);
  const [position, setPosition] = useState(1);
  const [myPokemonSelection, setMyPokemonSelection] = useState([]);
  const [pcPokemonSelection, setPcPokemonSelection] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [myHP, setMyHP] = useState(100);
  const [pcHP, setPcHP] = useState(100);
  const [battleLog, setBattleLog] = useState('');
  const [isFighting, setIsFighting] = useState(false);

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
    if (isSelected) return;
    const selectedPokemon = pokemones.filter((p) => p.id === position);
    setMyPokemonSelection(selectedPokemon);
    computerSelection();
    setIsSelected(true);
  };



  const handleAtack = () => {
    if (isFighting) return;
    setIsFighting(true);

    // Turno del jugador
    const miAtaque = Attacks(myPokemonSelection[0].moves);
    const nuevoPcHP = Math.max(0, pcHP - miAtaque.damage);
    setPcHP(nuevoPcHP);
    setBattleLog(`Tu ${myPokemonSelection[0].name} usó ${miAtaque.move} y causó ${miAtaque.damage} de daño!`);

    if (nuevoPcHP === 0) {
      setBattleLog(`Tu ${myPokemonSelection[0].name} gano! El PC se quedo sin HP.`);
      setIsFighting(true);
      return;
    }

    // Turno del PC
    setTimeout(() => {
      const pcAtaque = Attacks(pcPokemonSelection[0].moves);
      const nuevoMyHP = Math.max(0, myHP - pcAtaque.damage);
      setMyHP(nuevoMyHP);

      if (nuevoMyHP === 0) {
        setBattleLog(`El PC gano! Tu ${myPokemonSelection[0].name} se quedo sin HP.`);
        setIsFighting(true);
      } else {
        setBattleLog(`PC ${pcPokemonSelection[0].name} usó ${pcAtaque.move} y causó ${pcAtaque.damage} de daño!`);
        setIsFighting(false);
      }
    }, 2500);
  };

  const handleReset = () => {
    setMyPokemonSelection([]);
    setPcPokemonSelection([]);
    setIsSelected(false);
    setMyHP(100);
    setPcHP(100);
    setBattleLog('');
    setIsFighting(false);
    setPosition(1);
  };

  const pokemonActual = isSelected ? myPokemonSelection : pokemones.filter((p) => p.id === position);

  return (
      <div>
        <div className="h-128 flex gap-4 p-4 justify-center">
          <div className="w-56"><LeftControl handleDirection={handleDirection}/></div>
          {myPokemonSelection.length && pcPokemonSelection.length ? (
              <GameScreen miSeleccion={myPokemonSelection[0]} pcSeleccionado={pcPokemonSelection[0]} myHP={myHP} pcHP={pcHP} battleLog={battleLog}/>
          ) : (
              <div className="flex-1"><Screen pokemones={pokemones} position={position}/></div>
          )}
          <div className="w-56"><RightControl handleSelection={handleSelection} handleAtack={handleAtack} handleReset={handleReset}/></div>
        </div>

        <div className={"justify-center flex items-center rounded-t-xl"}>
          <PokemonDetails actual={pokemonActual} />
        </div>

      </div>
  );
}

export default App;
