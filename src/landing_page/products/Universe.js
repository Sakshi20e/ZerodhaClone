import React from 'react';

function Universe() {
  return ( 
   <div className='container text-center'>
    <h1>The Zerodha Universe</h1>
    <p> Extend your trading and investment experience even further with our
    partner platforms</p>
    <div className='row'>
      <div className='col-4 p-3 mt-5'>
      <img src="media/images/smallcaseLogo.png" />
      <p className="text-small text-muted">Thematic investment platform</p>
      </div>
      <div className='col-4 p-3 mt-5'>
      <img src="media\images\streakLogo.png "  style={{ width: "45%" }} />
      <p className="text-small text-muted">Algo 
        & strategy platfrom
      </p>
      </div>
      <div className='col-4 p-3 mt-5'>
      <img src="media\images\sensibullLogo.svg"  style={{ width: "60%" }} />
      <p className="text-small text-muted">Option trading platfrom</p>
      </div>
    </div>
    <div className='row'>
      <div className='col-4 p-3 mt-5'>
      <img src="media\images\zerodhaFundhouse.png"  style={{ width: "50%" }} />
      <p className="text-small text-muted">Assest management</p>
      </div>
      <div className='col-4 p-3 mt-5'>
      <img src="media\images\goldenpiLogo.png"  style={{ width: "50%" }} />
      <p className="text-small text-muted">Bonds trading platfrom</p>
      </div>
      <div className='col-4 p-3 mt-5'>
       <img src="media\images\dittoLogo.png"  style={{ width: "40%" }}  />
      <p className="text-small text-muted">Insurance</p>
      </div>
    </div>
    <button  className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}>Sign up now</button>
   </div>
   );
}

export default Universe;