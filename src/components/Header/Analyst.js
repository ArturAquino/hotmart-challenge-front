import React from 'react'
import Grid from '@material-ui/core/Grid'
import ComboBox from '../Combobox/ComboBox'
import { useStyles } from './styled'

const analystName = [
	{ value: 'The Shawshank Redemption', label: 'The Shawshank Redemption' },
	{ value: 'The Godfather', label: 'The Godfather' },
	{ value: 'The Godfather: Part II', label: 'The Godfather: Part II' },
	{ value: 'The Dark Knight', label: 'The Dark Knight' },
	{ value: '12 Angry Men', label: '12 Angry Men' },
	{ value: "Schindler's List", label: "Schindler's List" },
	{ value: 'Pulp Fiction', label: 'Pulp Fiction' },
	{ value: 'The Lord', label: 'The Lord' }
]

export default function Analyst() {
	const classes = useStyles()

	return (
		<Grid container spacing={1}>
            <Grid item xs={12} md={12}>
                <p className={classes.fieldTitle}>Atribuir analista</p>
                <ComboBox options={analystName.sort()}/>
            </Grid>
            <Grid item xs={12} md={12}>
                <div>
                    <p className={classes.textLabelLeft}>
                        Centro de Custo
                    </p>
                    <p className={classes.textDescription} style={{margin: 0}}>
                        Centro de custo
                    </p>
                </div>
            </Grid>
        </Grid>
	)
}
