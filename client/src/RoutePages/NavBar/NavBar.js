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
        text: 'Apply',
        link: '/apply'
    },
    {
        text: 'Hire',
        link: '/hire'
    },
    {
      text: 'Preferences',
      link: '/pref'
    },
    {
      text: 'Greviences',
      link: '/grevience'
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