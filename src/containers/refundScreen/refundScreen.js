import React, { useEffect, useState } from 'react'
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

import {getTimelineData} from '../../services/services'

const testPath = ['Painel', 'Solicitações', 'Solicitação']

const receiptsButtonProps = {
    color: colorLightGray2,
    backgroundColor: colorWhite,
    bgHover: colorLightBlue1
}

export default function RefundScreen () {

    const [showRegisterExpenses, setShowRegisterExpenses] = useState(false)
    const [timeLineData, setTimeLineData] = useState([])

    useEffect(() => {
        if (timeLineData.length === 0) {
            getTimelineData().then((response) => {
                setTimeLineData(response.content)
            })
        }
    }, [timeLineData])

    const renderCards = () => {

        if (timeLineData.length > 0) {
            return timeLineData.map((elem, key) => {
                return (
                    <TimeLineCard key={key} details={elem} />
                )
            })
        }
    }

    return (
        <Container maxWidth='xl'>
            <BreadcrumbTest arrayPath={testPath} />
            <Grid container spacing={1}>
                <Grid item xs={12} md={9}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Header />
                        </Grid>
                        {   !showRegisterExpenses &&
                            <Grid item xs={12} md={12} style={{textAlign: 'right'}}>
                                <CustomButton img={ticket2} 
                                    label={'Adicionar Despesa'} 
                                    propsStyle={receiptsButtonProps}
                                    action={() => setShowRegisterExpenses(true)} />
                            </Grid>
                        }
                        {
                            showRegisterExpenses &&
                            <Grid item xs={12} md={12}>
                                <RegisterExpenses close={() => setShowRegisterExpenses(false)}/>
                            </Grid>
                        }
                        <Grid item xs={12} md={12}>
                            {renderCards()}
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