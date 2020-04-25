import React from 'react';
import Options from './Options'

function FeatureList(props) {

    const features = Object.keys(props.features)
        .map(key => {
            const options = props.features[key].map((item, index) => {

                const selectedClass = item.name === props.selected[key].name ? 'featured_selected' : '';
                const featureClass = 'feature_option ' + selectedClass;
                return (
                    <Options
                        item={item}
                        feature={key}
                        handleUpdate={props.handleUpdate}
                        featureClass={featureClass}
                      />
                )
            });

            return (
                <div className="feature" key={key}>
                    <div className="feature_name">{key}</div>
                    <ul className="feature_list">
                        {options}
                    </ul>
                </div>
            )
        });

        return features
}

export default FeatureList