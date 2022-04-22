
const SideBar = (props)=>{
    return(
      <>
        <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 " id="sidenav-main">
        <div class="sidenav-header">
                  
        </div>
        <hr class="horizontal dark mt-0"/>
        <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
          <ul class="navbar-nav">
            <li class="nav-item">
            {/* <Link width="12px" height="12px" alt="" class={props.class1} to={{pathname:"pokemon"}}> */}
              <a class={props.class1} href="../pokemon">
                <div class=" icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <img src="./assets/img/pokeball.png" class="navbar-brand-img h-100" alt="main_logo"/>
            
                </div>
                <span class="nav-link-text ms-1">All Pokemon</span>
              </a>
            {/* </Link> */}
            </li>
            <li class="nav-item">
            {/* <Link width="12px" height="12px" alt="" class={props.class2} to={"/pokedex"}> */}
              <a class={props.class2} href="../pokedex">
                <div class=" icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  {/* <img src="./assets/img/pokeball.png" width="12px" height="12px" alt="" /> */}
                  <img src="./assets/img/pokedex.png" class="navbar-brand-img h-100" alt="main_logo"/>
            
                </div>
                <span class="nav-link-text ms-1">All Pokemon</span>
              </a>
              
            {/* </Link> */}
            </li>
            
          </ul>
        </div>
      </aside>
      </>
    )
}


export default SideBar;