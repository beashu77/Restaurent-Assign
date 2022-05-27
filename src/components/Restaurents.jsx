import React from 'react';
import Restaurent from './Restaurent';
import Styles from '../components/restaurents.module.css';

const restaurents = (props) => {
  return (
    <div>restaurents
        <div className={Styles.container}>
            {/* {restaurents.map((restaurent)=>(
               <Restaurent key={restaurent.id}
               restaurent={restaurent}/>
            ))} */}

            {props.restaurents.map((restaurent)=>(

                <Restaurent key={restaurent.id}
                restaurent={restaurent} />
            ))}
        </div>
    </div>
  )
}

export default restaurents