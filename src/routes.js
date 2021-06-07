import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CharacterInfoPage from './pages/CharacterInfoPage';
import CharacterListPage from './pages/CharacterListPage';

const Routes = () => {
    return ( 
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ CharacterListPage } />
                <Route path="/character/" component={ CharacterInfoPage } />
            </Switch>
        </BrowserRouter>
     );
}
 
export default Routes;