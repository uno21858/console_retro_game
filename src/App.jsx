import { useEffect, useState } from 'react';
import './App.css';
import LeftControl from './components/LeftController.jsx';
import RightControl from './components/RightController';
import Screen from './components/Screen';
import useFetch from './hooks/useFetch';

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';
  const { data, loading, error } = useFetch(url);

  const [pokemones, setPokemones] = useState([]);

  const getListPokemones = () => {
    const list = data?.results?.filter((p) => p.url);
    const plist = list?.map((l) => fetch(l.url).then((res) => res.json()));
    Promise.all(plist).then((values) => {
      console.log('promesa values', values);
      setPokemones(values);
    });
  };

  useEffect(() => {
    getListPokemones();
  }, [data]);

  return (
<div className="h-128 flex gap-4 p-4">
  <div className="w-56"><LeftControl /></div>
  <div className="flex-1 min-w-0"><Screen pokemones={pokemones} /></div>
  <div className="w-56"><RightControl /></div>
</div>
  );
}

export default App;