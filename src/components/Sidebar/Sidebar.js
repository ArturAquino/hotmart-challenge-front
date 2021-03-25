import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import arrowUp from '../../assets/images/arrowUp.png'
import arrowDown from '../../assets/images/arrowDown.png'
import { getSidebarData } from '../../services/services'
import { currency } from '../../utils/formatters'

import { useStyles } from './styled'

export default function Sidebar() {
    const props = {
        color: '#053d4e',
        borderColor: '#6b7480',
        backgroundColor: '#f0f3f7'
    }

    const classes = useStyles(props)

    const [sidebarData, setSidebarData] = useState(null)

    useEffect(() => {
        if (!sidebarData) {
            getSidebarData().then((response) => {
                setSidebarData(response)
            })
        }
    })

    const renderExtract = () => {
        if(sidebarData && sidebarData.content.length > 0) {
            return sidebarData.content.map((elem, key) => {
                return (
                    <Grid key={key} container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Card className={`${elem.accountabilityStatus === 'OPEN' ? classes.status : classes.statusClose}`}>
                                <p>Status</p>
                                <h3 style={{marginTop: 0}}>
                                    {`${elem.accountabilityStatus === 'OPEN' ? 'Aguardando financeiro': 'Concluído'}`}
                                </h3>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Card style={{marginBottom: 16}}>
                                <Grid container justify='center' alignItems='center' spacing={2}>
                                    <Grid item xs={12} md={12}>
                                        <p className={classes.balance}>Saldo</p>
                                        <p className={classes.valueBalance}>
                                            {
                                                currency(elem.currency.code, elem.currency.symbol, elem.balance)
                                            }
                                        </p>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <div className={classes.blockDetails}>
                                            <div className={classes.inOutValues}>
                                                <img src={arrowUp} alt='' />
                                                <div>
                                                    <p className={classes.inOutdetailsLabel}>Gastou</p>
                                                    <p className={classes.inOutdetails}>
                                                        {currency(elem.currency.code, elem.currency.symbol, elem.declared)}
                                                </p>
                                                </div>
                                            </div>
                                            <hr className={classes.verticalLine} />
                                            <div className={classes.inOutValues}>
                                                <img src={arrowDown} alt='' />
                                                <div>
                                                    <p className={classes.inOutdetailsLabel}>Recebeu</p>
                                                    <p className={classes.inOutdetails}>
                                                        {currency(elem.currency.code, elem.currency.symbol, elem.received)}
                                                    </p>
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
                                                    <p className={classes.extractDatail}>
                                                        {currency(elem.currency.code, elem.currency.symbol, elem.declared)}
                                                    </p>
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
                                                    <p className={classes.extractDatail}>
                                                        {currency(elem.currency.code, elem.currency.symbol, elem.approved)}
                                                    </p>
                                                </Grid>
                                                {
                                                    elem.accountabilityStatus !== 'OPEN' &&
                                                    <>
                                                        <Grid item xs={8}>
                                                            <p className={classes.extractDatail}>
                                                                Pagamento realizado
                                                            </p>
                                                            <p className={classes.subtitleDatail}>
                                                                Pagamento realizado pelo financeiro
                                                            </p>
                                                        </Grid>
                                                    
                                                        <Grid item xs={4}>
                                                            <p className={classes.extractDatailReturned}>
                                                                {currency(elem.currency.code, elem.currency.symbol, elem.returned)}
                                                            </p>
                                                        </Grid>
                                                    </>
                                                }
                                            </Grid>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                )
            })
        }
    }

	return (
        <Paper className={classes.paper}>
            {renderExtract()}
        </Paper>
	)
}
