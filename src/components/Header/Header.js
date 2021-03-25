import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Description from './Description'
import Analyst from './Analyst'
import Grid from '@material-ui/core/Grid'
import { useStyles } from './styled'

export default function Header() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.contentMargin}>
        <Grid container>
            <Grid item xs={12} md={12}>
                <h1 className={classes.title}>
                    Reembolso - Confraternização
                </h1>
            </Grid>
            <Grid item xs={12} md={6}>
                <Description />
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
