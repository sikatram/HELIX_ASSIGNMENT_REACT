import React, { useState } from "react";
import "./Question.css"
import { Card, Form, Icon, Button} from "semantic-ui-react";
import axios from "axios";

const Question = (props) => {
    const [title, setTitle] = useState("");
    const [question, setQuestion] = useState("");

    const handleSubmit = async (e) => {
        const data = {
            title: title,
            question: question
        };

        if (title.length <= 100 && question.length <= 1000){
            await axios.post("http://localhost:8000/add-question/", data);
            props.toggleAskQuestion()
        }
    };

    return (
        <Card className="question-card">
            <Card.Content>
                <Card.Header>New Question <Icon className="close-icon" link name="times circle outline" onClick={props.toggleAskQuestion}></Icon></Card.Header>
            </Card.Content>
            <Card.Content>
                <Form onSubmit={handleSubmit}>
                    <Form.Input required fluid label='Title' error={title.length > 100 ? 'Title exceeds 100 character limit' : null} placeholder='Enter the question title (100 character maximum)' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <Form.TextArea required label='Question' error={question.length > 1000 ? 'Question exceeds 1000 character limit' : null} placeholder='Write your question here (1000 character maximum)' onChange={(e) => setQuestion(e.target.value)} />
                    <Icon name='font' size='large' className="my-icon"></Icon>
                    <Icon name='image' size='large' className="my-icon"></Icon>
                    <Button type="submit" className="my-submit" floated="right">Post</Button>
                </Form>
            </Card.Content>
        </Card>
    );
};

export default Question;
