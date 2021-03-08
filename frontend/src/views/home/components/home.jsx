import React from "react";
import Search from './search';
import Results from './results';
import List from './list';
import Details from './details';
import SignUp from './sign-up';
import { useSelector } from 'react-redux'

/*Home component that has Search and Results Component*/
const Home = ({}) => {
    const {list_view,loggedin,gotodetails} = useSelector(state => state.data);

    if(gotodetails==true){
      return (<Details/>);
    }
    else if(loggedin==true){
      return (<>
      <center>
         {list_view ? (<List/>):
         (<>
         	<Search/>
         <Results/></>)}
      </center>
      </>)}
   else{
   	return (<SignUp/>)
   }
};

export default Home;