import React, { FC, useState } from 'react';
import AddPizzaForm from './components/AddPizzaForm';
import DisplayPizzas from './components/DisplayPizzas';
import './App.css';
import Pizza from './components/models/Pizza';



const App: FC = () => {

  const [pizzasList,setPizzasList] = useState<Pizza[]>([])

  const addPizza = (newPizza:Pizza) => {
    setPizzasList([...pizzasList,newPizza])
  }

  const updatePizza = (newPizza:Pizza) => {
    setPizzasList(pizzasList.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza)))
  }

  const deletePizza = (id: number) => {
    
    const newPizzasList = pizzasList.filter(pizza => pizza.id !== id)
    setPizzasList(newPizzasList)
  }

  return (
    <div className="App">
      <div className="wrap">
      <span className='heading'>Our Pizza</span>
      <AddPizzaForm addPizza={addPizza}/>
      <DisplayPizzas pizzasList={pizzasList} updatePizza={updatePizza} deletePizza={deletePizza}/>
      </div>
    </div>
  );
}

export default App;
