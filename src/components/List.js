import React from "react";
import './List.css';

class List extends React.Component{

    constructor(props){
        super(props)
        this.state = { FruitName:'', FruitDesc:'', Name:''}
    }

    onSubmitChange = (event) =>{
        event.preventDefault();
        //console.log(this.state.FruitAdded);
        // const Fruit = document.getElementById("mySelect").value;
        //const A = [FruitSelected ,this.state.FruitName,this.state.FruitDesc];
        //console.log(this.state.Name);
        const Date = document.getElementById("Date").value;
        //console.log(Date);
        const submitack = document.querySelector('.submit1');
        submitack.innerHTML="Submitted";
        submitack.style={}
        
        const object = {
            fruitSelected: this.state.Name,
            fruitDescription: this.state.FruitDesc,
            fruitAddedby: this.state.FruitName,
            fruitDate: Date
        }
        this.props.onSearchSubmit(object);
        //this.props.onSearchSubmit(this.state.FruitDesc);
    }


    render(){
        return (
            <div >
            <form className="listlayout" onSubmit={this.onSubmitChange}>
            <div className="leftList">
                <div className="fruitName-1">
                    <label>Fruit Name </label>
                    <select id="mySelect" name="Fruit Name" onChange={e => this.setState({Name: e.target.value})} >
                    <option >Apples</option>
                    <option >Oranges</option>
                    <option >Banana</option>
                    </select>
                    
                </div>
                <hr style={{margin :'5px'}}/>
                <div className="form-group fruitName-1">
                    <label htmlFor="Fruit-Description">Fruit Descripton</label>
                    <textarea 
                    className="form-control" 
                    id="Fruit-Description" 
                    rows="3" style={{width:"80%"}}
                    type="text"
                    value={this.state.FruitDesc}
                    onChange={ e => this.setState({FruitDesc: e.target.value}) }
                    />
                </div>
            </div>
            <div className="RightList">
                <div className="fruitName-2">
                <label htmlFor="Fruit-Selected">Fruit Selected &nbsp;</label>
                <input readOnly="readOnly"
                value={this.state.Name}
                />
                </div>
                <div className="fruitName-2">
                    <label htmlFor="Fruit-Selected" >Added By &nbsp; &nbsp; &nbsp; &nbsp;</label>
                    <input 
                        type="text"
                        value={this.state.FruitName}
                        onChange={ e => this.setState({FruitName: e.target.value}) }
                    />
                </div>
                <div className="fruitName-2">
                    <label htmlFor="Fruit-Selected">Date Added &nbsp; &nbsp;</label>
                    <input type="date" id="Date"></input>
                </div>
                <div className="fruitName-23">
                    <button type="submit" className="btn btn-warning  submit1"  onClick={this.onClickhandle} >Submit</button>
                </div>
            </div>
            </form>
            </div>
        )
    }
}

export default List;

