import React from 'react'
import Button from '@material-ui/core/Button'
import { useStyles } from './styled'

export default function CustomButton(props) {

    const {label, img, propsStyle, action} = props

    const classes = useStyles(propsStyle)

    return (
        <Button variant="contained" className={classes.root} onClick={action} 
            color="primary" startIcon={img && <img src={img} alt='' style={{width: 25}} />}>
            {label}
        </Button>
    )
}
