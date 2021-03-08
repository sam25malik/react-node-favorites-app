import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import {Input,Dropdown,Button} from "semantic-ui-react";
import {setLimit,setInput,urlGenerator,retrieveUsers,clear,goToList} from '../actions/index';

const Search = ({}) => {
    const {inputValue,list} = useSelector(state => state.data);
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(retrieveUsers());
    },[]);

    return (    
        <>
          <div className="container">
            <div className="textStyle">
            <h2>Favorite Repositories</h2>
          	<p className="paraStyle">Start Search Github Repositories and get there details</p>
        		</div>
             <Input 
                  onChange={(event) => dispatch(setInput(event.target.value))} 
                  autoComplete="off"
                  placeholder='Enter Name Repositories'
                  style={{'width':'250px','marginLeft':'-50px'}}
                   value={inputValue}
            />
              <Button primary onClick={() => dispatch(retrieveUsers())} 
                  className='dropdown-limit'>Search</Button>

              <Button primary onClick={() => dispatch(clear())} 
                  className='dropdown-limit'>Clear</Button>

              <Button primary onClick={() => dispatch(retrieveUsers())} 
                  className='list-count-btn'>list Items: {list.length}</Button>

              <Button primary onClick={() => dispatch(goToList(true))} 
                  className='list-count-btn'>View list</Button>
             
              </div>
 		</>);
}


export default Search;