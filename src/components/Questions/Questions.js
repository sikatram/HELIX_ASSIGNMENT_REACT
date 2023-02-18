import React, { useState, useEffect} from "react";
import { Comment, Divider, Card} from 'semantic-ui-react'
import './Questions.css'
import profilePic from '../../assets/profile_picture.png'

const Questions = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await fetch("http://127.0.0.1:8000/get-questions/");
            const data = await response.json();

            setQuestions(data.questions.reverse());
        };
        fetchQuestions();
    }, []);

    return (
        <div>
            <Comment.Group className="question-comments">
            {questions.map((question) => (
                <Card className="questions-card">
                <Comment key={question.id}>
                    <h3>{question.title}</h3>
                        <Comment.Text>
                            {question.question}
                        </Comment.Text>
                        <Divider />
                        <h5>Asked By: </h5>
                    <Comment.Avatar as='a' src={profilePic} />
                    <Comment.Content>
                            <Comment.Author className="author-title">Pseudo Near Expert</Comment.Author>
                        <Comment.Metadata>
                            <div>2 Answers, 1 Question</div>
                        </Comment.Metadata>

                    </Comment.Content>
                </Comment>
                </Card>
            ))}
            </Comment.Group>
        </div>
    );
};

export default Questions;
