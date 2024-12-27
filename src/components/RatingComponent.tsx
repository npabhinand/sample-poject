import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
import { editIcon, starIcon, starFocusedIcon } from '../assets/icons';
import { useNavigation } from '@react-navigation/native';

interface CallingProps {
    description1?: string;
    description2?: string;
    navigate?: string;
    image?: any;
}

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

const RatingComponent: React.FC<CallingProps> = ({
    description1,
    description2,
    navigate,
    image,
}) => {

    const [rating, setRating] = useState(0);
    const navigation = useNavigation();
    console.log(navigate);
    const onPressHandle = () => {
        // if (!navigate) {
        navigation.navigate(navigate);
        // }

    };


    return (
        <View style={styles.container}>
            <Image source={image} style={styles.personImage} />
            <Text style={styles.nameText}>Thank You!</Text>
            <Text style={styles.nameText}>{description1}</Text>
            <Text style={styles.subText}>{description2}</Text>


            <View style={styles.starRow}>
                {[1, 2, 3, 4, 5].map((star) => (
                    <TouchableOpacity key={star} onPress={() => setRating(star)}>
                        <Image
                            source={starIcon}
                            style={[
                                styles.starIcon,
                                { tintColor: star <= rating ? '#FFB51F' : '#FEEDBC' },

                            ]}
                        />
                    </TouchableOpacity>
                ))}
            </View>



            <View style={{ top: 60 }}>
                {/* <View style={{ top: WIDTH * 0.28 }}> */}

                <View style={styles.inputContainer}>
                    <Image source={editIcon} style={styles.editIcon} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="  Leave feedback"
                        placeholderTextColor="#C8C8C8"
                    />
                </View>


                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.submitBtn}>
                        <Text style={styles.submitTxt}>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.skipBtn} onPress={onPressHandle}>

                        <Text style={styles.skipText}>Skip</Text>
                    </TouchableOpacity>
                </View>
            </View >
        </View >

        // </View >
    );
};

export default RatingComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    personImage: {
        marginBottom: HEIGHT * 0.05,
    },
    nameText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },


    subText: {
        fontSize: 14,
        color: '#C8C8C8',
        marginTop: HEIGHT * 0.015,
        // marginTop: HEIGHT * 0.025,
        marginBottom: HEIGHT * 0.05,
        textAlign: 'center',
    },
    starRow: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    starIcon: {
        width: 40,
        height: 40,
        marginHorizontal: 5,
        // gap: 20,
        // justifyContent: 'space-between',
    },
    inputContainer: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
        // bottom:HEIGHT* 0.05,
        width: '100%',
        padding: 10
    },
    textInput: {
        flex: 1,
        fontSize: 14,

        height: HEIGHT * 0.05,
    },
    editIcon: {
        // width: 20,
        // height: 20,
        marginLeft: 10,
    },
    buttonRow: {
        position: 'relative',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    submitBtn: {
        backgroundColor: '#00E281',
        // padding: 15,
        borderRadius: 10,
        width: '75%',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '500',
        height: HEIGHT * 0.06,
    },
    skipBtn: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        // borderWidth: 1,
        borderColor: '#00E281',
        borderRadius: 10,
        // width: '27%',
        width: '20%',
        alignItems: 'center',
    },
    skipText: {
        color: '#00E281',
        fontSize: 14,
        fontWeight: '600',
    },
    submitTxt: {
        color: '#fff',
        fontSize: 14,

    },
});

