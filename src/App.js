
import Navs from './components/Navs/Navs'
import React, { Fragment } from 'react';
import './index.css';

import Home from './components/Home.js/Home';


function App(){
    return(
<Fragment>
    <Navs/>
    <Home/>
</Fragment>
    )
}
export default App;