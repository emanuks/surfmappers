import React, { useState } from "react";
import { View } from "react-native";
import PagerView from "react-native-pager-view";

import Paginate from "../Paginate";

import { Original } from "./styles";

export default function LazyImage({ sources, aspectRatio }) {
  const [currentPage, setCurrentPage] = useState(0);

  function handleScroll(e) {
    setCurrentPage(e.nativeEvent.position);
  }

  return (
    <>
      <PagerView
        style={{ height: 470 }}
        initialPage={0}
        onPageScroll={handleScroll}
      >
        <View key="1">
          <Original source={{ uri: sources[0].uri }} ratio={aspectRatio} />
        </View>
        <View key="2">
          <Original source={{ uri: sources[1].uri }} ratio={aspectRatio} />
        </View>
        <View key="3">
          <Original source={{ uri: sources[2].uri }} ratio={aspectRatio} />
        </View>
        <View key="4">
          <Original source={{ uri: sources[3].uri }} ratio={aspectRatio} />
        </View>
        <View key="5">
          <Original source={{ uri: sources[4].uri }} ratio={aspectRatio} />
        </View>
      </PagerView>

      <Paginate currentPage={currentPage}/>
    </>
  );
}
