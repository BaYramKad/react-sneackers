import React from "react"
import { NavLink } from "react-router-dom"

import Card from "../../components/Card/index"
import { PositionItems } from "../../components/PositionItems/PositionItems"

import AppContext from "../../context"

import backMain from './come-back.svg'
import emptyFavorites from './emty.png'

function Favorites(props) {
    const {favorites} = React.useContext(AppContext)
    return (
        <div className="content p-40 justify-center">
            <div className="d-flex align-center">
                <NavLink to={process.env.PUBLIC_URL + '/'}> 
                    <img src={backMain} alt="comeBack" />
                </NavLink>
                <h1 className='search-title justify-start ml-20'>Мои закладки</h1>
            </div>
            <div className="d-flex flex-wrap justify-center mt-0">
                {
                    favorites.length <= 0  
                    ? 
                    <PositionItems image={emptyFavorites} title={'Закладок нет :('} description={'Вы ничего не добавляли в закладки'}/>
                    : favorites.map((item, i) => <Card {...item} 
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