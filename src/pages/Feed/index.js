import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import { Post, Header, Name, PostImage, Loading } from './styles';

export default function Feed() {
    const [feed, setFeed] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    async function loadPage(pageNumber = page, shouldRefresh = false) {
        if (total && pageNumber > total) return;

        setLoading(true);

        const response = await fetch(
            `https://my-json-server.typicode.com/emanuks/surfmappers/feed?_expand=author&_limit=5&_page=${pageNumber}`
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

    return (
        <View>
            <FlatList 
                data={feed}
                keyExtractor={post => String(post.id)}
                onEndReached={() => loadPage()}
                onEndReachedThreshold={0.1}
                onRefresh={refreshList}
                refreshing={refreshing}
                ListFooterComponent={loading && <Loading />}
                renderItem={({ item }) => (
                    <Post>
                        <Header>
                            <Name>{item.author.name}</Name>
                        </Header>

                        <PostImage ratio={item.aspectRatio} source={{ uri: item.image }} />
                    </Post>
                )}
            />
        </View>
    );
}