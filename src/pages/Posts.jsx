import React, {useState, useEffect, useRef} from 'react';
import "../styles/App.css";
import PostList from "../components/PostList";
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import { getPageCount} from '../components/UI/utils/pages';
import Pagination from '../components/UI/pagination/Pagination';

function Posts() {
const [posts, setPosts]=useState([]);

const [filter, setFilter] = useState ({sort:'', query:''})
const [modal, setModal]=useState(false);
const [totalPages, setTotalPages] = useState(0);
const [limit, setLimit]= useState(10);
const [page, setPage] = useState(1);
const sortedAndSearchedPosts = usePosts (posts, filter.sort, filter.query);
const lastElement = useRef();
const observer = useRef();

const [fetchPosts, isPostsLoading, postError] = useFetching( async()=>{
  const response = await PostService.getAll(limit, page);
  setPosts([...posts, ...response.data]);
  const totalCount = response.headers['x-total-count']
  setTotalPages(getPageCount(totalCount, limit));
})

useEffect( () => {
  
  var callback = function(entries, observer) {
    if(isPostsLoading) return {}
    if(observer.current) {observer.current.disconnect();}
    if(entries[0].isIntersecting && page<totalPages){
      setPage(page+1);
    }
    
  };
  
  observer.current = new IntersectionObserver(callback);
  observer.current.observe(lastElement.current)
  }, [isPostsLoading])

useEffect(() => {
  console.log(page);
  fetchPosts(limit, page);
},[page])

const createPost = (newPost) => {
  setPosts([...posts,newPost])
  setModal(false)
}

const removePost=(post)=>{
  setPosts(posts.filter(p=> p.id !== post.id))
}
return (  
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={()=> setModal(true)}>
        Create Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin:'15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {postError &&
        <h1>Error ${postError}</h1>
        }
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts List"/>
        <div ref={lastElement} style={{height:20, backgroundColor:"red"}}></div>
      
      <Pagination page={page} totalPages={totalPages} setPage={setPage}/>
    </div>
  );
}

export default Posts;
