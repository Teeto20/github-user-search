import {useQuery} from '@tanstack/react-query';
import {useState} from 'react';
import axios from 'axios';

const fetchPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
}

const PostsComponent = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 5000, // 5 seconds
    cacheTime: 300000, // 300 seconds
    refetchOnWindowFocus: false, // Do not refetch on window focus
    keepPreviousData: true,// Keep previous data while fetching new data
    });
    if (isLoading) return <p>loading posts ...</p>
    if (isError) return <p>Error: {error.message}</p>;
    return (
        <div style={{ padding: '20px', color: 'white' }}>
            <button onClick={() => refetch()}>Refetch Posts</button>
            <ul>
                {data.map(post => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default PostsComponent;
