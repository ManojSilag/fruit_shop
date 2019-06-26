import React from 'react';
import Welcome from './Welcome';
import Page1 from './Page1';
import Page2 from './Page2';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { data:'' };
    }

    onFormSubmit=(term)=>{
        console.log(term);
        this.setState({data: term})
        console.log(this.state.data);
    }


    render(){
        return (
            <Router>
            <Route path="/" exact component={Welcome}/>
            <Route path="/page1" render={(props) => <Page1 {...props} onFormSubmit={this.onFormSubmit} />}/>
            <Route path="/page2" exact render={(props) => <Page2 {...props} ob={this.state.data} />}/>
            </Router>
        );
    }
}

export default App;

// <Page1 onFormSubmit={this.onFormSubmit} />
// <Page2 ob={this.state.data}/>

// <Route path="/page1" render={(props) => <Page1 {...props} onFormSubmit={this.onFormSubmit} />}/>
// <Route path="/page2" render={(props) => <Page2 {...props} ob={this.state.data} />}/>