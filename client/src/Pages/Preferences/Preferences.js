import Component from './Component';

function Preferences(){

    let array=[];

    return(
        <div>
            {array.map((item)=>{
                return (<div>
                    <Component item={item}/>
                </div>);
            })}
        </div>
    );
}

export default Preferences;