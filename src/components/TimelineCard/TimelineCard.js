import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import format from 'date-fns/format'

import { useStyles } from './styled'
// import {  } from '../../assets/styles/colors'
import { currency } from '../../utils/formatters'

import asterisco from '../../assets/images/asterisco.png'
import bell from '../../assets/images/bell.png'
import people from '../../assets/images/people.png'

export default function TimeLineCard({details}) {
    
    const getStatusColor = () => {
        switch (details.status) {               
            case 'APPROVED':
                return '#03a046'
            case 'REPROVED':
                return '#d6342c'
            default:
                return '#053d4e'
        }
    }
    
    const getBackgroundStatusColor = () => {
        switch (details.status) {
            case 'APPROVED':
                return '#e6fff0'
            case 'REPROVED':
                return '#fbeaea'
            default:
                return '#f0f3f7'
        }
    }

    const getStatus = () => {
        switch (details.status) {
            case 'PENDING':
                return 'Pendente'
            case 'APPROVED':
                return 'Aprovado'
            case 'REPROVED':
                return 'Reprovado'
            default:
                return 
        }
    }

    const getIcon = () => {
        switch (details.cardType) {
            case 'EVALUATION':
                return people
            case 'EXPENSE':
                return bell
            default:
                return asterisco
        }
    }

    const getType = () => {
        switch (details.cardType) {
            case 'EVALUATION':
                return 'Aprovação da solicitação'
            case 'EXPENSE':
                return 'Hotel'
            case 'ACCOUNTABILITY_SUBMITTED':
                return 'Despesas enviadas'
            case 'ACCOUNTABILITY_CREATED':
                return 'Solicitação concluída'
            default:
                return 'Solicitação'
        }
    }

    const props = {
        color: getStatusColor(),
        backgroundColor: getBackgroundStatusColor(),
    }

	const classes = useStyles(props)

    const {
        currencyCode,
        currencySymbol,
        amountSpent,
        amountTotal,
        status,
        cardDate
    } = details

    const dateFormatted = new Date(cardDate)

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<Grid container>
					<Grid item xs={12} md={2}>
						<div className={classes.circle}>
                            <img src={getIcon()} alt='' style={{width: 60}}/>
                        </div>
						<p className={classes.date}>
                            {format(dateFormatted, 'dd/MM/yyyy')}
                        </p>
					</Grid>
					<Grid item xs={12} md={2} style={{margin: '10px auto'}}>
						<p className={classes.title}>Tipo</p>
						<p className={classes.description}>{getType()}</p>
						{/* <p className={classes.detail}>teste de valores a serem repassados</p> */}
					</Grid>
                    
                    <Grid item xs={12} md={2} style={{margin: '10px auto'}}>
                        {
                            currencyCode &&
                            <>
                                <p className={classes.title}>Valor</p>
                                <p className={classes.description}>{currency(currencyCode, currencySymbol, amountSpent)}</p>
                                <p className={classes.detail}>Valor da nota: {currency(currencyCode, currencySymbol, amountTotal)}</p>
                            </>
                        }
                    </Grid>
                    
                    <Grid item xs={12} md={2} style={{margin: '10px auto'}}>
                        {
                            status &&
                            <>
                                <p className={classes.title}>Status</p>
                                <div className={classes.status}>{getStatus()}</div>
                            </>
                        }
                    </Grid>
					<Grid item xs={12} md={2} style={{margin: '10px auto'}}>
						<p className={classes.title}>Tipo</p>
						<p className={classes.description}>Despesa</p>
						<p className={classes.detail}>teste de valores a serem repassados</p>
					</Grid>
				</Grid>
			</Paper>
		</div>
	)
}
