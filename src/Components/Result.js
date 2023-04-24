import React from 'react';


const Result = (props) => {
    const { finalresult } = props;
    return (
        <div>
Result :
            { finalresult }
        </div>
    );
};

export default Result;