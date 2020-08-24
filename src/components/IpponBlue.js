import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIpponBlue, deleteIpponBlue } from '../actions/actions';

const IpponBlue = () => {
    const dispatch = useDispatch()
    const {ipponBlue} = useSelector(state => state)
    const [ippon, setIppon] = useState(0)
    const addIppon = () =>{
        if(ippon == 0){
            dispatch(setIpponBlue())
        }
        if(ippon == 1){
            dispatch(deleteIpponBlue())
            setIppon(0)
            return
        }
        setIppon(ippon + 1)
    }
    return ( 
        <div>
            <h2 className="text-center">Ippon</h2>
            <p className="text-center" onClick={addIppon}>{ipponBlue ? 1 : 0}</p>
        </div> 
     );
}
 
export default IpponBlue;