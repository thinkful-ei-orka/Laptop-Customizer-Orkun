import React from 'react';
import slugify from 'slugify';
import Parts from './Parts';
import Specs from './Specs';

export default function MainForm(props) {
   


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
            <Specs 
            itemHash={itemHash}
            feature={feature}
            selected={props.selected}
            updateFeature={(feature, newValue) => props.updateFeature(feature, newValue)}
            item={item}
            />
          );
        });
       
  
        return (
          <Parts
          key={featureHash}
          feature={feature}
          options={options}
          />
        );
      });
  
    return(
        <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
        </form>  
    )

}