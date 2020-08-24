import React, { useState } from 'react';


const Timer = () => {
    const [time, setTime] = useState({
        s: 0,
        m: 0,
    })
    const { s, m } = time
    const [interv, setInterv] = useState()
    const [status, setStatus] = useState(0)
    const handleInputChange = (e) => {
        setTime({
            ...time,
            [e.target.name]: e.target.value
        })
    }
    const start = () => {
        setStatus(1)
        run()
        setInterv(setInterval(run, 1000))
        
    }

    let updatedS = s;
    let updatedM = m;

    const run = () => {
        if (updatedS === 0 && updatedM > 1) {
            updatedS = 59
            updatedM--
        }
        if(updatedM === 0 && updatedS === 0){
            return
        }
        
        updatedS--
        return setTime({
            s: updatedS,
            m: updatedM,
        })
    }
    const stoper = () => {
        clearInterval(interv)
        setStatus(2)
    }
    const reset = () => {
        clearInterval(interv)
        setStatus(0)
        setTime({ s: 0, m: 3 })
    }
    const resume = () => {
        start()
    }
    return (
        <div className="row">
            {(status == 0) &&
                <form className="col-12">
                    <div className="form-group">
                        <label className="timer-styles">Minutes</label>
                        <input type="number" value={m} name="m" onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label className="timer-styles">Seconds</label>
                        <input type="number" value={s} name="s" onChange={handleInputChange} />
                    </div>
                    <input type="button" className="btn btn-success" value="Hajime" onClick={start} />
                </form>
            }
            
            {(status === 1) &&
                <div className="col-12">
                    <p className="timer-number">{`${m}:${s}`}</p>
                    <input
                        type="button"
                        className="btn btn-warning"
                        value="Mate"
                        onClick={stoper}
                    />
                    <input
                        type="button"
                        className="btn btn-danger"
                        value="Soremade"
                        onClick={reset}
                    />
                </div>    
            }
            {status === 2 &&
                <div className="col-12">
                    <p className="timer-number">{`${m}:${s}`}</p>
                    <input
                        type="button"
                        className="btn btn-warning"
                        value="Hajime"
                        onClick={resume}
                    />
                    <input
                        type="button"
                        className="btn btn-danger"
                        value="Soremade"
                        onClick={reset}
                    />
                </div>
            }
        </div>

    );
}

export default Timer;