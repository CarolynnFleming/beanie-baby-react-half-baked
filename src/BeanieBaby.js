/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';

export default function BeanieBaby({ beanieBaby }) {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // eslint-disable-next-line react/no-unescaped-entities
    // it should also render the beanie baby's image and show the beanie baby's name
    <Link to={`/detail/${beanieBaby.id}`}>
      <p>{beanieBaby.title}</p>
      <img src={beanieBaby.image}/>
    </Link> 
  
  );
}
