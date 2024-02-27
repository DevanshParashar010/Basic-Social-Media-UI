import React from "react";
import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/post-list-store";

export default function PostList() {
  const { postList, addInitialPosts } = useContext(PostListData);
  
  return (
     <>
  
       {postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}
