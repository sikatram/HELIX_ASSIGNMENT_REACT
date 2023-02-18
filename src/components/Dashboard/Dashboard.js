import React, { useState } from "react";
import { Container, Grid, Header, Segment, Icon, Button } from 'semantic-ui-react'
import Question from '../Question/Question';
import Questions from '../Questions/Questions';
import About from '../About/About';
import TopExperts from '../TopExperts/TopExperts';
import './Dashboard.css'
import logo from '../../assets/logo.png'
import {Image} from 'semantic-ui-react'

const Dashboard = () => {
    const [askQuestion, setAskQuestion] = useState(false);

    const toggleAskQuestion = async (e) => {
        setAskQuestion(!askQuestion);
    };

    return (
        <Container className='dashboard-container'>
            <Button onClick={toggleAskQuestion} size={'small'} className="ask-button">Ask a question</Button>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Segment className='dashboard-segment'>
                            <Header as={'h1'} className='main-header'><Image src={logo} className='logo'></Image>Near Protocol</Header>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column className={askQuestion && 'question-column'} width={12}>
                        {askQuestion ? <Question toggleAskQuestion={toggleAskQuestion} /> : <Questions />}
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Grid.Row>
                            <About />
                        </Grid.Row>
                        <Grid.Row>
                            <TopExperts />
                        </Grid.Row>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default Dashboard