import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import CardContent from '@material-ui/core/CardContent'
import filterIcon from '../../assets/images/filterIcon.png'

import {colorLightGray2, colorWhite, colorLightBlue1} from '../../assets/styles/colors'

import { CustomButton } from '../index'
import { useStyles } from './styled'

const receiptsButtonProps = {
    color: colorLightGray2,
    backgroundColor: colorWhite,
    bgHover: colorLightBlue1
}

export default function AttachArea({attach}) {
	const classes = useStyles()

    const[file, setFile] = useState(null)

    const openDialog = () => {
        document.getElementById('button-file').click();
    }

    const attachFile = (file) => {
        if (Number(file.size) > 1000000) {
            alert('Tamanho de arquivo superior a 1MB');
            return
        } else {
            let reader = new FileReader()
            setFile(file)
            attach(reader.readAsText(file))
        }
    }

	return (
		
        <Paper className={classes.paper}>
            <CardContent>
                <Grid container justify='center' alignItems='center'>
                    <p style={{fontWeight: 'bold'}}>Envie o comprovante</p>
                    <Grid item xs={12}>
                        <p className={classes.description}>
                            {
                                (file && file.name) || `Você pode inserir arquivos nos formatos PNG,
                                JPG ou PDF. Tamanho Máx. 1MB`
                            }
                        </p>
                    </Grid>
                    <input id='button-file' type='file' accept='.png, .jpg, .jpeg, .pdf'
                        style={{display: 'none'}} size='1000000'
                        onChange={event => attachFile(event.target.files[0])}
                    />
                    <CustomButton label='Escolher arquivo' 
                        img={filterIcon} propsStyle={receiptsButtonProps} 
                        action={() => openDialog()}/>
                </Grid>
            </CardContent>
        </Paper>
	)
}
