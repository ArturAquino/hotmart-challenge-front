import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import { 
    BreadcrumbTest, Header, Sidebar,
    TimeLineCard, CustomButton
} from '../../components/index'
import RegisterExpenses from '../registerExpenses/registerExpenses'
import { 
    colorLightGray2, colorWhite, colorLightBlue1
} from '../../assets/styles/colors'
import ticket2 from '../../assets/images/ticket2.png'

const testPath = ['Painel', 'Solicitações', 'Solicitação']

export default function RefundScreen () {
    const receiptsButtonProps = {
        color: colorLightGray2,
        backgroundColor: colorWhite,
        bgHover: colorLightBlue1
    }


    return (
        <Container maxWidth='xl'>
            <BreadcrumbTest arrayPath={testPath} />
            <Grid container spacing={1}>
                <Grid item xs={12} md={9}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={12}>
                            <Header />
                        </Grid>
                        <Grid item xs={12} md={12} style={{textAlign: 'right'}}>
                            <CustomButton img={ticket2} 
                                label={'Adicionar Despesa'} 
                                propsStyle={receiptsButtonProps}
                                action={() => console.log('teste de ação')} />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <RegisterExpenses />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TimeLineCard />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Sidebar />
                </Grid>
            </Grid>
        </Container>
    )
}