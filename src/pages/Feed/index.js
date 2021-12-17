import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, FlatList, Keyboard } from 'react-native';
import i18n from 'i18n-js';
import { Ionicons } from '@expo/vector-icons';

import LazyImage from '../../components/LazyImage';
import { Translations } from '../../i18n';
i18n.translations = Translations;

import { Post, Header, Name, Loading, 
    SearchBox, HeaderContainer, ButtonContainer } from './styles';

export default function Feed() {
    const [feed, setFeed] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [viewable, setViewable] = useState([]);
    const [search, setSearch] = useState('');

    async function loadPage(pageNumber = page, shouldRefresh = false, searchText = search) {
        if (total && pageNumber > total) return;

        setLoading(true);

        let url = `https://my-json-server.typicode.com/emanuks/surfmappers/feed?_expand=author&_limit=5&_page=${pageNumber}`;

        if (searchText !== '') {
            url += `&description_like=${searchText}`
        }

        const response = await fetch(
            url
        );

        const data = await response.json();
        const totalItems = response.headers.get('X-Total-Count');

        setTotal(Math.ceil(totalItems / 5));
        setFeed(shouldRefresh ? data : [... feed, ... data]);
        setPage(pageNumber + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadPage();
    }, []);

    async function refreshList() {
        setRefreshing(true);

        await loadPage(1 ,true);

        setRefreshing(false);
    }

    function searchFeed() {
        Keyboard.dismiss();

        loadPage(1, true, search);
    }

    const handleViewableChanged = useCallback(({ changed }) => {
        setViewable(changed.map(({ item }) => item.id));
    }, []);

    return (
        <SafeAreaView>
            <HeaderContainer>
                <SearchBox 
                    placeholder={i18n.t('whereYouSurfedToday')}
                    onChangeText={setSearch}
                    onSubmitEditing={() => searchFeed()}
                />
                <ButtonContainer bgColor='#f5f5f5' onPress={() => searchFeed()} >
                    <Ionicons name="cog-outline" size={30} color="#5f5f5f" />
                </ButtonContainer>
            </HeaderContainer>
            
            <FlatList 
                data={feed}
                keyExtractor={post => String(post.id)}
                onEndReached={() => loadPage()}
                onEndReachedThreshold={0.1}
                onRefresh={refreshList}
                refreshing={refreshing}
                onViewableItemsChanged={handleViewableChanged}
                viewabilityConfig={{ viewAreaCoveragePercentThreshold: 20 }}
                ListFooterComponent={loading && <Loading />}
                renderItem={({ item }) => (
                    <Post>
                        <Header>
                            <Name>{item.author.name}</Name>
                        </Header>

                        <LazyImage 
                            shouldLoad={viewable.includes(item.id)}
                            aspectRatio={item.aspectRatio} 
                            source={{ uri: item.image }} 
                            smallSource={{uri: item.small }} 
                        />
                    </Post>
                )}
            />
        </SafeAreaView>
    );
}