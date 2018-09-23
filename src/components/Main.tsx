import * as React from "react";

export const Main: React.SFC = () => {
  return (
    <div className="container-full main-splash-container">
      <div className="container">
      	<div className="row">
      		<div className="col col-md-3" />
      		<div className="col col-md-6">
              <h1 className="title center-align white-text">
                New Zealand's No.1 site for Actors and Models
              </h1>
              <p className="center-align white-text bottom-text width-70">
                1,239,896 Jobs & Auditions for Modelling Agencies, TV, Film, Commercials and more since 2003.
              </p>
        	</div>
          <div className="col col-md-3" />
        </div>
       </div>
    </div>
  );
};