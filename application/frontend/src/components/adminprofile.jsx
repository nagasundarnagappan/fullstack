import React from "react";
import { useSpring, animated } from 'react-spring';



const Adminprofile = () => {
  // React Spring animations
  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div className="admin-profile-container">
      
        
      <animated.div className="admin-profile" style={springProps}>
        <h1>Profile</h1>
        <div className="profile-details">
          <div className="profile-image">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAMFBMVEXk5ueutLepr7LU19nn6eqxt7q1ur3h4+Tr7e7P0tS9wsTFycu4vcDJzc/Bxcfa3d7ZM2EJAAAE/ElEQVR4nO2d23LrIAxFDcjGxhf+/2+PsZszSeO0BrYjpaP11k4fvAYQiIvaNIqiKIqiKIqiKIqiKIqiKIqiKIqiKDlQ35OPOz79wP1BxfS9d+PUde1O102jW424P6sA6uPYmme6MfYf5kM0tNYeuBiz/nqgT+pufn5hcvOZPfcnnsXP5ieVTcfM/gNah7zrflPZdDonXoficsJk11mibBsapjPNcmucQXJco/m0yc4ot20oZLoYExqhOjRlu4i1KXJZbUTOoBlD/x4rsW1Oh+Qnm1HcciA3jt3bzNwf/wi5cpcVJ6qj+bLBf6MT1dGWssF/wwY5TUOuzmW1GeTYVKokpMj0lZ1sY5Gy5gS4GCMjBvT5y8sjJhFN4yENY1oJqRohRkxiESDjj3bHShAwc9IAcjFmZh81BdnlKwK3SxM7mEzHvd7M3sL4iZlbpjgne8aOvC5NrFv7PzLxTjXkUIF5g3fQAAOzYU8EaARN/7sM72aAR61ldpnAugiAjv8UARhdCDhlJlhXzuBgZozKwGSwLtbxuYCnGZVRmWOZPzVmwDKsK014aP5LMrwrAPDarGPNzjxubyYx8W6dYfOZhVWG5j+UnIFnTea02SETmpZ5FxAaAXiz5rSjgXNh3wSEDhr2I2ePGzSs2xkboBNNk2YZ7oYBLpy5Y9lmg+pnE7dJk0IAaBHAfwq4Qpg0oOU/n13pMU0jomHWpkG4tNwWX9Tf0EpbGfyhbIdC9X2zSYpLQ9XXZ6yI0f9FZQywA7fAA1UnaJb/bsY9VHV9thP2LKhmB03ETbMHaCi1aWUNmJ3SNI09JTukzEbYQ4AbRSsBiX1sJ/76QPMRK2cV8wzFU280/7sY9qz/Jyhn9hQ2Vx7Qn98TENzFbpA/dzlwETbtH0N9DL9NoG2IMhLL3yFyoXsZ2KzpFifyPeMLiOK8Ns9zVQBr2zDHT1JJEPk4jKG197TTODj/aSobq4+PbpjHJYSwjPPgUomTTzT5In2739l/+Fyo/84H6iSJJjo3L8td3Zlp2rpaKqbzIVLrV0Y3BrOP+OdgttGFIXqB77P/s42O1aM7kniebNa/CbPbRhL3l39nC1zz0p7xeBCaZierjVYTN6QWOe9xb5RaKMrwWXuXm8OrWkYnhbYexx6407JlyUrIXvuMjrV51kZZgDc01lUbW1rQ0zCBLwKadvQcqQH1yNdmd4Tm3TpEQ9WQ/wk7vTVxo2bI3FPK1HnjJTrvCkvMnLcx76nmRk2EXmV8pdMN10c28nP7BpekEy7eKEg7Fe9RSTbtfOUsSs27muWLcN0+IUXsLeYTtFdVqYRf/D/FNRuf2CvMp7HTFTbQ56U5NhZ97kGlpdggOtgwQB6Rs1TYIF3ieyPysw3uFDfzcO8SUDboB8xlYOproF8vlYK4+0Dgx0vFQK49A18u1AG4L4S6tVyPrb3JRVGMS8qm69rFM08wj9RVP4HVLgNhKzoa7Jo/iqobw9wf/4QtLiQOKSmJprCjUeT+8CMK623iHmBBKZo64YULQBS9TAMW+4NSskbj2Ys5Q0HTIJ/GYil4zllZG/tKshc16IoyQPJPb7BV2LBkhwAhufIhuU+HpE4yG9n/FYFnY/kkmfFM8pBZmyZrSSNjq+wleYNGVOr/TN6gQbyJvZK8yiHS8uVv5FUQf8dRfw054cwHK5us2BydbCQ9hVYURVEURVGO+AfCFkmTCfz9cQAAAABJRU5ErkJggg==" alt="Admin Avatar" />
          </div>
          <div className="profile-info">
            <h2>Ravi</h2>
            <p>Email: ravinandhini44@gmail.com</p>
            <p>Role: Administrator</p>
          
          </div>
        </div>
        <div className="additional-details">
          <h2>Additional Details</h2>
          <ul>
            <li>Joined: January 1, 2022</li>
            <li>Last Login: February 15, 2022</li>
          
          </ul>
        </div>
      </animated.div>
    </div>
  );
}

export default Adminprofile;