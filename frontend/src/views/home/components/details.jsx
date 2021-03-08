import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import {Button} from "semantic-ui-react";
import {goToHome} from '../actions/index';

const Details = ({}) => {
   	const {details,gotodetails} = useSelector(state => state.data);
    const dispatch = useDispatch();

    return(<>
          	 <center>
               <Button primary onClick={() => dispatch(goToHome(false))} 
                       className='go-to-home'>Go To Home</Button>
            <h2>Details Page</h2></center>
            <div className="container">
              <div className="textStyle">
              <h2>Your List: {details.id}</h2>
            	<h2>Name: {details.name}</h2>
              <h2>Description: {details.description}</h2>
              <h2>Created At: {details.created_at}</h2>
          	</div>
            </div>
        </>);
}
               
export default Details;