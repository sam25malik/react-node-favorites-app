import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import {Button, Form } from "semantic-ui-react";
import {signUp,signIn,setEmail,setPassword} from '../actions/index';

const SignUp = ({}) => {
    	const {results,list,email,password} = useSelector(state => state.data);
        const dispatch = useDispatch();
          
        return(<div className="container">
            <div className="textStyle">
            <center>
            <h2>Sign Up/Sign In</h2>
          		<Form style={{width:'300px'}}>
			    <Form.Field>
			      <label>Enter Email</label>
			      <input value={email} placeholder='Email' onChange={(event) => dispatch(setEmail(event.target.value))}/>
			    </Form.Field>
			    <Form.Field>
			      <label>Enter Password</label>
			      <input value={password} placeholder='Password' onChange={(event) => dispatch(setPassword(event.target.value))}/>
			    </Form.Field>
			    <Button  className="btn-list-details" type='submit' onClick={() => dispatch(signUp())}>Sign Up</Button>
			   	<Button  className="btn-list-details" type='submit' onClick={() => dispatch(signIn())}>Sign In</Button>
			  </Form></center></div></div>);
}
               
export default SignUp;