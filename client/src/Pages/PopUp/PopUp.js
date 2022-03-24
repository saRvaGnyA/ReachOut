import './PopUp.css'

function PopUp(props){
    return (
        <div>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <div class="floating-container">
            <div class="floating-button">+</div>
            <div class="element-container">
                    <span class="float-element">
                        <button><i class="material-icons">text_increase</i></button>
                    </span>
                    <span class="float-element">
                        <button><i class="material-icons">text_decrease</i></button>
                    </span>
                    <span class="float-element">
                        <button onClick={props.funct}><i class="material-icons">mode_edit</i></button>
                    </span>
            </div>
            </div>
        </div>
    );
}

export default PopUp;