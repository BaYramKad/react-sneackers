import React from "react"
import { NavLink } from "react-router-dom"

import Card from "../../components/Card/index"
import AppContext from "../../context"

function Favorites(props) {
    const {favorites} = React.useContext(AppContext)

    return (
        <div className="content p-40 justify-center">
            <div className="d-flex align-center">
                <NavLink to="/"> 
                    <img src="img/come-back.svg" alt="comeBack" />
                </NavLink>
                <h1 className='search-title justify-start ml-20'>Мои закладки</h1>
            </div>
            <div className="d-flex flex-wrap">
                {
                    favorites.map((item, i) => <Card {...item} 
                    favorited={true}
                    key={i}
                    onFavorites={ (obj => props.addInToFavorites(obj)) } 
                    onPlus={ (obj) => props.addItemToCart(obj)}  />)
                }
            </div>
        </div>
    )
}

export default Favorites