import { colors, widths, shadow, heights } from "@Cypher/style-guide";
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Style {
    container: ViewStyle;
    container2: ViewStyle;
    container3: ViewStyle;
    container4: ViewStyle;
    title: ViewStyle;
    imageView: ViewStyle;
    imageViews: ViewStyle;
    image: ImageStyle;
    arrow: ImageStyle;
    arrow2: ImageStyle;
    arrow3: ImageStyle;
    linearGradient: ViewStyle;
    createView: ViewStyle;
    bitcointext: TextStyle;
    middle: TextStyle;
    text: TextStyle;
    login: TextStyle;
    view: ViewStyle;
    showLine: ViewStyle;
    box: ViewStyle;
    check: TextStyle;
    sats: TextStyle;
    alert: TextStyle;
    blink: ImageStyle;
    btnView: ViewStyle;
    current: ImageStyle;
    bottominner: ViewStyle;
    bitcoinimg: ImageStyle;
    row: ViewStyle;
    row2: ViewStyle;
    alreadyView: ViewStyle;
    scan: ImageStyle;
    shadow: TextStyle;
    shadowTop: any;
    shadow10: any;
    shadow11: any;
    shadowBottom: any;
    shadowView: ViewStyle;
    shadowTopBottom: any;
    shadowBottomBottom: any;
    shadowViewBottom: ViewStyle;
    height: ViewStyle;
    top: ViewStyle;
    storageText: TextStyle;
    main: ViewStyle;
    circle: ViewStyle;
    inside: ViewStyle;
    gradient: ViewStyle;
    view2: ViewStyle;
    bottomSheet: ViewStyle;


    image2: ImageStyle;
    image3: ImageStyle;
    title2: TextStyle;
    desc: TextStyle;
    view3: ViewStyle;
    height2: ViewStyle;
    background: ViewStyle;
    extra: ViewStyle;
    closeIcon: ImageStyle;
    subview: ViewStyle;
    bottomtext: TextStyle;
    closeView: ViewStyle;
    bottom: ViewStyle;
    line: ViewStyle;

    price: TextStyle;
    priceusd: TextStyle;
    totalsats: TextStyle;
    list: ViewStyle;
}

export default StyleSheet.create<Style>({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 60,
    },
    container2: {
        flex: 1,
    },
    container3: {
        height: 62,
        marginTop: 16,
        marginBottom: 16,
    },
    container4: {
        backgroundColor: colors.gray.dark,
        flex: 1,
        borderRadius: 26,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    alreadyView: {
        flexDirection: 'row',
        marginTop: 10,
        alignSelf: 'center'
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageView: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        // alignSelf: 'flex-end',
        marginEnd: 10,
    },
    imageViews: {
        width: 55,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },
    linearGradient: {
        marginTop: 20,
        height: 132,
        justifyContent: 'flex-start',
    },
    createView: {
        marginTop: 20,
    },
    image: {
        width: 33,
        height: 33,
    },
    scan: {
        width: 51,
        height: 51,
    },
    middle: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    text: {
        fontSize: 18,
    },
    login: {
        fontSize: 18,
        color: colors.pink.default,
        marginStart: 5,
    },
    bitcointext: {
        marginEnd: 7,
        ...shadow.text25,
    },
    arrow: {
        width: 50,
        height: 50,
        left: -5,
        top: 10
    },
    arrow2: {
        width: 30,
        height: 30,
        top: 7.5,
    },
    arrow3: {
        width: 30,
        height: 30,
        bottom: 7.5, transform: [{ rotate: '180deg' }]
    },
    view: {
        flexDirection: 'row',
        paddingTop: 15,
        // paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    showLine: {
        // borderWidth: 1,
        // borderColor: colors.white,
        backgroundColor: '#5F5F5F',
        height: 6,
        // padding: 5,
        borderRadius: 2,
        marginVertical: 10,
        // marginStart: 25,
        // marginHorizontal: 20
    },
    box: {
        height: 6,
        width: 4,
        backgroundColor: colors.white,
        alignSelf: 'flex-end',
        marginEnd: 25,
    },
    blink: {
        width: 75,
        height: 20,
        marginTop: 10,
        // marginEnd: 15,
    },
    check: {
        marginStart: 10,
        ...shadow.text25,
    },
    sats: {
        // marginStart: 25,
        ...shadow.text25,
    },
    alert: {
        color: colors.green,
    },
    btnView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    current: {
        position: 'absolute',
        top: -10,
        right: -5,
        width: 40,
        height: 40,
        zIndex: 1,
    },
    bottominner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bitcoinimg: {
        width: 35,
        height: 35,
        transform: [{ rotate: '30deg' }]
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: 2,
    },
    row2: {
        flexDirection: 'row',
        justifyContent: 'center',
        // backgroundColor:'red',
        marginVertical: 15,
        // height: 40,
    },
    shadow: {
        ...shadow.text25,
    },
    shadowTop: {
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 1,
        shadowColor: colors.white,
        shadowRadius: 2,
        borderRadius: 24,
        width: widths - 40,
        height: 128,
        backgroundColor: colors.primary,
        padding: 15,
        paddingHorizontal: 30,
    },
    shadow10: {
        // shadowOffset: { width: 3, height: 4 },
        // shadowOpacity: 0.25,
        // shadowColor: '#484848',
        // shadowRadius: 16,
        // borderRadius: 15,
        width: widths,
        height: heights / 2 + 80,
        backgroundColor: colors.black.dark,
        // padding: 15,
        // paddingHorizontal: 30,
        // shadowOffset: { width: 3, height: 4 },
        // shadowOpacity: 0.25,
        // shadowColor: '#484848',
        // shadowRadius: 16,
        // borderRadius: 15,
        // width: widths,
        // height: heights / 2,
        // backgroundColor: colors.primary,
        // padding: 15,
        // paddingHorizontal: 30,
    },
    shadowTopBottom: {
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 1,
        shadowColor: "#FFFFFF",
        shadowRadius: 2,
        borderRadius: 25,
        width: widths - 40,
        height: 128,
        backgroundColor: colors.tundora,
        padding: 15,
        paddingStart: 20,
        paddingEnd: 10,
    },
    shadowBottom: {
        shadowOffset: { width: -3, height: -3 },
        shadowOpacity: 1,
        shadowColor: '#DBDBDB',
        shadowRadius: 2,
        borderRadius: 25,
        width: widths - 40,
        height: 128,
        justifyContent: 'center',
        position: 'absolute',
    },
    shadow11: {
        shadowOffset: { width: -3, height: -4 },
        shadowOpacity: 0.25,
        shadowColor: '#484848',
        shadowRadius: 16,
        borderRadius: 15,
        width: widths,
        height: heights / 2,
        justifyContent: 'center',
        position: 'absolute',
    },
    shadowBottomBottom: {
        shadowOffset: { width: -2, height: -2 },
        shadowOpacity: 1,
        shadowColor: "#242424",
        shadowRadius: 2,
        borderRadius: 25,
        width: widths - 40,
        height: 128,
        justifyContent: 'center',
        position: 'absolute',
    },
    shadowView: {
        shadowOffset: { width: -8, height: -8 },
        shadowOpacity: 0.48,
        shadowColor: '#27272C',
        shadowRadius: 12,
        elevation: 24,
        borderRadius: 25,
        width: widths - 40,
        height: 128,
        marginTop: 15,
        borderColor: "transparent",
        backgroundColor: colors.white,
    },
    shadowViewBottom: {
        shadowOffset: { width: 8, height: 8 },
        shadowOpacity: 0.71,
        shadowColor: '#0C0C0C',
        shadowRadius: 12,
        elevation: 24,
        borderRadius: 25,
        width: widths - 40,
        height: 128,
        marginTop: 16,
        borderColor: "transparent",
        backgroundColor: colors.tundora,
    },
    height: {
        height: 132
    },
    top: {
        height: 132,
        justifyContent: 'flex-start',
    },
    storageText: {
        alignSelf: 'center',
        textAlign: 'center',
    },
    main: {
        height: 86,
        marginBottom: 20,
        // zIndex: 1,
    },
    circle: {
        width: 62,
        height: 62,
        borderRadius: 31,
        borderWidth: 4,
        borderColor: colors.border,
        backgroundColor: colors.gray.dark,
        zIndex: 1,
        position: 'absolute',
        top: -5,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inside: {
        flex: 1,
        backgroundColor: colors.gray.dark,
        borderRadius: 26,
        justifyContent: 'center',
    },
    gradient: {
        borderRadius: 26,
        height: 40,
        padding: 3,
    },
    view2: {
        flex: 1,
        margin: 4
    },
    bottomSheet: {
        flex: 1,
        // paddingHorizontal: 20,
        // paddingVertical: 20,
        backgroundColor: '#232323',
        borderRadius: 15,
        height: heights / 2,
    },

    image2: {
        width: 25,
        height: 24,
    },
    image3: {
        width: 36,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'red'
    },
    title2: {
        // backgroundColor:'red',
        // marginBottom: 5,
        // lineHeight: 25,
        ...shadow.text25
    },
    desc: {
        marginBottom: 5,
        ...shadow.text25
    },
    view3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 10,
        paddingStart: 10,
    },
    height2: {
        height: 86,
        zIndex: 1,
    },
    background: {
        backgroundColor: '#1e1e1e',
        flex: 1,
        margin: 1,
        borderRadius: 20
    },
    extra: {
        height: 20,
    },
    closeIcon: {
        // alignSelf: 'flex-end',
    },
    subview: {
        flex: 1,
        marginEnd: 5,
        // backgroundColor: 'green',
    },
    bottomtext: {
        alignSelf: 'center',
    },
    closeView: {
        width: 40,
        height: 40,
        // margin: 5,
        right: 0,
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'absolute',
        // zIndex: 1,
    },
    bottom: {
        opacity: 0.5,
        marginTop: 15,
    },
    line: {
        height: 2,
        width: '100%',
    },
    price: {
        marginStart: 2,
    },
    priceusd: {
        fontSize: 20,
        lineHeight: 24,
    },
    totalsats: {
        alignSelf: 'flex-end',
    },
    list: {
        paddingHorizontal: 30,
    },
});
