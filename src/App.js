import { Component } from 'react';
import './App.css';
import MenuUtama from './Page/MenuUtama';
import MenuProduct from './Page/MenuProduct';
import MenuKontak from './Page/MenuKontak';
import MenuTentangKami from './Page/MenuTentangKami';


function Header() {
     return <h2>Ini Halaman Untuk Header</h2>;
  
}

function Footer() {
  return <h2>Ini Halaman Untuk Footer</h2>;
}


class App extends Component{
  render() {
     return (
       <div>
         <Header />
         <MenuUtama/>
         <MenuProduct/>
         <MenuKontak/>
         <MenuTentangKami/>
         <Footer />
       </div>
     );
  }
}


export default App;
