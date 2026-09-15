import styled from 'styled-components';
import type { Comment } from '../types';

interface CommentItemProps {
    comment: Comment;
}

function CommentItem({ comment }: CommentItemProps) {
    return (
        <CommentContainer>
            <CommentHeader>
                <Author>{comment.author}</Author>
                <Date>{comment.date}</Date>
            </CommentHeader>
            <Content>{comment.content}</Content>
        </CommentContainer>
    )
}

const CommentContainer = styled.div`
    padding: 10px;
    border-left: 4px solid #b1cbff;
    background-color: #eaeff8;
    margin-bottom: 10px;
`;

const CommentHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;
`;

const Author = styled.h3`
    font-size: 16px;
    color: black;
    margin: 0;
`;

const Date = styled.p`
    font-size: 14px;
    color: gray;
    margin: 0;
`;

const Content = styled.p`
    font-size: 16px;
    color: black;
    margin: 10px 0;
 `;

export default CommentItem;