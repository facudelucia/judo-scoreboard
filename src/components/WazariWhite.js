import React,{useState} from 'react';

const WazariWhite = () => {
    const [wazari, setWazari] = useState(0)
    const addWazari = () =>{
        if(wazari === 2){
            setWazari(0)
            return
        }
        setWazari(wazari + 1)
    }
    return ( 
        <div>
            <h2 className="text-center">Wazari</h2>
            <p className="text-center" onClick={addWazari}>{wazari}</p>
        </div>
     );
}
 
export default WazariWhite;