import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList, Keyboard, Modal } from "react-native";
import i18n from "i18n-js";
import { Ionicons } from "@expo/vector-icons";

import LazyImage from "../../components/LazyImage";
import { Translations } from "../../i18n";
i18n.translations = Translations;

import {
  Post,
  Header,
  Loading,
  SearchBox,
  HeaderContainer,
  ButtonContainer,
  Link,
  LinkText,
  LinkSubtitle,
  Button,
  CenteredView,
  ModalText,
  ModalView,
  TextStyle
} from "./styles";

export default function Feed() {
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  async function loadPage(
    pageNumber = page,
    shouldRefresh = false,
    searchText = search
  ) {
    if (total && pageNumber > total) return;

    setLoading(true);

    let url = `https://my-json-server.typicode.com/emanuks/surfmappers/feed?_expand=author&_limit=5&_page=${pageNumber}`;

    if (searchText !== "") {
      url += `&description_like=${searchText}`;
    }

    const response = await fetch(url);

    const data = await response.json();
    const totalItems = response.headers.get("X-Total-Count");

    setTotal(Math.ceil(totalItems / 5));
    setFeed(shouldRefresh ? data : [...feed, ...data]);
    setPage(pageNumber + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadPage();
  }, []);

  async function refreshList() {
    setRefreshing(true);

    await loadPage(1, true);

    setRefreshing(false);
  }

  function searchFeed() {
    Keyboard.dismiss();

    loadPage(1, true, search);
  }

  return (
    <SafeAreaView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <CenteredView>
          <ModalView>
            <ModalText>Hello World!</ModalText>
            <Button
              onPress={() => setModalVisible(!modalVisible)}>
              <TextStyle>Hide Modal</TextStyle>
            </Button>
          </ModalView>
        </CenteredView>
      </Modal>

      <HeaderContainer>
        <SearchBox
          placeholder={i18n.t("whereYouSurfedToday")}
          onChangeText={setSearch}
          onSubmitEditing={() => searchFeed()}
        />
        <ButtonContainer bgColor="#f5f5f5" onPress={() => setModalVisible(true)}>
          <Ionicons name="cog-outline" size={30} color="#5f5f5f" />
        </ButtonContainer>
      </HeaderContainer>

      <FlatList
        data={feed}
        keyExtractor={(post) => String(post.id)}
        onEndReached={() => loadPage()}
        onEndReachedThreshold={0.1}
        onRefresh={refreshList}
        refreshing={refreshing}
        ListFooterComponent={loading && <Loading />}
        renderItem={({ item }) => (
          <Post>
            <Header>
              <Link>
                <LinkText>
                  {i18n.t(item.description)}
                </LinkText>
                <LinkSubtitle>
                  {i18n.locale === 'pt-BR' ?
                    (`${i18n.t(item.weekDay)}, ${item.day} ${i18n.t(item.month)} ${item.year}`)
                    :
                    (`${i18n.t(item.weekDay)}, ${i18n.t(item.month)} ${item.day} ${item.year}`)
                  }
                </LinkSubtitle>
              </Link>
            </Header>

            <LazyImage
              aspectRatio={item.aspectRatio}
              sources={item.images}
              isLast={feed.length === item.id ? true : false}
              author={item.author.name}
            />
          </Post>
        )}
      />
    </SafeAreaView>
  );
}
