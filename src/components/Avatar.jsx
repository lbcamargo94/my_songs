// imports React
import React from "react";

// imports images
import ImageAvatar from "../assets/images/cat_avatar.jpeg";

// imports styles
import { Content, Image, Text } from "../styles/components/Avatar";

// import context/provider
// import { useUpdateContext } from "../utils/provider";

export default function Avatar() {
  // Context
  // const { data } = useUpdateContext();

  return (
    <Content>
      <Image src={ImageAvatar} alt="image_avatar" />
      <Text>User</Text>
    </Content>
  );
}
