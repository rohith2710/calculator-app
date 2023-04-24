import React from 'react';
import Button from '@mui/material/Button';

const AddRow = (props) => {
    const { onAddRowClick } = props;
    return (
        <div style={ { margin: '20px' } }>
            <Button
                variant="contained"
                onClick={ onAddRowClick }>
Add Row
            </Button>
        </div>
    );
};

export default AddRow;