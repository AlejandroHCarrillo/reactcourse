import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { DcScreen } from '../dc/DcScreen';
import { HeroScreen } from '../heroes/HeroScreen';
import { HomeScreen } from '../home/HomeScreen';
import { MarvelScreen } from '../marvel/MarvelScreen';
import { NotFoundScreen } from '../notfound/NotFoundScreen';
import { SearchScreen } from '../search/SearchScreen';
import { Navbar } from '../ui/Navbar';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/heroe/:heroeId" component={ HeroScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    <Route exact path="/search/:searchTextParam" component={ SearchScreen } />
                    <Route exact path="/search/" component={ SearchScreen } />
                    <Route exact path="/notfound" component={ NotFoundScreen } />
                    <Route exact path="/home" component={ HomeScreen } />
                    <Route exact path="/" component={ HomeScreen } />

                    <Redirect to="/notfound"/>
                </Switch>
            </div>
        </>
    )
}
