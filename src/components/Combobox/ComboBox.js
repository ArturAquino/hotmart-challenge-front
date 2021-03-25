import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

import { useStyles } from './styled'

export default function ComboBox(props) {
	const classes = useStyles()

    const { 
        name, label, 
        value, error=null,
        onChange, options,
        placeholder
    } = props;

	return (
		
        <FormControl variant="outlined" {...(error && {error:true})} className={classes.formControl}>
            <Select className={classes.selectBox} label={label}
                name={name} value={value} onChange={onChange}>
                <MenuItem value='Selecionar' disabled>{placeholder}</MenuItem>
                {
					options.map((option, key) => {
						return <MenuItem key={key} value={option.value}>{option.label}</MenuItem>
					})
				}
            </Select>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
	)
}
