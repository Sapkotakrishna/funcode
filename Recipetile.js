import React from 'react';
import "./index.css";
function Recipetile({recipe}){
    return(
        
<>
{recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/)!=null &&
(
<div >
<img className="re_img" src={recipe["recipe"]["image"]}></img>
<p className="tt">{recipe["recipe"]["label"]}</p>

        {recipe["recipe"]["ingredients"]["weight"]}
 
</div>
)}
</>

);


}
export default Recipetile;