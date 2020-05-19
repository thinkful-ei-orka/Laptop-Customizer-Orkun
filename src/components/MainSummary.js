import React from 'react';
import Option from './Option'
import Total from './Total'

export default function MainSummary(props) {
   
      
    const total = Object.keys(props.selected).reduce(
        (acc, curr) => acc + props.selected[curr].cost,
        0
      );


    return(
        <section className="main_summary">
            <h2>Your cart</h2>
            <Option
            selected={props.selected}
            />
            <Total 
            total={total}
            />
        </section>
    )
}