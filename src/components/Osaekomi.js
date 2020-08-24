import React, { useState } from 'react';

const Osaekomi = () => {
    const [time, setTime] = useState({
        s: 0,
    })
    const { s } = time
    const [interv, setInterv] = useState()
    const [status, setStatus] = useState(0)
    const start = () => {
        setStatus(1)
        run()
        setInterv(setInterval(run, 1000))
    }
    let updatedS = s;
    const run = () => {
        if (updatedS === 20) {
            setStatus(2)
            return
        }
        updatedS++
        return setTime({
            s: updatedS,
        })
    }
    const stoper = () => {
        clearInterval(interv)
        setStatus(2)
    }
    const reset = () => {
        clearInterval(interv)
        setStatus(0)
        setTime({ s: 0 })
    }
    return (
        <div className="container h-100">
            <div className="col-12 text-center">
                <h4>Osaekomi</h4>
                <span id="osaekomi-number">{(s >= 10) ? s : `0${s}`}</span>
            </div>
            <div className="col-12">
                {(status === 0) && <input
                    type="button"
                    className="btn btn-success"
                    value="Hajime"
                    onClick={start}
                />}
                {(status === 1) &&
                    <input
                        type="button"
                        className="btn btn-warning"
                        value="Mate"
                        onClick={stoper}
                    />
                }
                {status === 2 &&
                    <input
                        type="button"
                        className="btn btn-danger"
                        value="Soremade"
                        onClick={reset}
                    />
                }
            </div>
        </div>
    );
}

export default Osaekomi;