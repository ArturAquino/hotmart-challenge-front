import { makeStyles } from '@material-ui/core/styles';
import { 
    colorLightGray1, colorDarkGray1,
    colorLightGreen2
} from '../../assets/styles/colors'

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		'& p': {
			margin: 0
		}
	},
	paper: {
		padding: theme.spacing(2),
		margin: '15px auto',
		maxWidth: '100%',
	},
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
    circle: {
        backgroundColor: colorLightGreen2,
        height: 60,
        borderRadius: '50%',
        width: 60,
        margin: '0 auto'
    },
    date: {
        color: colorDarkGray1,
        textAlign: 'center'
    }
}));