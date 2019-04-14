import React from 'react';
import { HashRouter , Link } from 'react-router-dom'

const Navbar=()=>{
return(
  <>
    <HashRouter>
        <Link to='home'>Home</Link>
        <Link to='movies'>All Movies</Link>
        <Link to='moviesbyGenre'>By Genre</Link>
    </HashRouter>
  </>
 ) 
}

export default Navbar;