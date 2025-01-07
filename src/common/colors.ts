const commonColor = {
    commonWhite: '#FFFFFF',
    commonBlack: '#000000',
    activeColor: '#DE5E69',
    deactiveColor: '#DE5E6950',
    boxActiveColor: '#DE5E6940',
    greenColor: '#43D281',
    lightColor: '#F9FBFF',
    grayColor: '#888',
    darkGray: '#A9A9A9',
};

const light = {
    name: 'light',
    themeColor: '#F9FBFF',
    defaultTextColor: '#000000',
    lightWhite: '#FFFFFF',
    sky: '#DE5E69',
    gray: 'gray',
    ...commonColor,
};

const dark = {
    name: 'dark',
    themeColor: '#000000',
    defaultTextColor: '#ffffff',
    lightWhite: '#252525',
    sky: '#831a23',
    gray: 'white',
    ...commonColor,
};

export { light, dark, commonColor };
