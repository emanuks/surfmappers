import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import PagerView from "react-native-pager-view";
import { Ionicons } from "@expo/vector-icons";

import Paginate from "../Paginate";

import { Original, Component, Footer, Name, LikeNShare } from "./styles";

export default function LazyImage({ author, sources, aspectRatio, isLast = false }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(!liked);
  }

  function handleScroll(e) {
    setCurrentPage(e.nativeEvent.position);
  }

  return (
    <>
      {isLast ? (
        <Component>
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

          <Paginate currentPage={currentPage} />

          <Footer>
            <LikeNShare>
              <Ionicons name={liked ? 'heart' : 'heart-outline'} size={30} color={liked ? '#ff0000' : '#5f5f5f'} onPress={() => handleLike()} />
              <TouchableOpacity>
                <Ionicons name='share-social-outline' size={30} color='#5f5f5f' />
              </TouchableOpacity>
            </LikeNShare>
            <Name>{author}</Name>
          </Footer>
        </Component>
      ) : (
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

          <Paginate currentPage={currentPage} />

          <Footer>
            <LikeNShare>
              <Ionicons name={liked ? 'heart' : 'heart-outline'} size={30} color={liked ? '#ff0000' : '#5f5f5f'} onPress={() => handleLike()} />
              <TouchableOpacity>
                <Ionicons name='share-social-outline' size={30} color='#5f5f5f' />
              </TouchableOpacity>
            </LikeNShare>
            <Name>{author}</Name>
          </Footer>
        </>
      )}
    </>
  );
}