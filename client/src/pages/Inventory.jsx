import React from 'react';
import SideBar from "../component/SideBar"
import Header from "../component/Header"
import CardInventory from "../component/CardInventory";
import { gql,useQuery } from "@apollo/client";

// import { LOGIN } from "../Graphql/Queries";

const Inventory = () => {
    const GET_IVENTORYS_BY_ID_USERS = gql`
    query findIventorysByIdUsers( $id: Int!) {
        findIventorysByIdUsers( id: $id) {
            id
          nickname
          pokemon
        }
      }
    `;
    const { data } = useQuery(GET_IVENTORYS_BY_ID_USERS, {
        variables: { id:1 },
      });
      
    
    return (
        <>
            <SideBar
            class1="nav-link  "
            class2="nav-link  active"
            />
            <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
            <Header 
                name="My Pokemon"
                />
                <div class="container-fluid py-4">
                    <class className="row">
                    {data &&
                    data.findIventorysByIdUsers.map((poke: any) => {
                        
                    return (
                        
                        <CardInventory pokemon={poke.pokemon } nickname={poke.nickname} _ID={poke.id}/>
                        
                    );
                    })}
                       
                        

                    </class>
                </div>
            </main>
        </>
    )
}
export default Inventory;


