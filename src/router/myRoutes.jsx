import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';
import Login from '../pages/Login';

export const logedRoute=[
    {path:"/about", element: <About/>},
    {path:"/posts", element: <Posts/>},
    {path:"/posts/:id", element: <PostIdPage/>},
    {path:"*", element: <Error/>}
];

export const notLogedRoute=[
    {path:"/login", element: <Login/>},
    {path:"*", element: <Login/>}
];