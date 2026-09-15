// src/App.tsx 
import styled from 'styled-components';
import PostItem from './components/PostItem';
import type { Post, Comment } from './types';
import CommentItem from './components/CommentItem';
import Button from './components/Button';
import { useState } from 'react';


const DUMMY: Post[] = [
  { id: 1, title: '첫 글', content: '반갑습니다', author: '동건' },
  { id: 2, title: '두번째 글', content: '나는야 TS 초고수', author: '선우(최)' },
  { id: 3, title: '세번째 글', content: '손효리 공부해', author: '김세진'},
];

const DUMMY_COMMENTS: Comment[] = [
  { id: 1, author: '세진', date: '2026-09-15', content: '왜또수요일이지'},
  { id: 2, author: '효리', date: '2026-09-15', content: '왜또수요일이지'},
];

const Title = styled.h1`
  color: #2f6feb;
`;

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [comment, setComment] = useState('');


  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  }

  return (
    <>
      <Title>🐘 TS 미니 게시판</Title>
      <input
        value={title}
        onChange={handleTitleChange}
        placeholder="제목을 입력하세요"
      />
      <p>입력 중: {title}</p>
      <textarea
        value={content}
        onChange={handleContentChange}
      />
      <p>textarea 입력 중인 내용: {content}</p>
      <Button label="확인" onClick={() => alert("버튼 클릭테스트!")} />
      <div>
        {DUMMY.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>

      <h3>💬 댓글</h3>
      <div>
        {DUMMY_COMMENTS.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>

      <input 
        placeholder='댓글을 입력하세요'
        value={comment}
        onChange={handleCommentChange}
      />
      <p>입력 중인 댓글: {comment}</p>
    </>
  );
}

export default App;