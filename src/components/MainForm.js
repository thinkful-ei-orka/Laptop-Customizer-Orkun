import React from 'react';
import slugify from 'slugify';

export default function MainForm(props) {
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });
      


    const features = Object.keys(props.store).map((feature, idx) => {
        // console.log(feature)
       // feature is each key in FEATURES (Processor, Operating System, Video Card, Display)
       // idx is index of each key in FEATURES (1,2,3,4)
  
        const featureHash = feature + '-' + idx;
        // console.log(featureHash)
        // featureHash is (Processor-0, OS-1, Video Card-2, Display3)
  
        const options = props.store[feature].map(item => {
          // console.log(feature)
          // console.log(this.props.features[feature]) /*outputs each key(arrays) in FEATURES twice*/
          // console.log(item) /*outputs each item of each key in FEATURES */
          const itemHash = slugify(JSON.stringify(item));
          // console.log(itemHash) /*stringifies each item(still in key:value pairs) */
          return (
            <div key={itemHash} className="feature__item">
              <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(feature)}
                checked={item.name === props.selected[feature].name}
                onChange={e => props.updateFeature(feature, item)}
              />
              <label htmlFor={itemHash} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
              </label>
            </div>
          );
        });
       
  
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            {options}
          </fieldset>
        );
      });
  
    return(
        <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
        </form>  
    )

}