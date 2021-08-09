import Header from "./components/Header/index";
import Drawer from "./components/Drawer/index";

import Favorites from "./pages/Favorites/Favorite";
import Home from "./pages/Home/Home"
import {Orders} from './pages/Orders/Orders'

import React from "react";
import {Route } from "react-router-dom";
import axios from 'axios'

import AppContext from './context'


function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [searchText, setSearchText] = React.useState('')
  const [favorites, setFavorites] = React.useState([])
  const [isCart, setCart] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    async function getData(){
     try {
        const getCartItems = await axios.get("https://60d5a9d3943aa60017768b17.mockapi.io/cartItem");
        const getFavorites = await axios.get("https://60d5a9d3943aa60017768b17.mockapi.io/favorites");
        const getItems = await axios.get("https://60d5a9d3943aa60017768b17.mockapi.io/items");
        setIsLoading(false)
        
        setCartItems(getCartItems.data)
        setFavorites(getFavorites.data)
        setItems(getItems.data)

     } catch(error) {
        alert(`Не удалось получить данные! Ошибка: ${error}`)
     }
    }
    getData()
  }, [])

  const addItemToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => item.parentId === obj.id);
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://60d5a9d3943aa60017768b17.mockapi.io/cartItem/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post('https://60d5a9d3943aa60017768b17.mockapi.io/cartItem', obj);
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          }),
        );
      }
    } catch (error) {
      alert('Ошибка при добавлении в корзину');
      console.error(error);
    }
  }

  const removeCard = (id) => {
    axios.delete(`https://60d5a9d3943aa60017768b17.mockapi.io/cartItem/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const addInToFavorites = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
        axios.delete(`https://60d5a9d3943aa60017768b17.mockapi.io/favorites/${obj.id}`);
      } else {
        const { data } = await axios.post('https://60d5a9d3943aa60017768b17.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Ошибка при удалении/добавлении в избранное');
      console.error(error);
    }
  }

  const searchItems = (event) => {
    let targer = event.target.value
    setSearchText(targer)
  }
  const changeActiveAddToCart = (id) => {
    return cartItems.some( (obj) => obj.parentId === id);
  }

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isLoading, setCartItems, changeActiveAddToCart, setCart}} >
          <div className="wrapper clear">
          <Header onShowCart={() => setCart(true)}/>
            <Drawer onCloseCart={ () => setCart(false)} isCart={isCart} removeCard={removeCard} cartItems={cartItems} />
            
            <Route path='favorites'>
              <Favorites addInToFavorites={addInToFavorites} addItemToCart={addItemToCart}  />  
            </Route>

            <Route path='' exact>
              <Home
                items={items}
                cartItems={cartItems}
                setSearchText={setSearchText}
                searchText={searchText}
                addItemToCart={addItemToCart}
                addInToFavorites={addInToFavorites}
                searchItems={searchItems}
                isLoading={isLoading}
                />
            </Route>

            <Route path='orders'> 
             <Orders />
            </Route>
          </div>
    </AppContext.Provider>
  );
}

export default App;
