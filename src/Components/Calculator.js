import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import AddRow from './AddRow';
import ListItems from './ListItems';
import Result from './Result';

const Calculator = () => {
    const [
        listItems,
        setListItems,
    ] = useState([
        {
            operation: '+',
            value: 0,
            isEnabled: true,
            id: Date.now(),
        },
    ]);

    const handleAddRow = () => {
        setListItems([
            ...listItems,
            {
                operation: '+',
                value: 0,
                isEnabled: true,
                id: Date.now(),
            },
        ]);
    };

    const handleOperationChange = ( operation, id) => {
        const newListItems = [ ...listItems ];
        const index = listItems.findIndex((item)=> item.id === id);
        newListItems[index].operation = operation;
        setListItems(newListItems);
    };
    const handleDeleteRow = (id) => {
        setListItems(listItems.filter((item) => item.id !== id));
    };

    const handleUpdateValue = (index, value) => {
        const newListItems = [ ...listItems ];
        newListItems[index].value = value;
        setListItems(newListItems);
    };

    const handleisEnabledChange = (id) => {
        const newListItems = [ ...listItems ];
        const index = listItems.findIndex((item)=> item.id === id);
        newListItems[index].isEnabled = !newListItems[index].isEnabled;
        setListItems(newListItems);
    };
    const result = listItems.reduce(
        (acc, {            operation, value, isEnabled,        }) =>
            isEnabled ? (operation === '+' ? acc + value : acc - value) : acc,
        0
    );
    return (
        <div>
            <Typography variant="h2" gutterBottom>
        Calculator App
      </Typography>
            <AddRow onAddRowClick={ handleAddRow } />
            <ListItems
                items={ listItems }
                onOperationChange={ handleOperationChange }
                onValueUpdate={ handleUpdateValue }
                onisEnabledChange={ handleisEnabledChange }
                onDeleteRow={ handleDeleteRow } />
            <Result finalresult={ result } />

        </div>
    );
};

export default Calculator;