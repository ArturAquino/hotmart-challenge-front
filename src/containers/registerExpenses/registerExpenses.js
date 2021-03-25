import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import CardContent from '@material-ui/core/CardContent'
import { ComboBox, Input, DatePickerCustom, AttachArea, CustomButton } from '../../components/index'
import { useStyles } from './styled'
import { sendExpenseData } from '../../services/services'

import { expenseCodes, currencyCodeData } from '../../utils/mockData'

import { 
    colorLightGray2, colorWhite,
    colorLightBlue2, colorLightBlue1
} from '../../assets/styles/colors'

export default function RegisterExpenses({close}) {

//     {
//    expenseTypeCode: 'hotel-fee', // 'hotel-fee', 'food' or 'transport'
//    currencyCode: 'BRL',  // 'BRL', 'USD' or 'MXN'
//    amountSpent: 13.00, // Valor a ser considerado
//    amountTotal: 71.00, // Valor total da nota/cupom
//    notes: 'Descrição da despesa',
//    resourceUrl: file, // Arquivo do comprovante (Tamanho máximo: 1MB)
//    cardDate: 1585710000000 // Timestamp da data
// }

    const cancelButtonProps = {
        color: colorLightGray2,
        backgroundColor: colorWhite,
        bgHover: colorLightBlue1
    }

    const saveButtonProps = {
        color: colorWhite,
        backgroundColor: colorLightBlue2,
        borderColor: colorLightBlue2,
        bgHover: '#73cdcf'
    }

    const verifyDate = () => {
        if (!cardDate) {
            return 'Campo obrigatório'
        }
    }

    const [expenseTypeCode, setExpenseTypeCode] = useState('')
    const [currencyCode, setCurrencyCode] = useState('')
    const [amountTotal, setAmountTotal] = useState(null)
    const [amountSpent, setAmountSpent] = useState(null)
    const [notes, setNotes] = useState(null)
    const [resourceUrl, setResourceUrl] = useState(null)
    const [cardDate, setCardDate] = useState(new Date())

	const classes = useStyles()

    const sendExpense = () => {
        const body = {
            expenseTypeCode,
            currencyCode,
            amountTotal,
            amountSpent,
            notes,
            resourceUrl,
            cardDate
        }

        if (expenseTypeCode !== '' && currencyCode !== '' &&
            amountTotal !== null && amountSpent !== null &&
            notes !== null && resourceUrl && cardDate) {

            sendExpenseData(body).then((response) => {
                console.log('teste', response)
            })
        }
    }

    const fieldValues = () => {
        return (
            currencyCode && 
            <>          
                <Grid item xs={12} md={6}>
                    <p className={classes.label}>Valor total da nota/cupom*</p>
                    <Input name='amountTotal' value={amountTotal} 
                        error={amountTotal === '' ? 'Campo obrigatório' : '' }
                        onChange={(event) => setAmountTotal(event.target.value)} 
                        placeholder={'Valor total da nota/cupom'} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <p className={classes.label}>Valor a ser considerado*</p>
                    <Input name='amountSpent' value={amountSpent} 
                        error={amountSpent === '' ? 'Campo obrigatório' : '' }
                        onChange={(event) => setAmountSpent(event.target.value)}
                        placeholder={'Valor a ser considerado'} />
                </Grid>
            </>
        )
    }

	return (
        <Paper>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h2>Adicionar Despesa</h2>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <AttachArea attach={setResourceUrl}/>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <p className={classes.label}>Tipo*</p>
                                <ComboBox name='expenseType' value={expenseTypeCode} 
                                    error={expenseTypeCode === '' ? 'Campo obrigatório' : ''} 
                                    onChange={(event) => setExpenseTypeCode(event.target.value)}
                                    options={expenseCodes} placeholder={'Tipo'} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <p className={classes.label}>Moeda*</p>
                                <ComboBox name='expenseType' value={currencyCode} 
                                    error={currencyCode === '' ? 'Campo obrigatório' : ''}
                                    onChange={(event) => setCurrencyCode(event.target.value)}
                                    options={currencyCodeData} placeholder={'Moeda'} />
                            </Grid>
                            
                            { fieldValues() }
                                
                            <Grid item xs={12}>
                                <p className={classes.label}>Descrição da despesa*</p>
                                <Input name='notes' value={notes} 
                                    error={notes === '' ? 'Campo obrigatório' : '' }
                                    onChange={(event) => setNotes(event.target.value)}
                                    placeholder={'Descrição da despesa'} />
                            </Grid>
                            <Grid item xs={12} style={{textAlign: 'center'}}>
                                <p className={classes.label}>Data do comprovante*</p>
                                <DatePickerCustom name='cardDate' value={cardDate} 
                                    error={verifyDate()}
                                    onChange={(event) => setCardDate(event)} />
                            </Grid>
                        </Grid>   
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justify='flex-end' alignItems='center' spacing={1}>
                            <Grid item xs={6} md={2}>
                                <CustomButton label='Cancelar'
                                    propsStyle={cancelButtonProps} action={close}/>
                            </Grid>
                            <Grid item xs={6} md={2}>
                                <CustomButton label='Salvar' propsStyle={saveButtonProps} action={sendExpense}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Paper>
	)
}
