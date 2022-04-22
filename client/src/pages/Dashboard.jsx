import React, { useState ,useEffect} from 'react';
import SideBar from "../component/SideBar"
import Header from "../component/Header"
import CardListPokemon from "../component/CardListPokemon";
import { gql,useQuery } from "@apollo/client";
// import { LOGIN } from "../Graphql/Queries";

const Dashboard = () => {
    const [allPokemon,setallPokemon] = useState([])
    const getallPokemon = async ()=>{
            const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=200");
            const pokemon = await result.json();
            setallPokemon(pokemon.results)

    }
    useEffect(()=>{
       getallPokemon()
    },[])
    return (
        <>
            <SideBar
            class1="nav-link  active"
            class2="nav-link  "
            />
            <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <Header 
                name="All Pokemon"
                />
                <div class="container-fluid py-4">
                    <class className="row">
                        
                
                        {
                            allPokemon.map((poke,i)=>
                                <CardListPokemon pokemon={poke.name} page="pokemon"/>
                            )
                        }
                        

                    </class>
                </div>
            </main>
        </>
    )
}
export default Dashboard;


