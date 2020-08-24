import React from 'react';
import ShidoWhite from './components/ShidoWhite';
import ShidoBlue from './components/ShidoBlue';
import WazariWhite from './components/WazariWhite';
import WazariBlue from './components/WazariBlue';
import IpponWhite from './components/IpponWhite';
import IpponBlue from './components/IpponBlue';
import Osaekomi from './components/Osaekomi';
import { useDispatch, useSelector } from 'react-redux';
import { setGoldenScore, deleteGolden } from './actions/actions';
import Header from './components/Header';
function App() {
  const dispatch = useDispatch()
  const { goldenScore } = useSelector(state => state)
  const handleGolden = () => {
    if (!goldenScore) {
      dispatch(setGoldenScore())
    } else {
      dispatch(deleteGolden())
    }

  }
  return (
    <div className="container-app container-fluid">
      <div className="row row-header">
        <div className="col-3 bg-dark text-white">
          {goldenScore 
          ? <div>
              <p id="golden-score" className="text-warning mt-3 ml-3">Golden Score</p>
              <input 
                type="button"
                value={"Exit"}
                className="btn btn-danger mt-3 ml-3" 
                onClick={handleGolden}
              />
            </div>
          :<input 
            type="button"
            value={"Golden Score"}
            className="btn btn-warning mt-3 ml-3" 
            onClick={handleGolden}
          />}
        </div>
        <div className="col-9 bg-dark text-white text-center">
          <Header />
        </div>
      </div>
      <div className="row row-white">
        <div className="col-4 ippon">
          <IpponWhite />
        </div>
        <div className="col-4 wazari">
          <WazariWhite />
        </div>
        <div className="col-4 shidos">
          <ShidoWhite />
        </div>
      </div>
      <div className="row row-blue text-white">
        <div className="col-4 bg-primary ippon">
          <IpponBlue />
        </div>
        <div className="col-4 wazari bg-primary">
          <WazariBlue />
        </div>
        <div className="col-4 shidos bg-primary">
          <ShidoBlue />
        </div>
      </div>
      <div className="row row-footer">
        <div className="footer col-6">
           <a target="_blank" href="https://facudelucia-web.netlify.app">developed by facudelucia &copy;</a>
        </div>
        <div className="col-6 text-center">
            <Osaekomi />
        </div>
      </div>
    </div>
  );
}

export default App;
