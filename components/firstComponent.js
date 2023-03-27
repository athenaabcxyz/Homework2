import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    View,
    Text,
    Button,
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    SafeAreaView,
    ActivityIndicator
} from 'react-native'
import { images, icons } from "../constants";

function firstComponent(props) {
    const [assets, setAssets] = useState([]);
    const [apilink, setapilink] = useState("https://testnets-api.opensea.io/api/v1/assets");
    const [isFetching, setFetching] = useState(false);
    useEffect(() => { }, []);

    const fetchData = () => {
        setAssets()
        setFetching(true);
        axios.get(apilink)
            .then(response => {
                setAssets(response.data.assets);
                setFetching(false);
            })
            .catch(error => {
                console.log(error);
                setFetching(false);
            });
    }

    const Item = ({ item }) => {
        return (
            <View style={style.flatListTtem}>
                <Image source={{ uri: item.image_url }} style={style.flatListImage} />
                <Text style={style.flatListName}>{item.name}</Text>
            </View>
        );
    }
    return <View style={{
        flex: 100
    }}>
        <ImageBackground source={images.background}
            resizeMode='cover'
            style={{
                flex: 100
            }}>
            <View style={{
                flex: 15,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexDirection: 'row'
            }}>
                <Image
                    source={icons.chipset}
                    style={style.logoIcon} />
                <Text style={{
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 10,
                    fontSize: 30
                }}>APIGETTER.CO</Text>
                <View style={{
                    flex: 1
                }} />
            </View>
            <View style={{
                flex: 30,
                justifyContent: 'flex-start'
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center'
                }}>Input API link</Text>
                <View style={{
                    flexDirection: 'row',
                    borderColor: 'white',
                    borderWidth: 2,
                    marginEnd: 10,
                    marginStart: 10,
                    marginTop: 10
                }}>
                    <Image source={icons.link}
                        style={style.linkicon} />
                    <TextInput
                        onChangeText={(text) => { setapilink(text) }}
                        placeholder="https://testnets-api.opensea.io/api/v1/assets"
                        placeholderTextColor={'grey'}
                        style={{
                            borderColor: 'white',
                            flex: 1,
                            color: 'white',
                            fontSize: 20
                        }} />
                </View>
                <TouchableOpacity
                    onPress={(fetchData)}
                    style={{
                        backgroundColor: 'white',
                        height: 30,
                        marginTop: 20,
                        width: 150,
                        alignSelf: 'center',
                        borderRadius: 5
                    }}>
                    <Text style={{
                        color: 'black',
                        fontSize: 20,
                        textAlign: 'center',
                        textAlignVertical: "center"
                    }}>Fetch</Text>
                </TouchableOpacity>
                {isFetching ? (
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 20,
                        color: 'white',
                        marginTop:20
                    }}>Loading...</Text>
                ) : (
                    <View />
                )
                }
            </View>
            <View style={{
                flex: 45,
            }}>
                <SafeAreaView style={style.container}>
                    {isFetching ? (
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <ActivityIndicator size="large" color="white" style={{
                                alignSelf: 'center',
                                marginTop: 150
                            }} />
                        </View>
                    ) : (
                        <FlatList
                            data={assets}
                            renderItem={Item}
                            keyExtractor={item => item.id}
                        />
                    )
                    }
                    <FlatList />
                </SafeAreaView>
            </View>
            <View style={{
                flex: 10,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 20,
                    color: 'white'
                }}>Demo app for exercise</Text>
            </View>
        </ImageBackground>
    </View>
}
const Item = ({ title }) => (
    <View>

    </View>
);
const style = StyleSheet.create({
    logoIcon: {
        width: 40,
        height: 40,
        tintColor: 'white',
        marginTop: 10,
        marginEnd: 10,
        marginStart: 10
    },
    linkicon: {
        width: 30,
        height: 30,
        tintColor: 'white',
        marginTop: 8,
        marginStart: 10,
        marginEnd: 5
    },
    container: {
        flex: 1,
        borderColor: 'white',
        borderWidth: 5,
        borderRadius: 5,
        marginStart: 5,
        marginEnd: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatListItem: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'center'
    },
    flatListName: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    flatListImage: {
        width: 200,
        height: 200,
        alignSelf: 'center'
    }
})

export default firstComponent