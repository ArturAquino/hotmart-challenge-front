import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { useStyles } from './styled'
import {  } from '../../assets/styles/colors'

import asterisco from '../../assets/images/asterisco.png'
import bell from '../../assets/images/bell.png'
import people from '../../assets/images/bell.png'

export default function TimeLineCard({details}) {
    
    // const getStatusColor = () => {
    //     switch (details.status) {
    //         case '':
    //             return ;
    //         default:
    //             return 
    //     }
    // }
    
    // const getBackgroundStatusColor = () => {
    //     switch (details.status) {
    //         case '':
    //             return ;
    //         default:
    //             return 
    //     }
    // }

    const getIcon = () => {
        // switch (details.cardType) {
        switch ('details.cardType') {
            case 'EVALUATION':
                return people
            case 'EXPENSE':
                return bell
            default:
                return asterisco
        }
    }

    // const props = {
    //     color: getStatusColor(),
    //     backgroundColor: getBackgroundStatusColor(),
    // }

	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<Grid container>
					<Grid item xs={12} md={2}>
						<div className={classes.circle}>
                            <img src={getIcon()} alt='' style={{width: 60}}/>
                        </div>
						<p className={classes.date}>Data aqui</p>
					</Grid>
					<Grid item xs={12} md={2} style={{margin: '10px auto'}}>
						<p className={classes.title}>Tipo</p>
						<p className={classes.description}>Despesa</p>
						<p className={classes.detail}>teste de valores a serem repassados</p>
					</Grid>
					<Grid item xs={12} md={2} style={{margin: '10px auto'}}>
						<p className={classes.title}>Valor</p>
						<p className={classes.description}>BRL 120,00</p>
						<p className={classes.detail}>Valor da nota: BRL 220,00</p>
					</Grid>
					<Grid item xs={12} md={2} style={{margin: '10px auto'}}>
						<p className={classes.title}>Status</p>
                        <div className={classes.status}/>
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
