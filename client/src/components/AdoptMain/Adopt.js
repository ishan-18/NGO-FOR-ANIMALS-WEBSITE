import React from 'react'
import {Switch,Route, Router} from 'react-router-dom'
import AdoptHero from '../Adopt/Hero/AdoptHero'
import AdoptPages from '../Adopt/Mainpages/AdoptPages'
import { DataProvider } from '../../GlobalState';

const Adopt = () => {
    return (
        <DataProvider>
            <div>
                <AdoptHero />
                <AdoptPages />
            </div>
        </DataProvider>
    )
}

export default Adopt
