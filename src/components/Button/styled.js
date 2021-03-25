import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: props => ({
        color: props.color,
        backgroundColor: props.backgroundColor,
        border: `1px solid ${props.borderColor || props.color}`,
        '&:hover': {
            backgroundColor: props.bgHover,
        },
        fontSize: 16,
        margin: theme.spacing(1),
        minWidth: '120px'
    })
}))