import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [champions] = useState(['카밀', '아트록스', '모데카이저']);

  return (
    <div className="container">
      <div className="header">
        <h4>Be the Best Laner</h4>
      </div>
      <div className="banner">
        <h4 style={{ color: 'white' }}>Choose a Champion</h4>
        <div className="champContainer">
          <div className="champName">
            <h3>{champions[0]}</h3>
            <Link to="/ChampCamile">
              <img
                src="https://i.namu.wiki/i/Fe4QKO6sn2uT0CbAPXtNUJ1-VvvwNR_IkubH6qXDM8UEcpK6BWIViudxGaw-LW_dBUjzZ5gGQU0VYd2fPTe5rvS9wZNJbrXdpt8PbEuHcL81lm8bp7khi1pMBwJFkVJ9OqB8R2ncdCNnRuyLUnmXow.webp"
                className="champImage"
                alt="카밀"
              />
            </Link>
          </div>

          <div className="champName">
            <h3>{champions[1]}</h3>
            <Link to="/ChampAatrox">
              <img
                src="https://i.namu.wiki/i/jLqEupPeuXQDlSxFg4f5Bn4lmVo1gaVeud1VC7IMB4MinkP_IVZupRz1Gf0WiushHai0K16P3JNTrxvsv1fjlZoMxvuGMuUChz-UkN-CICMWGceUCwMuQHlr_hnxomrx-MWJlfDHfWIBWIX4okX2Og.webp"
                className="champImage"
                alt="아트록스"
              />
            </Link>
          </div>

          <div className="champName">
            <h3>{champions[2]}</h3>
            <Link to="/ChampMordekaiser">
              <img
                src="https://i.namu.wiki/i/VqqizEv0rBX9tPoyUMM-gs2hrovb_9bUUfQG1IUp2HcftYo136L0DVo1RdG66HTM40o_GaiUTKAbTunrNIQWJvUTS14MLTPGHh5_mhTRlydrVD0lqC5wPx7oRixUY2ibuKW6D_HX9nsrIflPnBvE4A.webp"
                className="champImage"
                alt="모데카이저"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
