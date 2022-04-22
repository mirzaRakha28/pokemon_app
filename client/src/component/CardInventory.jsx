import React, { useState ,useEffect} from 'react';
import { Link } from "react-router-dom";
import { gql,useQuery, useMutation } from "@apollo/client";
const CardInventory = ({pokemon,nickname,_ID,page}) => {
    const [image,setImage]  = useState("")
    const [id,setId] = useState(0);
    const getDetail = async ()=>{
        const result = await fetch("https://pokeapi.co/api/v2/pokemon/"+pokemon);
        const pokemons = await result.json();
        setImage(pokemons.sprites.front_default)
        
    }
    const DELETE_USER = gql`
    mutation deleteInventory($id: ID!) {
        deleteInventory(id: $id) {
        message
        }
    }
    `;
     const [deleteData, { error }] = useMutation(DELETE_USER);
    useEffect(()=>{
        getDetail();
    },[])
    
    return (
        <>  
            <div class="col-lg-4 mb-lg-0 mb-4 mt-4">
                <div class="card">
                    <div class="card-body p-3">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="d-flex flex-column h-100">
                                <h5 class="font-weight-bolder">{pokemon}</h5>
                                <p class="font-weight-bold "  href="javascript:;">
                                    {nickname}
                                    <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                                    </p>
                                <Link to={{
                                    pathname: "/detail",
                                    state: { data:pokemon }
                                }}>
                                    <p class="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto"  href="javascript:;">
                                    Read More
                                    <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                                    </p>
                                    </Link>
                                    <a href="" onClick={()=>{deleteData({variables:{id:_ID}})}} class="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto"  >
                                    Hapus
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                                <div class=" border-radius-lg h-100">
                                    <img src="../assets/img/shapes/waves-white.svg" class="position-absolute h-100 w-50 top-0 d-lg-block d-none" alt="waves"/>
                                    <div class="position-relative d-flex align-items-center justify-content-center h-100">
                                    <img class="w-100 position-relative z-index-2 pt-4" src={image} alt="rocket"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardInventory
