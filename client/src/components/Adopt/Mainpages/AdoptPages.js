import React from 'react'
import {Switch,Route} from 'react-router-dom'
import AdoptCart from './AdoptCart/AdoptCart'
import AdoptProducts from './AdoptProducts/AdoptProducts'
import NotFound from './utils/NotFound/NotFound'

const AdoptPages = () => {
    return (
        <Switch>
            <Route path="/adopt/prod" exact component={AdoptProducts} />
            <Route path="/adopt/cart" exact component={AdoptCart} />
            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

export default AdoptPages
