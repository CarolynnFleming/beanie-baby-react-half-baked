import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Component } from 'react/cjs/react.production.min';
import { getSingleBeanie } from './services/fetch-utils';

export default class BeanieDetail extends Component() {
  // you'll need to track the current beanieBaby in state
  // you'll need to get the route param using the appropriate react router hook
  constructor(){
  
    super();

    this.state = {
      beanieBaby,
      __stateBeanieBaby: [],
      params,
      __useParams()
    }
  };

  async componentDidMount() {
    const beanieBaby = await getSingleBeanie(params.id);

    console.log(beanieBaby);

    this.setState({ __stateBeanieBaby: beanieBaby, params });
  }
 // note that you'll want the id from the url in the dependency array because you want the useEffect callback to get called every time the url changes 

  render() {
    const { beanieBaby } = this.props;
    const { params } = this.params;

    return (
      <>
        {/* Feel free to uncomment and use the below code--but you'll need to figure out how to keep it from blowing up on load */}
      
        <Link to='/'>Home</Link>
        <div className='beanie-detail'>
          <div className='beanie-data'>
            <p>{beanieBaby.animal}</p>
            <p>{beanieBaby.title}</p>
            <p>Zodiac: {beanieBaby.astroSign}</p>
            <p> Born on {beanieBaby.birthday}</p>
            <img className='beanie-img' src={beanieBaby.image}/>
            <p>Color: {beanieBaby.color}</p>
            <p>Release Date: {beanieBaby.releaseDate}</p>
            <p>Retirement Date: {beanieBaby.retirementDate}</p>

            <p>Size: {beanieBaby.size}</p>
            <p>Theme: {beanieBaby.theme}</p>
            <p>Sub-Theme: {beanieBaby.subtheme}</p>
            <p>Style Number: {beanieBaby.styleNumber}</p>
            <p>Swing Tag Generation: {beanieBaby.swingTagGeneration}</p>
            <p>Tush Tag Generation: {beanieBaby.tushTagGeneration}</p>
          </div>
        </div> 
      </>
    );

  }
}