import React, { useState ,useEffect} from 'react';
import SideBar from "../component/SideBar"
import Header from "../component/Header"
import { gql, useMutation } from "@apollo/client";
import { useLocation } from "react-router-dom";
import { Button,Modal } from 'react-bootstrap'
const Detail = () => {
    const ADD_POKEMON = gql`
     mutation addPokemon($id_user: Int!, $pokemon: String!, $nickname: String!) {
        addPokemon(id_user: $id_user, pokemon: $pokemon, nickname: $nickname) {
        id
        }
    }
        `;
    const [addPokemon, { error }] = useMutation(ADD_POKEMON);
    const [nickname, setNickname] = useState("");


    const location = useLocation();
   
    const [image,setImage] = useState(["",""])
    const [pokemon,setPokemon] = useState([])
    const [type,setType] =useState("")
    const [move,setMove] = useState([])
    const [showWait, setShowWait] = useState(false);
    const [showFailed, setShowFailed] = useState(false);
    const [showSucces, setShowSucces] = useState(false);
    
    useEffect(()=>{
        const getDetail = async ()=>{
            const result = await fetch(`https://pokeapi.co/api/v2/pokemon/`+location.state.data);
            const pokemons = await result.json();
            setPokemon(pokemons)
            setType(pokemons.types[0].type.name)
            setMove(pokemons.moves)
            setImage([pokemons.sprites.front_default,pokemons.sprites.front_shiny])
            // console.log(pokemons.moves[0])
           
        }
        getDetail();
    },[])
    const changeImage= ()=>{
         
        setImage([pokemon.sprites.back_default,pokemon.sprites.back_shiny])
   }
   const resetImage=()=>{
        setImage([pokemon.sprites.front_default,pokemon.sprites.front_shiny])
   }
   const timeout = (delay: number)=> {
    return new Promise( res => setTimeout(res, delay) );
    }
    const cacthPokemon= async(e)=>{
        e.preventDefault();
        const rand =  Math.floor(Math.random() * 2);;
        setShowWait(true)
        await timeout(3000 )
        if(rand === 0){
            setShowWait(false)
            setShowSucces(true)
        }else{
            setShowWait(false)
            setShowFailed(true)
        }
    }
    return (
        <>
            <SideBar
            class1="nav-link    "
            class2="nav-link  "
            />
            <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <Header 
                name={location.state.data}
                />
                    
                <div class="container-fluid py-4">
    
                    <div class="row">
                        <div class="col-xl-6 col-sm-6 mb-xl-0 mb-4">
                            <div class="card">
                                <div class="card-body p-3">
                                    <div class="row">
                                    <p class="text-sm mb-0 text-capitalize font-weight-bold ms-auto text-center">{location.state.data} Type Default</p>
                                        <div class="col-lg-12 ms-auto text-center mt-5 mt-lg-0">
                                        
                                            <div class="bg-gradient-primary border-radius-lg h-100" onMouseEnter={changeImage} onMouseLeave={resetImage}>
                                                
                                                <img src="../assets/img/shapes/waves-white.svg" class="position-absolute h-100 w-50 top-0 d-lg-block d-none" alt="waves"/>
                                                
                                                <div class="position-relative d-flex align-items-center justify-content-center h-100">
                                                <img class="w-25 position-relative z-index-2 pt-4" src={image[0]} alt="rocket"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-sm-6 mb-xl-0 mb-4">
                            <div class="card">
                                <div class="card-body p-3">
                                    <div class="row">
                                    <p class="text-sm mb-0 text-capitalize font-weight-bold ms-auto text-center">{location.state.data} Type Shiny</p>
                                        <div class="col-lg-12 ms-auto text-center mt-5 mt-lg-0">
                                        
                                            <div class="bg-gradient-primary border-radius-lg h-100" onMouseEnter={changeImage} onMouseLeave={resetImage}>
                                                
                                                <img src="../assets/img/shapes/waves-white.svg" class="position-absolute h-100 w-50 top-0 d-lg-block d-none" alt="waves"/>
                                                
                                                <div class="position-relative d-flex align-items-center justify-content-center h-100">
                                                <img class="w-25 position-relative z-index-2 pt-4" src={image[1]} alt="rocket"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-lg-12 mb-lg-0 mb-4">
                            <div class="card">
                                <div class="card-body p-3">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="d-flex flex-column h-100">
                                            <button type="button" onClick={cacthPokemon} class="btn btn-secondary">catch the Pokemon</button>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-lg-12 mb-lg-0 mb-4">
                            <div class="card">
                                <div class="card-body p-3">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="d-flex flex-column h-100">
                                                <h5 class="font-weight-bolder text-center">{location.state.data}</h5>
                                                <p class=" text-center">Type :<br/>{type}</p>
                                                <p class=" text-center">Moves :</p>
                                                <p class=" ">
                                                {

                                                     move.map(item => {
                                                        console.log()
                                                        return <><mark>{item.move.name} </mark>,</>;
                                                    })
                                                }
                                                </p>
                                               
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Modal show={showWait} >
                <Modal.Body>
                <div class="row mt-4">
                    <div class="col-lg-12 mb-lg-0 mb-4">
                        <div class="card">
                            <div class="card-body p-3">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="d-flex flex-column h-100">
                                        <p class="mb-1 pt-2 text-bold">Harap Tunggu</p>
                                        
                                        <h5 class="font-weight-bolder">Pokemon Anda Sedang Diproses</h5>
                                        <p class="mb-5">Proses Ini Membutuhkan Waktu 30s</p>
                                       
                                    </div>
                                </div>
                                <div class="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                                    <div class="border-radius-lg h-100">
                                        <img src="../assets/img/shapes/waves-white.svg" class="position-absolute h-100 w-50 top-0 d-lg-block d-none" alt="waves"/>
                                        <div class="position-relative d-flex align-items-center justify-content-center h-100">
                                        <img class="w-100 position-relative z-index-2 pt-4" src="../assets/img/shake-pokeball.gif" alt="rocket"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                </Modal.Body>
            </Modal>
            <Modal show={showFailed} onHide={()=>{setShowWait(false); setShowFailed(false);}} >
                <Modal.Body>
                <div class="row mt-4">
                    <div class="col-lg-12 mb-lg-0 mb-4">
                        <div class="card">
                            <div class="card-body p-3">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="d-flex flex-column h-100">
                                        <p class="mb-1 pt-2 text-bold">Mohon Maaf Kamu Gagal Mendapatkan Pokemon</p>
                                        
                                        <h5 class="font-weight-bolder">Tetap Semangat Ya</h5>
                                        <p class="mb-5">Tenang, Kamu Bisa Menangkap Pokemon Kapanpun Yang Kamu Mau </p>
                                       
                                    </div>
                                </div>
                                <div class="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                                    <div class="border-radius-lg h-100">
                                        <img src="../assets/img/shapes/waves-white.svg" class="position-absolute h-100 w-50 top-0 d-lg-block d-none" alt="waves"/>
                                        <div class="position-relative d-flex align-items-center justify-content-center h-100">
                                        <img class="w-100 position-relative z-index-2 pt-4" src="../assets/img/pokemon-ash.gif" alt="rocket"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                </Modal.Body>
            </Modal>
            <Modal show={showSucces} >
                <Modal.Body>
                <div class="row mt-4">
                    <div class="col-lg-12 mb-lg-0 mb-4">
                        <div class="card">
                            <div class="card-body p-3">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="d-flex flex-column h-100">
                                        
                                            <h5 class="font-weight-bolder">Selamat </h5>
                                            <p class="">Anda Mendapatkan {location.state.data} </p>
                                            <div class="form-group">
                                                
                                                <input type="text" class="form-control" id="exampleInputEmail1" onChange={(event) => {
          setNickname(event.target.value);
        }} aria-describedby="emailHelp" placeholder="Beri Nama"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                                        <div class="border-radius-lg h-100" onMouseEnter={changeImage} onMouseLeave={resetImage}>
                                            <img src="../assets/img/shapes/waves-white.svg" class="position-absolute h-100 w-50 top-0 d-lg-block d-none" alt="waves"/>
                                            <div class="position-relative d-flex align-items-center justify-content-center h-100">
                                            <img class="w-100 position-relative z-index-2 pt-4" src={image[0]} alt="rocket"/>
                                            </div>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"  onClick={() => {
                        
                        addPokemon({
                            variables: {
                                id_user:1,
                            pokemon:location.state.data,
                            nickname: nickname
                            },
                        });
                        setShowWait(false); setShowSucces(false);
                    }}
                        
                    >Simpan</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Detail;


