import { makeStyles } from '@material-ui/core/styles';
import { 
    colorLightGray1, colorLightGray2,
    colorLightBlue1, colorDarkGray1,
    colorDarkBlue3, colorDarkBlue4,
    coolGray, colorDarkBlue1
} from '../../assets/styles/colors'

export const useStyles = makeStyles(() => ({
	paper: {
		// padding: theme.spacing(2),
		padding: '50px 16px',
		margin: '0 auto',
		maxWidth: '100%',
        height: '100%'
	},
    status: props =>({
        color: props.color,
        border: `1px solid ${props.borderColor}`,
        backgroundColor: props.backgroundColor,
        textAlign: 'center'
    }),
	image: {
		width: 128,
		height: 128,
	},
	img: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%',
	},
    title: {
        color: colorLightGray1,
        fontSize: 14,
        fontWeight: 'bold'
    },
    description: {
        color: colorDarkGray1,
        fontSize: 20,
        fontWeight: 'bold'
    },
    detail: {
        color: colorDarkGray1,
        fontSize: 14
    },
    balance: {
        color: colorLightGray2,
        textAlign: 'center',
        fontSize: 18
    },
    valueBalance: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        margin: 0,
        color: colorDarkBlue3
    },
    inOutValues: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '30px auto'
    },
    inOutdetails: {
        margin: 0,
        color: colorDarkBlue4
    },
    inOutdetailsLabel: {
        margin: 0,
        fontSize: 12,
        color: coolGray
    },
    blockDetails: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    verticalLine: {
        height: '40px',
        backgroundColor: colorLightBlue1,
        border: 'none',
        width: 2,
        borderRadius: 2,
        margin: 'auto 0'
    },
    horizontalLine: {
        width: 'inherit',
        backgroundColor: colorLightBlue1,
        border: 'none',
        height: 2,
        borderRadius: 2,
        margin: 'auto 0'
    },
    extract: {
        margin: '5px 0',
        color: colorDarkBlue1
    },
    extractDescription: {
        margin: '5px 0',
        fontSize: 12,
        color: colorDarkBlue3
    },
    extractDatail: {
        color: colorDarkBlue3,
        fontWeight: 'bold',
        marginBottom: 0
    },
    subtitleDatail: {
        margin: 0,
        color: coolGray,
        fontSize: 12,
        fontWeight: 'bold'
    }
}));