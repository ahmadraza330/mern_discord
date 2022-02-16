import React from 'react'
import {Typography} from '@mui/material'

const RegisterPageHeader = () => {
  return (
      <>
          <Typography variant="h5" sx={{ color: 'white' }}>
             Need an account?
          </Typography>
          <Typography sx={{ color: '#b9bbbe' }}>
              We are happy that you are with us.
          </Typography>
      </>
  );
}

export default RegisterPageHeader;