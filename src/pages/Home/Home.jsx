import React from 'react'
import Card from "../../components/Card/index";

function Home ({
    items,
    searchText,
    setSearchText,
    addItemToCart,
    addInToFavorites,
    searchItems,
    isLoading
  }) {
      const renderItems = () => {
        const filterItems = items.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()));
        console.log(filterItems);
        return (isLoading ? [...Array(8)] : filterItems).map((item, i) => <Card {...item} 
        key={i}
        onPlus={ (obj) => addItemToCart(obj)} 
        onFavorites={ (obj) => addInToFavorites(obj) }
        isLoading={isLoading}
        />)
        }
    
    return (
        <div className="content p-40">
              <div className="d-flex align-center justify-between mb-40">
                <h1 className='search-title'>{searchText ? `Поиск по запросу: '${searchText}'` : "Все кросовки"}</h1>
                <div className="search-block d-flex">
                  <img src="/img/search.svg" alt="Search" />
                  <input onChange={searchItems} value={searchText} placeholder="Поиск..." />
                  { searchText && <img onClick={() => setSearchText('') } className="clear-input cu-p" src="/img/clear-input.svg" alt="Remove"/>}
                </div>
              </div>

              <div className="d-flex flex-wrap justify-start">
                { renderItems() }
              </div>
            </div>
    )
}

export default Home