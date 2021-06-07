import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CharacterInfoPage from './pages/CharacterInfoPage';
import CharacterListPage from './pages/CharacterListPage';
import { config } from "./utils/constants";

const Routes = () => {
    return ( 
        <BrowserRouter basename={config.BASE_URL}>
            <Switch>
                <Route exact path="/" component={ CharacterListPage } />
                <Route path="/character/" component={ CharacterInfoPage } />
            </Switch>
        </BrowserRouter>
     );
}
 
export default Routes;