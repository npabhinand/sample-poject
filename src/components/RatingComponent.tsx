import {
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
import { HEIGHT, WIDTH } from '../common/dimensions';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../reducers/colorThemeSlice';
// import { RootStackParamList } from '../navigation/AppNavigator';

interface CallingProps {
    description1?: string;
    description2?: string;
    navigate?: string;
    image?: any;
}

const RatingComponent: React.FC<CallingProps> = ({
    description1,
    description2,
    navigate,
    image,
}) => {
    const currentTheme = useSelector(selectColorTheme);
    const [rating, setRating] = useState(0);
    const navigation = useNavigation();

    const onPressHandle = () => {
        navigation.navigate(navigate);
    };

    return (
        <View style={styles.container}>
            <Image source={image} style={styles.personImage} />
            <Text style={[styles.nameText, { color: currentTheme.defaultTextColor }]}>Thank You!</Text>
            <Text style={[styles.nameText, { color: currentTheme.defaultTextColor }]}>{description1}</Text>
            <Text style={styles.subText}>{description2}</Text>

            <View style={styles.starRow}>
                {[1, 2, 3, 4, 5].map((star) => (
                    <TouchableOpacity key={star} onPress={() => setRating(star)}>
                        <Image
                            source={star === rating ? starFocusedIcon : starIcon}
                            style={[
                                styles.starIcon,
                                {
                                    tintColor: star <= rating ? '#FFB51F' : currentTheme.ratingColor,
                                    transform: star === rating ? [{ scale: 0.9 }] : [{ scale: 0.7 }],
                                }
                            ]}
                        />
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.bottomContainer}>
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
                    <TouchableOpacity style={[styles.skipBtn, { backgroundColor: currentTheme['lightWhite'] }]} onPress={onPressHandle}>
                        <Text style={styles.skipText}>Skip</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default RatingComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: WIDTH * 0.05,
        // backgroundColor: '#FEFEFF',
    },
    personImage: {
        // marginTop: HEIGHT * 0.1,
        marginBottom: HEIGHT * 0.05,
        // width: WIDTH * 0.55,
        // height: WIDTH * 0.5,
        zIndex: 1,

        // borderRadius: WIDTH * 0.15,
    },
    nameText: {
        fontSize: WIDTH * 0.07,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subText: {
        fontSize: WIDTH * 0.04,
        color: '#C8C8C8',
        marginTop: HEIGHT * 0.02,
        marginBottom: HEIGHT * 0.01,
        textAlign: 'center',
    },
    starRow: {
        flexDirection: 'row',
        marginVertical: HEIGHT * 0.04,
    },
    starIcon: {
        width: WIDTH * 0.08,
        height: WIDTH * 0.08,
        marginHorizontal: WIDTH * 0.02,
    },
    bottomContainer: {
        width: '100%',
        paddingHorizontal: WIDTH * 0.05,
        position: 'absolute',
        bottom: HEIGHT * 0.05,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderRadius: HEIGHT * 0.02,
        paddingHorizontal: WIDTH * 0.03,
        marginBottom: HEIGHT * 0.03,
        width: '100%',
        paddingVertical: HEIGHT * 0.01,
    },
    textInput: {
        flex: 1,
        fontSize: WIDTH * 0.04,
        height: HEIGHT * 0.05,
    },
    editIcon: {
        width: WIDTH * 0.06,
        height: WIDTH * 0.06,
        marginLeft: 10,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: WIDTH * 0.01,
    },
    submitBtn: {
        backgroundColor: '#41CB7D',
        borderRadius: 10,
        width: '73%',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '500',
        height: HEIGHT * 0.06,
        marginRight: WIDTH * 0.01,
    },
    skipBtn: {
        backgroundColor: '#fff',
        borderColor: '#00E281',
        borderRadius: 10,
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    skipText: {
        color: '#00E281',
        fontSize: WIDTH * 0.035,
        fontWeight: '600',
        // opacity: 0.9,
        shadowColor: '#fff',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.9,
        shadowRadius: 4,
    },
    submitTxt: {
        color: '#fff',
        fontSize: WIDTH * 0.04,
    },
});
