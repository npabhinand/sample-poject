import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { testimonials } from '../data/commonArray';
import { IconStar } from '../assets/icons';
import { HEIGHT, WIDTH } from '../global/dimensions';


const Testimonials = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Testimonials</Text>
            {testimonials.map((testimonial, index) => (
                <View style={styles.cardContainer} key={index}>
                    <View style={styles.row}>
                        <Image source={testimonial.imgURL} />
                        <View style={styles.marginLeft}>
                            <Text style={styles.name}>{testimonial.name}</Text>
                            <Text style={styles.subTxt}>{testimonial.date}</Text>
                            <Text style={styles.reviewTxt}>
                                {testimonial.review}
                            </Text>
                        </View>
                        <TouchableOpacity style={[styles.row, styles.btn]}>
                            <Image source={IconStar} />
                            <Text style={styles.ratingTxt}>{testimonial.rating}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F8FE',
    }, cardContainer: {
        backgroundColor: '#fff',
        padding: HEIGHT * 0.02,
        marginBottom: HEIGHT * 0.04,
        width: 0.9 * WIDTH,
        height: 0.17 * HEIGHT,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.01,
        shadowRadius: 4,
        borderRadius: HEIGHT * 0.01,
    }, title: {
        fontWeight: 'bold',
        backgroundColor: '#fff',
        marginLeft: WIDTH * 0.06,
        fontSize: 15,
        paddingTop: HEIGHT * 0.01,
    }, marginLeft: {
        paddingLeft: WIDTH * 0.05,
        paddingRight: WIDTH * 0.08,
    },
    row: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    btn: {
        position: 'absolute',
        right: 5,
        alignItems: 'center',
        backgroundColor: '#ECFBF3',
        height: HEIGHT * 0.04,
        width: WIDTH * 0.15,
        justifyContent: 'space-evenly',
        borderRadius: HEIGHT * 0.05,
    }, subTxt: {
        color: '#9D9D9D',
        fontWeight: '300',
    },
    name: {
        fontWeight: 'bold',

    }, reviewTxt: {
        marginTop: HEIGHT * 0.03,
        fontSize: 13,
        marginRight: WIDTH * 0.1,
    }, ratingTxt: {
        color: '#43D27F',
    },
});
export default Testimonials;
