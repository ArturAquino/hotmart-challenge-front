import { makeStyles } from '@material-ui/core/styles';
import { 
    colorLightGreen1, colorLightBlue3, colorWhite
} from '../../assets/styles/colors'

export const useStyles = makeStyles({
    root: {
        minWidth: 280,
        maxWidth: '100%',
        color: colorWhite,
        borderRadius: 12,
        margin: '25px auto 0',
        backgroundImage: `linear-gradient(to right, ${colorLightGreen1} 3%, ${colorLightBlue3})`
    },
    title: {
        textAlign: 'left',
        fontSize: 28,
        fontWeight: 'bold',
    },
    blocks: {
        display: 'flex',
        flexFlow: 'row wrap'
    },
    textLabel: props => ({
        fontSize: 16,
        textAlign: props.textAlign || 'right',
        marginRight: 20,
        width: 90,
    }),
    textDescription: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    lineBlock: {
        display: 'flex',
        flexDirection: 'row'
    },
    contentMargin: {
        margin: '0 18px'
    },
    verticalLine: {
        height: '50%',
        backgroundColor: colorWhite,
        border: 'none',
        width: 2,
        borderRadius: 2,
        margin: 'auto 0'
    },
    fieldTitle: {
        fontSize: 16,
        margin: '10px 0'
    },
    textLabelLeft: {
        fontSize: 16,
        marginBottom: 8
    }
})
