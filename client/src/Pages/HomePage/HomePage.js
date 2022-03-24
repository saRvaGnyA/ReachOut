import "./HomePage.css"
import IMG from '../../Logos/HomePageImg.jpeg'

function HomePage(){
    return (
        <div>
            <img src={IMG} style={{width:"100%",opacity:"0.7"}}/>
        </div>
    );
}

export default HomePage;