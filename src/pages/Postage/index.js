import React, { useState } from 'react';
import { SafeAreaView, Modal, FlatList, TouchableOpacity } from 'react-native';
import i18n from 'i18n-js';
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

import {
    CenteredView,
    ModalView,
    Label,
    Button,
    TextStyle,
    HeaderContainer,
    ButtonContainer,
    Title,
    Subtitle,
    TitleView,
    Name,
    PostImage,
    Post,
    Footer,
    LikeNShare
} from './styles';

export default function Postage({ route }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.locale);
    const [liked, setLiked] = useState(false);

    const { author, day, month, year, weekDay, images, description, aspectRatio } = route.params;

    return (
        <SafeAreaView>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <CenteredView>
                    <ModalView>
                        <Label>{i18n.t('SelectLanguage')}</Label>
                        <Picker
                            style={{ width: 150 }}
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue) => {
                                i18n.locale = itemValue;
                                setSelectedLanguage(itemValue);
                            }}
                        >
                            <Picker.Item label={i18n.t('en')} value="en" />
                            <Picker.Item label={i18n.t('ptBR')} value="pt-BR" />
                        </Picker>
                        <Button
                            onPress={() => setModalVisible(!modalVisible)}>
                            <TextStyle>{i18n.t('Return')}</TextStyle>
                        </Button>
                    </ModalView>
                </CenteredView>
            </Modal>

            <HeaderContainer>
                <TitleView>
                    <Title>{i18n.t(description)}</Title>
                    <Subtitle>
                        {i18n.locale === 'pt-BR' ?
                            (`${i18n.t(weekDay)}, ${day} ${i18n.t(month)} ${year}`)
                            :
                            (`${i18n.t(weekDay)}, ${i18n.t(month)} ${day} ${year}`)
                        }
                    </Subtitle>
                    <Name>{author.name}</Name>
                </TitleView>
                <ButtonContainer bgColor="#f5f5f5" onPress={() => setModalVisible(true)}>
                    <Ionicons name="cog-outline" size={30} color="#5f5f5f" />
                </ButtonContainer>
            </HeaderContainer>

            <FlatList
                data={images}
                keyExtractor={(image) => String(image.uri)}
                renderItem={({ item }) => (
                    <Post>
                        <PostImage
                            aspectRatio={aspectRatio}
                            source={{ uri: item.uri }}
                        />

                        <Footer>
                            <LikeNShare>
                                <Ionicons name={liked ? 'heart' : 'heart-outline'} size={30} color={liked ? '#ff0000' : '#5f5f5f'} onPress={() => setLiked(!liked)} />
                                <TouchableOpacity>
                                    <Ionicons name='share-social-outline' size={30} color='#5f5f5f' />
                                </TouchableOpacity>
                            </LikeNShare>
                            <TouchableOpacity>
                                <Ionicons name='cart-outline' size={30} color='red' />
                            </TouchableOpacity>
                        </Footer>
                    </Post>
                )}
            />
        </SafeAreaView>
    );
}