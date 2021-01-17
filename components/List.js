import React from "react";
import { useLoadMedia } from "../hooks/ApiHooks";
import { FlatList } from "react-native";
import ListItem from "./ListItem";

const List = () => {
  const mediaArray = useLoadMedia();

  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(item, index) => index.toString()} // to gen key
      renderItem={({ item }) => <ListItem singleMedia={item} />}
    />
  );
};

export default List;
