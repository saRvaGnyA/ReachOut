import { Navbar } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css'

function NavBar(){
    const props = {
    items:[
    {
        text: 'Home',
        link: '/'
    },
    {
        text: 'Login',
        link: '/login'
    },
    {
        text: 'Custom',
        link: '/'
    },
    {
        text: 'Contact',
        link: '/'
    }
    ],
    logo:{
      text: 'ReachOut'
    },
    style:{
      barStyles: {
        background: '#444'
      },
      sidebarStyles: {
        background: '#222',
        buttonColor: 'white'
      }
    }
    }  
    return (
    <div className="home">
    	<Navbar {...props}/>
    </div>
  );
}

export default NavBar;