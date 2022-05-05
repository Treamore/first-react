import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { TransitionGroup } from 'react-transition-group';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) =>{
if (posts.length<1){
  return (<h1 style={{textAlign:'center'}}>No Posts!</h1> )
}
return (
    <div>
      <h1 style={{textAlign:'center'}}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) =>
        <CSSTransition
          key={post.id}
          timeout={500}
          classNames='post'>
          <PostItem remove={remove} number={index+1} post={post} />
          </CSSTransition>
        )}
      </TransitionGroup>
      
    </div>
);
};

export default PostList;