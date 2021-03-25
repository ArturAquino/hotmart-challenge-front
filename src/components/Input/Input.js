import React from 'react'
import { TextField } from '@material-ui/core'

export default function Input(props) {

    const { 
        name, label = '', value,
        error = null, onChange, placeholder
    } = props

    return (
        <TextField variant="outlined" label={label} style={{width: '100%'}}
            name={name} value={value} onChange={onChange} placeholder={placeholder}
            {...(error && {error:true, helperText:error})} />
    )
}
