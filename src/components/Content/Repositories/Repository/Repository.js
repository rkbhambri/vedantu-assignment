import React from 'react';
import { convertDateFormat } from '../../../../helpers/miscellenous';

const Repository = (props) => {
    return (
        <div className="repository">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="repository-name">{props.repository.name}</div>
                <button className="star">Star</button>
            </div>
            <div className="repository-details">
                {
                    props.repository.language &&
                    <div className="languages-used">{props.repository.language}</div>
                }
                <div className="repo-lastUpdated mt-4">
                    {"Updated on  " + convertDateFormat(props.repository.pushed_at)}
                </div>
            </div>
        </div>
    );
};

export default Repository;
