import React from 'react';

// const style= {
//     display: "flex",
//     justifyContent: "center",
// }

// class Page2 extends React.Component{
//     render(){
//         console.log(props);

//         return (
//             <div className="d-flex justify-content-center align-items-center " style={{height:"100vh"}}>
//                 <div className="card"  >
//                     <ul className="list-group list-group-flush" >
//                         <li className="list-group-item">Selected Fruit : </li>
//                         <li className="list-group-item">Fruit Description : </li>
//                         <li className="list-group-item">Added By : </li>
//                         <li className="list-group-item">Date Added : </li>
//                     </ul>
//                 </div>
//             </div>
//         )
//     }
// }

const Page2 = (props) => {
    console.log(props.ob.fruitSelected)
            return (
            <div className="d-flex justify-content-center align-items-center " style={{height:"100vh", backgroundColor:'rgb(211, 210, 210)'}}>
                <div className="card"  >
                    <ul className="list-group list-group-flush" >
                        <li className="list-group-item">Selected Fruit : {props.ob.fruitSelected}</li>
                        <li className="list-group-item">Fruit Description : {props.ob.fruitDescription} </li>
                        <li className="list-group-item">Added By : {props.ob.fruitAddedby} </li>
                        <li className="list-group-item">Date Added : {props.ob.fruitDate}</li>
                    </ul>
                </div>
            </div>
        )
}

export default Page2;