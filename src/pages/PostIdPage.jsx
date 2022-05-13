import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import "../styles/PostIdPage.css";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching( async() => {
        const response= await PostService.getById(params.id)
        setPost (response.data); 
    });

    const [fetchCommentsById, isCommentLoading, commentError] = useFetching( async() => {
        const commentsResponse= await PostService.commentsById(params.id)
        setComments(commentsResponse.data); 
    });

    useEffect( () => {
        fetchPostById();
    }, [params.id]);

    useEffect( () => {
        fetchCommentsById();
    }, [params.id]);

    console.log(comments);

    return (
        <div>
            <div>{isLoading 
                ? <Loader/>
                :   <div className="PostIdPage">
                    <h1 className="inf">{post.title}</h1>
                    <p className="inf">{post.body}</p>
                    </div> } 
            </div>
            <div className="commentsBoard">
                <h1 style={{paddingTop:"10px", textAlign:"center"}}>Comments</h1>
                {isCommentLoading
                ? <Loader/>
                :comments.map((comment) =>
                    <div className="comment">
                        <p><b>Name:</b> {comment.name}</p>
                        <p><b>Email:</b> {comment.email}</p>
                        <br/>
                        <p>{comment.body}</p>
                    </div>
                )
                }
            </div>
        </div>
    )
};

export default PostIdPage;
