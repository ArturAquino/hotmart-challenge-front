import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Description from './Description'
import Analyst from './Analyst'
import Grid from '@material-ui/core/Grid'
import { useStyles } from './styled'

import { getHeaderData } from '../../services/services'

export default function Header() {
    const classes = useStyles();

    const[headerData, setHeaderData] = useState(null)

    const renderType = () => {
        if (headerData) {
            switch (headerData.type) {
                case 'REFUND':
                    return 'Reembolso'
                default:
                    return ''
            }
        }
    }

    const renderPurpose = () => {
        if (headerData) {
            switch (headerData.purpose) {
                case 'FRATERNIZATION':
                    return 'Confraternização'
                default:
                    return ''
            }
        }
    }

    useEffect(() => {
        if (!headerData) {
            getHeaderData().then((response) => {
                setHeaderData(response)
            })
        }
    })

    const renderDescription = (headerData) => {
        
        if (headerData) {
            const dataSolicitation = {
                nameCollaborator: headerData.collaborator.name || '',
                emailCollaborator: headerData.collaborator.email || '',
                justification: headerData.justification || '',
                purpose: renderPurpose(headerData.purpose) || '',
                project: headerData.project.title || '',
                createdOn: new Date(headerData.createdOn) || '',
                amountPeople: headerData.accountabilityExtraInfo.amountPeople || '0',
                breakfast: (headerData.accountabilityExtraInfo.budgetForBreakfast || 'Não')
            }
            
            return <Description props={dataSolicitation}/>
        }
    }

    return (
        <Card className={classes.root}>
            <CardContent className={classes.contentMargin}>
                <Grid container justify='center' alignItems='center'>
                    <Grid item xs={12} md={12}>
                        <h1 className={classes.title}>
                            {`${renderType()} - ${renderPurpose()}`}
                        </h1>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {renderDescription(headerData)}
                    </Grid>
                    <Grid item xs={12} md={1}>
                        
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <hr className={classes.verticalLine} />
                        <Analyst />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
