import React, { useState } from 'react';


const TimerGS = () => {
    const [time, setTime] = useState({
        s: 0,
        m: 0,
    })
    const { s, m } = time
    const [interv, setInterv] = useState()
    const [status, setStatus] = useState(0)
    const start = () => {
        setStatus(1)
        run()
        setInterv(setInterval(run, 1000))
    }

    let updatedS = s;
    let updatedM = m;

    const run = () => {
        if (updatedS === 60) {
            updatedM++
            updatedS = 0
        }
        updatedS++
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
        setTime({ s: 0, m: 0 })
    }
    const resume = () => {
        start()
    }
    return (
        <div className="container h-100 mt-2">
            <div className="col-12 text-center">
                <p 
                    className="timer-number"
                >{(m >= 10) ? m : `0${m}`}:{(s >= 10) ? s : `0${s}`}
                </p>
            </div>
            <div className="col-12">
                {(status === 0) && <input
                    type="button"
                    className="btn btn-success"
                    value="Hajime"
                    onClick={start}
                />}
                {(status === 1) &&
                    <div>
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
                    </div>}
                {status === 2 &&
                    <div>
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
        </div>
    );
}

export default TimerGS;