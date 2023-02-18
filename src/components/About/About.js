import React from 'react';
import './About.css';
import { Card, Feed, Icon } from 'semantic-ui-react'

const About = () => {
    return (
        <Card className='expert-card'>
            <Card.Content>
                <Card.Header>About</Card.Header>
            </Card.Content>
            <Card.Content>
                <Feed>
                    <Feed.Event>
                        <Feed.Content>
                            <Feed.Summary className='feed-summary'>
                                <Icon name='group'></Icon> 246 Experts
                            </Feed.Summary>
                        </Feed.Content>
                    </Feed.Event>

                    <Feed.Event>
                        <Feed.Content>
                            <Feed.Summary className='feed-summary'>
                                <Icon name='comments outline'></Icon> Questions and Answers
                            </Feed.Summary>
                        </Feed.Content>
                    </Feed.Event>

                    <Feed.Event>
                        <Feed.Content>
                            <Feed.Summary className='feed-summary'>
                                <Icon name='arrow up'></Icon> 50k Upvotes
                            </Feed.Summary>
                        </Feed.Content>
                    </Feed.Event>

                    <Feed.Event>
                        <Feed.Content>
                            <Feed.Summary className='feed-summary'>
                                <Icon name='bitcoin'></Icon> 145 Tokens Awarded
                            </Feed.Summary>
                        </Feed.Content>
                    </Feed.Event>
                </Feed>
            </Card.Content>
        </Card>
    );
};

export default About;
