import { View } from 'react-native';
import React from 'react';
import DetailComponent from '../components/DetailComponent';
import { DetailImage } from '../assets/images';

const ProductDetailScreen = () => {

    const productSections = [
        {
            key: 'image',
            type: 'image',
            content: DetailImage,
        },
        {
            key: 'details',
            type: 'details',
            title: 'Wijie Bar and Resto',
            location: '19 Km',
            rating: '4.9 Rating',
            description: 'Most whole Alaskan Red King Crabs get broken down into legs, claws, and lump meat. We offer all of these options as well in our online shop, but there is nothing like getting the whole . . . .',
        },
        {
            key: 'popularMenu',
            type: 'popularMenu',
        },
        {
            key: 'testimonials',
            type: 'testimonials',
        },
    ];

    return (
        <View>
            <DetailComponent sectionData={productSections} />
        </View>
    );
};

export default ProductDetailScreen;
