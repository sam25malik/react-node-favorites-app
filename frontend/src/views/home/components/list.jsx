import React,{useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import {Grid, Segment, Button} from "semantic-ui-react";
import {goToList,removeToList,updateFav} from '../actions/index';

const List = ({}) => {
   	const {list,total,discount,afterDiscount} = useSelector(state => state.data);
    const dispatch = useDispatch();

    const remove = (fav) =>{
          dispatch(removeToList(fav));
          dispatch(updateFav());
    }


   const resultGrid = (resultData) => {
	let items = [];
	for (let i = 0; i < resultData.length; i++) {
	 	let temp = (<Grid.Column className="results" key={i}>
	                	<Segment className="results-grid">
	                       <h2>Name: {resultData[i].name}</h2>
                     <p><b>Url</b>: {resultData[i].git_url}</p>
			               <Button onClick={() => remove(resultData[i])} className="btn-list-neg">Remove From List</Button>
	           	    	</Segment>
	                </Grid.Column>);
	        	items.push(temp);
        	} 
        	
        	return items;
	}
          
    return(<>
        	<div className="container">
            <div className="textStyle">
            <h2>Your List</h2>
        	</div>
            <Button primary onClick={() => dispatch(goToList(false))} 
                className='go-to-home'>Go To Home</Button>
            </div>
        	<div style={{'marginTop':'80px'}}>
               		{list ? (<Grid columns={3}>{resultGrid(list)}</Grid>): 
						(<div style={{'marginLeft':'-80px'}}>No results</div>)
               		}	
            </div></>);
}
               
export default List;