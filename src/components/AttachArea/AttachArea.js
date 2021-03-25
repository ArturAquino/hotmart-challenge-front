import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import CardContent from '@material-ui/core/CardContent'
import filterIcon from '../../assets/images/filterIcon.png'

import {colorLightGray2, colorWhite, colorLightBlue1} from '../../assets/styles/colors'

import { CustomButton } from '../index'
import { useStyles } from './styled'

export default function AttachArea(props) {
	const classes = useStyles()

    const receiptsButtonProps = {
        color: colorLightGray2,
        backgroundColor: colorWhite,
        bgHover: colorLightBlue1
    }

    const { 
       file
    } = props

    const openDialog = () => {
        document.getElementById('button-file').click();
    }

	return (
		
        <Paper className={classes.paper}>
            <CardContent>
                <Grid container justify='center' alignItems='center'>
                        <p style={{fontWeight: 'bold'}}>Envie o comprovante</p>
                        <p className={classes.description}>
                            Você pode inserir arquivos nos formatos PNG,
                            JPG ou PDF. Tamanho Máx. 1MB
                        </p>
                        <input id='button-file' type='file' accept='.png, .jpg, .jpeg, .pdf'
                            style={{display: 'none'}} size='1000000'
                            onChange={event => console.log(event.target.files[0])}
                        />
                        <CustomButton label='Escolher arquivo' 
                            img={filterIcon} propsStyle={receiptsButtonProps} 
                            action={() => openDialog()}/>
                </Grid>
            </CardContent>
        </Paper>
	)
}
