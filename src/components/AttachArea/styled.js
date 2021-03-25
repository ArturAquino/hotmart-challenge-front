import { makeStyles } from '@material-ui/core/styles'
import { colorLightGray3, colorDarkGray3,colorDarkBlue2 } from '../../assets/styles/colors'

export const useStyles = makeStyles(() => ({
    paper: {
        color: colorDarkBlue2,
        backgroundColor: colorLightGray3,
        border: `1px solid ${colorDarkGray3}`,
    },
    description: {
        textAlign: 'center',
        fontSize: 14
    }
}))