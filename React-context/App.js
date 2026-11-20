import React, { Component } from 'react';
import './App.css';

import ComponentA from './components/ComponentA';
import { UserProvider } from './userContext';

class App extends Component {
    render() {
        return (
            <div className="App">
                <UserProvider value="Irfan">
                    <ComponentA />
                </UserProvider>
            </div>
        );
    }
}

export default App;