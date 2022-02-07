/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';

export default function BeanieBaby({ beanieBaby }) {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <section>
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // eslint-disable-next-line react/no-unescaped-entities
    // it should also render the beanie baby's image and show the beanie baby's name
      {beanieBaby.map((baby, i) => <Link key={`${baby.title}-${i}`} to={`/detail/${baby.id}`}>
        <div>
          {baby.title}
          <img src={baby.image}/>
        </div>
      </Link>)}
    </section>
  );
}
