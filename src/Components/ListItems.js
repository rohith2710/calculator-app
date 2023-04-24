import React from 'react';

import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';


const ListItems = (props) => {
    const {
        items,
        onOperationChange,
        onValueUpdate,
        onisEnabledChange,
        onDeleteRow,
    } = props;
    return (
        <div style={ { margin: '20px' } }>
            { items.map(({                operation, value, isEnabled,    id        }, index) => (
                <div
                    key={ id }>

                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={ operation }
                        onChange={ (e) => onOperationChange( e.target.value,id) }
                        style={ {
                            height: '36px',
                            margin: '15px',
                        } }>
                        <MenuItem value="+">+</MenuItem>
                        <MenuItem value="-">_</MenuItem>
                    </Select>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        type="number"
                        value={ value }
                        onChange={ (e) =>
                            onValueUpdate(index, parseInt(e.target.value))
                        }
                        disabled={ !isEnabled }
                        size="small"
                        style={ {
                            height: '36px',
                            margin: '15px',
                        } } />

                    <Button
                        variant="contained"
                        color="success"
                        onClick={ () => onisEnabledChange(id) }>
                        { isEnabled ? 'Disable' : 'Enable' }
                    </Button>
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={ () => onDeleteRow(id) }
                        style={{
                            marginLeft: '10px'
                        }}>
              Remove
                    </Button>
                </div>
            )) }

        </div>
    );
};

export default ListItems;