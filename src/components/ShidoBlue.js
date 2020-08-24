import React,{useState} from 'react';


const ShidoBlue = () => {
    const [shido, setShido] = useState(0)
    const addShido = () =>{
        if(shido === 3){
            setShido(0)
            return
        }
        setShido(shido + 1)
    }
    return ( 
        <div className="container-fluid h-100 shido" onClick={addShido}>
            <h2 className="text-center">Shido</h2>
            {shido == 1 && 
            <div className="row">
                <div className="col-3 bg-warning shido-card"></div>
            </div>}
            {shido == 2 && 
            <div className="row justify-content-around">
                <div className="col-3 bg-warning shido-card"></div>
                <div className="col-3 bg-warning shido-card"></div>
            </div>}
            {shido == 3 && 
            <div className="row justify-content-between">
                <div className="col-3 bg-danger shido-card"></div>
                <div className="col-3 bg-danger shido-card"></div>
                <div className="col-3 bg-danger shido-card"></div>
            </div>}
        </div>
     );
}
 
export default ShidoBlue;