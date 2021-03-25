import React from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import ptBrLocale from 'date-fns/locale/pt-BR'

export default function DatePickerCustom(props) {

    const { name, label = null, disableFuture = true, disablePast = false, value, onChange, error = null } = props

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBrLocale}>
            <KeyboardDatePicker autoOk name={name} variant="inline" inputVariant="outlined" label={label} 
                disableFuture={disableFuture} disablePast={disablePast} format="dd/MM/yyyy" value={value}
                {...(error && {error:true, helperText:error})} onChange={onChange} />
        </MuiPickersUtilsProvider>
    )
}
