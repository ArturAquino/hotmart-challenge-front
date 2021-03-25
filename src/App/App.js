import './App.css';
import Container from '@material-ui/core/Container'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import RefundScreen from '../containers/refundScreen/refundScreen'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Nunito Sans, Roboto, sans-serif'
  }
});


function App() {
	return (
        <Container maxWidth="xl">
            {/* <div className="App"> */}
                <MuiThemeProvider theme={theme}>
                    <RefundScreen />
                </MuiThemeProvider>
            {/* </div> */}
        </Container>
	);
}

export default App;
