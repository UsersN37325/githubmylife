import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from './compare'

class App extends Component {


    state = {
        users:[],
        activate:false,

    }
    ToggleModal = ()=>{
        this.setState({
            activate:!this.state.activate
        })
    }
    componentDidMount() {
        const users = [
            {name:'John' , age:21 , favourity:'Footbal'},
            {name:'Sarah' , age:21 , favourity:'Footbal'},
            {name:'Sahara' , age:21 , favourity:'Footbal'}
        ]
        this.setState({
            users:users,
        })
    }


    render() {
        // const {Users}=this.props
        return (

            <div className={'container d-flex justify-content-center align-items-center'}>
                <div className="card">
                    <div className="card-body">
                        <h1>Experiment N1</h1>
                    </div>
                    <div className="card-body">
                        <button onClick={this.ToggleModal}>Kill</button>
                    </div>
                    <div className="card-footer">
                        {
                            this.state.activate ? <Modal users={this.state.users}/> : ''
                        }
                    </div>
                </div>



            </div>
        );
    }
}

export default App;


