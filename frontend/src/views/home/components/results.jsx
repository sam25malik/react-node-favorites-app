import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import {Grid, Segment, Button} from "semantic-ui-react";
import {addToList,updateFav,removeToList,setDetails} from '../actions/index';

const Results = ({}) => {
    	const {results} = useSelector(state => state.data);
        const dispatch = useDispatch();

        const remove = (fav) =>{
        	dispatch(removeToList(fav));
        	dispatch(updateFav());

        }

        const add = (fav) =>{
        	dispatch(addToList(fav));
        	dispatch(updateFav());
        }       

        const resultGrid = (resultData) => {
	        console.log('resultData',resultData);
	        let items = [];
	        for (let i = 0; i < resultData.length; i++) {
	             let temp = (
	               <Grid.Column className="results" key={i}>
	                	<Segment className="results-grid">
	                       <h2>Name: {resultData[i].name}</h2>
			               <p><b>Url</b>: {resultData[i].git_url}</p>
			               <Button onClick={() => add(resultData[i])} className="btn-list">Add To Favorite(+)</Button>
	           	    	<Button onClick={() => remove(resultData[i])} className="btn-list-neg">Remove From Favorite(-)</Button>
	           	    	<Button onClick={() => dispatch(setDetails(resultData[i]))} className="btn-list-details">View Details</Button>

	           	    	</Segment>
	                </Grid.Column>

	        );
	        	items.push(temp);
        	} 
        	
        	return items;
		}
          
        return(<div style={{'marginTop':'80px'}}>
               		{results ? (<Grid columns={3}>{resultGrid(results)}</Grid>): 
						(<div style={{'marginLeft':'-80px'}}>No results</div>)
               		}	
                </div>);
}
               
export default Results;