import React, { useState } from 'react'
import './menu.css'
import food from '../../images/food.png';
import drinks from '../../images/drink.png';
import dessert from '../../images/dessert.png';

const categories = ["All", {name:"food", img:food}, {name:"drinks", img:drinks}, {name:"dessert",img:dessert}];
const categoriesType = ["Café", "lait", "thé", "Boissons gazeuses","Jus", "glace", "Croissant", "Gâteau", "Crepes", "Poulet", "Panini", "Tacos", "Pizza", "Pasticcio", "Burger", "Salade", "tajine", "petit déjeuner"];
function Menu() {
    const currency = "DH";
    const [catChoose, setCatChoose] = useState("All");
    const data = require('../../data/menu.json');

    function catReturns(cat) {
        return cat.map(item => {
            if(typeof item==="string") {
                return <li key={item} className={catChoose === item ? "selectedCatI" : ""} onClick={()=> setCatChoose(item)}><p>{item}</p></li>;
            }else {
                return <li key={item.name} className={catChoose === item.name ? "selectedCat" : ""}  onClick={()=> setCatChoose(item.name)}><img src={item.img} alt={item.name} /><span>{item.name}</span></li>;
            }
        })
    }
    function itemReturn(cat, data) {
         if(cat==="All"){
            return data.map(item => {
                return (<li key={item.id}>
                    <div className='image-container item-menu'>
                        <img alt={item.name} src={item.Photo}/>
                    </div>
                    <div className="name-container">
                        {item.Name}
                    </div>
                    <div className="price-card_container">{item.Price + " " + currency}</div>
                </li>);
            })
         } else {
            const eltSep = separateItems(cat, data, 0);
            let eltSepType = categoriesType.map(cat => {
               if(separateItems(cat, eltSep, 1).length > 0){
                return {arr : separateItems(cat, eltSep, 1),type:cat};
               }
            })
            eltSepType = eltSepType.filter(item => item!==undefined);
            console.log(eltSepType);
            return eltSepType.map((item, i) => {
                return(
                    <><h2>{item.type}</h2>
                    <>{item.arr.map(elt => (
                        <div className="sorting_item">
                            <div className='image-container item-menu'>
                                <img alt={elt.name} src={elt.Photo}/>
                            </div>
                            <div className="name-container">
                                {elt.Name}
                            </div>
                            <div className="price-card_container">{elt.Price + " " + currency}</div>
                        </div>
                    ) )}</></>
                )
            });
         }
    }
   function separateItems(cat, arr, k) {
        return arr.filter(item => (item.Category[k]===cat));

    }
    function returnJsxCat(obj){
        const jsxP = (
            <>
            <h1>{obj.type}</h1>
            {obj.arr.map(item =>{
                return (<>
                   <li key={item.id}>
                        <div className='image-container item-menu'>
                            <img alt={item.name} src={item.Photo}/>
                        </div>
                        <div className="name-container">
                            {item.Name}
                        </div>
                        <div className="price-card_container">{item.Price + " " + currency}</div>
                 </li>
                </>)
            })}
            </>
        );
        return jsxP;
    }
    //the return of menu jsx +++++++++++++++++
  return (
    <div id="menu">
        <div className="gategory_container">
            <ul className="categories">
                {catReturns(categories)} 
            </ul>
            <div className='items-container_menu'>
                <ul className={catChoose}>{itemReturn(catChoose, data)}</ul>
            </div>
        </div>
    </div>
  )
}

export default Menu