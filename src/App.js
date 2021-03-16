import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

//STEP 7: connect your components to the reducer to access state. 
import {connect} from 'react-redux'

const App = (props) => {
  

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

//STEP 9: connect mapStateToProps and then connect below.
const mapStateToProps = (state) =>{
  console.log(state.additionalFeatures)
  return{
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
  }
}

//STEP 8: connect the component at the export default. 
export default connect(mapStateToProps)(App);
