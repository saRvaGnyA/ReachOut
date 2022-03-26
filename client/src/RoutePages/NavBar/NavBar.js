import { Navbar } from 'responsive-navbar-react';
import 'responsive-navbar-react/dist/index.css';
import FontSizeChanger from 'react-font-size-changer';


function NavBar() {
  const props = {
    items: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'User Login',
        link: '/userlogin',
      },
      {
        text: 'Company Login',
        link: '/companylogin',
      },
      {
        text: 'Apply',
        link: '/apply',
      },
      {
        text: 'Hire',
        link: '/hire',
      },
      {
        text: 'Preferences',
        link: '/pref',
      },
      {
        text: 'Greviences',
        link: '/grevience',
      },
    ],
    logo: {
      text: 'ReachOut',
    },
    style: {
      barStyles: {
        background: '#444',
      },
      sidebarStyles: {
        background: '#222',
        buttonColor: 'white',
      },
    },
  };
  return (
    <div className="home">
      <Navbar {...props} />
      
     <div style={{display:"flex", justifyContent:"end"}}>
      
      <FontSizeChanger
          targets={['.textsize']}
          onChange={(element, newValue, oldValue) => {
            console.log(element, newValue, oldValue);
          }}
          options={{
            stepSize: 1,
            range: 3
          }}
          customButtons={{
            up:<span style={{'fontSize': '20px'}} className="material-icons fontup-button">text_increase</span>,
       
            down: <span  style={{'fontSize': '20px'}} className="material-icons">text_decrease</span>,
         
          }}     
          style={{
              marginBottom:"100px",
              paddingBottom:"200px",
              float:"left",
              position:"relative",
              left:"0px",
              top:"0px",
              zIndex:"1000",
              backgroundColor:"transparent"
          }}     
        /> 
    </div>
    </div>
  );
}

export default NavBar;