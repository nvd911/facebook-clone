import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEpOB50Gf-839DMNoHRlYYBAWP0TN73RHsGg&usqp=CAU"
        profileSrc="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
        title="Ngày mới vui vẻ !!!"
      ></Story>
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnltfxyRHuEEUE4gIZp9fr77Q8goigP7mQ6Q&usqp=CAU"
        profileSrc="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
        title="Sinh nhật vui vẻ !!!<>!!!"
      ></Story>
    </div>
  );
}

export default StoryReel;
