import React from 'react';
import Button from '@mui/material/Button';

const CustomPrimaryButton = ({ label, additionlStyles, disabled, onClick }) => {
    return (
        <Button
            variant="contained"
            sx={{
                bgcolor: '#5865f2',
                color: '#FFF',
                textTransform: 'none',
                fontSize: '16px',
                fontWeight: '500',
                width: '100%',
                height: '40px',
            }}
            style={additionlStyles ? additionlStyles : {}}
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </Button>
    );
};

export default CustomPrimaryButton;
