import React from "react";
import Post from "./Post";

export type UserPost = {
  id: string;
  name: string;
  avatar: string;
  image: string;
  caption: string;
};

 const DemoPosts: UserPost[] = [
  {
    id: "1",
    name: "kelly",
    avatar:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/80.jpg",
    image:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/52.jpg",
    caption: "wow",
  },
  {
    id: "2",
    name: "chelsea",
    avatar:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/80.jpg",
    image:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/52.jpg",
    caption: "wow",
  },
];
const Posts = () => {
  return (
    <div>
      {DemoPosts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          name={post.name}
          avatar={post.avatar}
          image={post.image}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
