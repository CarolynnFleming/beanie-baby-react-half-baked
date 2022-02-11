/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import { Component } from 'react/cjs/react.production.min';
import { getBeanieBabies } from './services/fetch-utils';

export default class BeanieBaby extends Component {
  async componentDidMount() {
    const beanieBaby = await getBeanieBabies();
    console.log(beanieBaby);
  }
  render() {
    const { beanieBaby } = this.props;
    return (
     
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // eslint-disable-next-line react/no-unescaped-entities
    // it should also render the beanie baby's image and show the beanie baby's name
      <Link to={`/detail/${beanieBaby.id}`}>
        <div className='beanie-baby'>
          <p>{beanieBaby.title}</p>
          <img className='beanie-img' src={beanieBaby.image}/>
        </div>
      </Link> 
 
    );
  }
}
