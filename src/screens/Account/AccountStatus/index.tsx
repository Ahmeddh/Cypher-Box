import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";
import { CoinOSSmall } from "@Cypher/assets/images";
import { GradientButton, GradientCardWithShadow, GradientText } from "@Cypher/components";
import { ScreenLayout, Text } from "@Cypher/component-library";
import { dispatchNavigate } from "@Cypher/helpers";
import { colors, heights } from "@Cypher/style-guide";
import LinearGradient from "react-native-linear-gradient";
import { Shadow } from "react-native-neomorph-shadows";

export default function AccountStatus() {

    const nextClickHandler = () => {
        console.log('home click');
        dispatchNavigate('HomeScreen', {
            isLogin_: true
        });
    }

    return (
        <ScreenLayout disableScroll progress={2}>
            <View style={styles.container}>
                <View style={styles.innerView}>
                    <GradientText>Checking Account Created!</GradientText>
                    <GradientCardWithShadow colors_={[colors.gray.dark, colors.gray.dark]} style={styles.linearGradient} disabled linearStyle={styles.height} shadowStyleTop={styles.top} shadowStyleBottom={styles.bottom}>
                        <View style={styles.view}>
                            <Text h2 bold style={styles.check}>
                                Checking Account
                            </Text>
                            <Image
                                source={CoinOSSmall}
                                style={styles.blink}
                                resizeMode="contain"
                            />
                        </View>
                        <Text bold style={styles.text}>2M sats</Text>
                        <LinearGradient
                            start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}
                            colors={[colors.white, colors.pink.dark]}
                            style={styles.linearGradient2}>
                            <View style={styles.box} />
                            {/* <Shadow
                                inner // <- enable inner shadow
                                useArt // <- set this prop to use non-native shadow on ios
                                style={styles.top2} >
                            </Shadow> */}
                        </LinearGradient>
                    </GradientCardWithShadow>
                    <Text h4 style={styles.description}>Your Cecking Account has been created. The interactive bar display helps you in visualizing your Checking Account's balance, indicating a threshold above which storing bitcoin in a bank carries increased counter-party risk.{'\n'}{'\n'}
                        You can deposit money beyond the threshold, but remember, you are technically not the owner of it; you are relying on a third-party custodian. Cypher Box will enable you to become the sole owner of your money once you max out the bar slot (set to 2.1 million sats by default but you can adjust it in the settings).</Text>
                </View>
                <GradientButton title="Home" onPress={nextClickHandler} />
            </View>
        </ScreenLayout>
    )
}
