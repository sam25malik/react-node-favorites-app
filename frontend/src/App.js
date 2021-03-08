import React, {Component} from 'react';
import './App.css';
import Home from "./views/home/home";
import "semantic-ui-css/semantic.min.css";
import { ToastContainer } from 'react-toastify';

class App extends Component {
    render() {
        return (
          <div>
            <Home/>
            <ToastContainer />
        </div>
        );
    }
}

export default App;
