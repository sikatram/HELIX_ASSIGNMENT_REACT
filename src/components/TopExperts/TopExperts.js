import React from 'react';
import './TopExperts.css';
import { Card, Feed, Header, Icon, Image} from 'semantic-ui-react'
import profilePic from '../../assets/profile_picture.png'
import upArrow from '../../assets/up_arrow_filled_in.png'

const TopExperts = () => {
    return (
        <Card className='expert-card'>
            <Card.Content>
                <Card.Header>Top Experts</Card.Header>
            </Card.Content>
            <Card.Content>
                <Feed>
                    <Feed.Event>
                        <Feed.Label image={profilePic} />
                        <Feed.Content>
                            <Feed.Label content={<Header className='expert-header'>Pseudo Near Expert</Header>} />
                            <Feed.Date>
                                47 <Image src={upArrow} className='up-arrow'></Image> collected
                            </Feed.Date>
                        </Feed.Content>
                    </Feed.Event>

                    <Feed.Event>
                        <Feed.Label image={profilePic} />
                        <Feed.Content>
                            <Feed.Label content={<Header className='expert-header'>Near Expert</Header>} />
                            <Feed.Date>
                                47 <Image src={upArrow} className='up-arrow'></Image> collected
                            </Feed.Date>
                        </Feed.Content>
                    </Feed.Event>

                    <Feed.Event>
                        <Feed.Label image={profilePic} />
                        <Feed.Content>
                            <Feed.Label content={<Header className='expert-header'>Bitcoin Maxi</Header>} />
                            <Feed.Date>
                                47 <Image src={upArrow} className='up-arrow'></Image> collected
                            </Feed.Date>
                        </Feed.Content>
                    </Feed.Event>
                    <Feed.Event>
                        <Feed.Label image={profilePic} />
                        <Feed.Content>
                            <Feed.Label content={<Header className='expert-header'>Ethereum Maxi</Header>} />
                            <Feed.Date>
                                47 <Image src={upArrow} className='up-arrow'></Image> collected
                            </Feed.Date>
                        </Feed.Content>
                    </Feed.Event>
                </Feed>
            </Card.Content>
        </Card>
    );
};

export default TopExperts;
