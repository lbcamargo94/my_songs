// imports React
import React from "react";

// imports images
import ImageAvatar from "../assets/images/cat_avatar.jpeg";

// import context/provider
// import { useUpdateContext } from "../utils/provider";

export default function Avatar() {
  // Context
  // const { data } = useUpdateContext();

  return (
    <div>
      <img src={ImageAvatar} alt="image_avatar" />
      <h1>User</h1>
    </div>
  );
}
