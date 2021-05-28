import React from "react";
 import ReactDOM from "react-dom";
 import  "./index.css";
 import Axios from "axios";
  import {useState} from "react";
  import Recipetile from "./Recipetile";

 function Search() {
    const [quer,setquer]= useState("");
    const [recipe,setreceipe]=useState([]);
    const [heathlabel,sethealthlabel]=useState("Vegan");
    const YOUR_APP_ID ="f006a5b3";
    const YOUR_APP_KEY=
    "e085e7b30104fbc614807a0f1b79845b";
    var url=
 `https://api.edamam.com/search?q=${quer}&app_id=f006a5b3&app_key=e085e7b30104fbc614807a0f1b79845b&from=0&to=10&healthLabels=${heathlabel}`;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
 var urll=`https://w7.pngwing.com/pngs/66/86/png-transparent-apptrailers-meal-android-android-food-recipe-logo.png`; 
  async function getreciepe(){
  var res=await Axios.get(url);
  console.log(res.data);
  setreceipe(res.data.hits);

   }
   const onsubmit=(e)=>{
       e.preventDefault();
      getreciepe();
}
    return(
   
    <>
    <div className="maincontainer"> 
    <div className="container"> 
    <div className="logo">
      <img src={urll} className="logoimg"></img> 
    </div>
    <h1 className="align">Food Reciepe Mart</h1>
     <form className="formc" onSubmit={onsubmit}>
         <input type="text" placeholder="enter food" className="input" value={quer} onChange={e=>setquer(e.target.value)}></input>
         <input type="submit" className="sub_button"></input>
         <select className="hlabel">
             <option onClick={()=>{sethealthlabel("Vegan")
                  

             }}>Vegan</option>
              <option onClick={()=>{sethealthlabel("Vegetarian")
                  

                }}>Vegetarian</option>
                 <option onClick={()=>{sethealthlabel("Egg-Free")
                  

                }}>Egg-Free</option>
 <option onClick={()=>{sethealthlabel("Soy-Free")
                  

                }}>Vegetarian</option>


         </select>
     </form>
     </div>
     
     <div className="contain">
         {recipe.map(recipe =>{

           return <Recipetile recipe={recipe}/>
         })
           
            }
     </div>
     
     </div>
      </>
   
     );
 }
 export default Search;