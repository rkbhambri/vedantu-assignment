import React from 'react';

const Repository = (props) => {
    return (
        <div className="repository">
            <div className="repository-name">{props.repository.name}</div>
            <div className="languages-used">{props.repository.language}</div>
        </div>
    );
};
export default Repository;

