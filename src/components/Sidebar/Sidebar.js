import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import arrowUp from '../../assets/images/arrowUp.png'
import arrowDown from '../../assets/images/arrowDown.png'

import { useStyles } from './styled'

export default function Sidebar() {
    const props = {
        color: '#053d4e',
        borderColor: '#6b7480',
        backgroundColor: '#f0f3f7'
    }

    const classes = useStyles(props)

	return (
        <Paper className={classes.paper}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Card className={classes.status}>
                        <p>Status</p>
                        <h3>Em preenchimento</h3>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Card>
                        <Grid container justify='center' alignItems='center'>
                            <Grid item xs={12} md={12}>
                                <p className={classes.balance}>Saldo</p>
                                <p className={classes.valueBalance}>BRL 1.147,13</p>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <div className={classes.blockDetails}>
                                    <div className={classes.inOutValues}>
                                        <img src={arrowUp} alt='' />
                                        <div>
                                            <p className={classes.inOutdetailsLabel}>Saldo</p>
                                            <p className={classes.inOutdetails}>BRL 1.147,13</p>
                                        </div>
                                    </div>
                                    <hr className={classes.verticalLine} />
                                    <div className={classes.inOutValues}>
                                        <img src={arrowDown} alt='' />
                                        <div>
                                            <p className={classes.inOutdetailsLabel}>Saldo</p>
                                            <p className={classes.inOutdetails}>BRL 1.147,13</p>
                                        </div>
                                    </div>
                                </div>   
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <div style={{padding: '5px 10px'}}>
                                    <p className={classes.extract}>Extrato</p>
                                    <hr className={classes.horizontalLine} />
                                    <Grid container>
                                        <Grid item xs={8}>
                                            <p className={classes.extractDescription}>Descrição</p>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <p className={classes.extractDescription}>Valor</p>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <p className={classes.extractDatail}>
                                                Despesas declaradas
                                            </p>
                                            <p className={classes.subtitleDatail}>
                                                Despesas declaradas pelo trooper
                                            </p>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <p className={classes.extractDatail}>Valor</p>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <p className={classes.extractDatail}>
                                                Despesas aprovadas
                                            </p>
                                            <p className={classes.subtitleDatail}>
                                                Despesas aprovadas pelo financeiro
                                            </p>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <p className={classes.extractDatail}>Valor</p>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <p className={classes.extractDatail}>
                                                Pagamento realizado
                                            </p>
                                            <p className={classes.subtitleDatail}>
                                                Pagamento realizado pelo financeiro
                                            </p>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <p className={classes.extractDatail}>Valor</p>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Paper>
	)
}
