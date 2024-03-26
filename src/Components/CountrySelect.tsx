import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { countries } from '../constants/countries'

export interface CountrySelectProps {
  handleChangeLocation: (event: React.ChangeEvent<any>) => void
  setLocation: React.Dispatch<string>
}

const CountrySelect: React.FC<CountrySelectProps> = ({
  handleChangeLocation,
  setLocation,
}) => {
  return (
    <Autocomplete
      defaultValue={countries[0]}
      onChange={(event, value) => {
        setLocation(value?.label || '')
        handleChangeLocation(event)
      }}
      id="country-select-demo"
      sx={{ width: 300 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search City"
          className="border outline-white border-white text-blue-500 placeholder-red-100 focus:outline-none focus:border-blue-500"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  )
}

export default CountrySelect
