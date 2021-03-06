import * as React from "react";
import { Form } from "./Form";
import logo from '../images/star.svg';
import MediaQuery from 'react-responsive';

export interface IValues {
  /* Key value pairs for all the field values with key being the field name */
  [key: string]: any;
}

export class Header extends React.Component {

  public render(){
	  return (
	  	<div className="container-full fa-bg">
	  		<div className="large-container">
			  	<div className="row header-row">
			  		<div className="col col-md-4">
			  			<img src={logo} alt="Starnow" title="Starnow" className="logo hvr-wobble-horizontal" />
			  			<MediaQuery query="(max-width: 767px)">
	        				<div className="sign-in-text">Sign in to StarNow</div>
	      				</MediaQuery>
			  		</div>
			  		<div className="col col-md-8 no-mobile-side-padding">
			    		<Form />
			    	</div>
			    </div>
		    </div>
	    </div>
	  );
	}	
}