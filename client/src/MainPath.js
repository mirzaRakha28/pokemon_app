import { BrowserRouter,Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Detail from "./pages/Detail";
import Inventory from "./pages/Inventory";
import NotFound from "./pages/NotFound";
import TagJs from "./TagJs"
const MainPath = () => (
    <>
    <TagJs/>
    <BrowserRouter>
        <Switch>
            <Route exact path={`/`} >
                <Dashboard />
            </Route>
            <Route exact path={`/pokemon`} >
                <Dashboard />
            </Route>
            <Route  exact path={`/pokedex`} >
                <Inventory />
            </Route>
            <Route   path={`/detail`} >
                <Detail  />
            </Route>
            <Route  path="*" >
                <NotFound/>
            </Route>
        </Switch>
    </BrowserRouter>
    </>
    )
export default MainPath;