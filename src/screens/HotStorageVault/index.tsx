import React, { useState, useCallback, useEffect } from "react";
import { Text, ScreenLayout } from "@Cypher/component-library";
import { CustomFlatList, GradientView } from "@Cypher/components";
import styles from "./styles";
import Tabs from "./Tabs";
import Vault from "./Vault";
import History from "./History";
import Settings from "./Settings";
import Capsules from "./Capsules";
import ListView from "./ListView";
import { useRoute } from "@react-navigation/native";
import useAuthStore from "@Cypher/stores/authStore";



const HotStorageVault = ({ _, route }: any) => {
    const { wallet, matchedRate, to = null } = useRoute().params as { wallet: any, matchedRate: string, to: null | string };
    const [selectedTab, setSelectedTab] = useState(0);
    const [utxo, setUtxo] = useState(null);
    const { vaultTab } = useAuthStore();

    useEffect(() => {
        if (to) {
            setSelectedTab(1)
        }
    }, [to])

    const onChangeSelectedTab = useCallback((id: number) => {
        setSelectedTab(id);
    }, []);

    const renderView = useCallback(() => {
        // LayoutAnimation.linear();
        switch (selectedTab) {
            case 0:
                return <Vault wallet={wallet} matchedRate={matchedRate} setSelectedTab={setSelectedTab} />;
            case 1:
                return <Capsules wallet={wallet} matchedRate={matchedRate} to={to} vaultTab={vaultTab} />;
            case 2:
                return <History wallet={wallet} matchedRate={matchedRate} vaultTab={vaultTab} />;
            case 3:
                return <Settings wallet={wallet} vaultTab={vaultTab} to={to} />;
            default:
                return <Vault wallet={wallet} matchedRate={matchedRate} setSelectedTab={setSelectedTab} />;
        }
    }, [selectedTab, vaultTab, wallet, matchedRate, to]);

    return (
        <ScreenLayout
            showToolbar
            title={vaultTab ? 'Cold Storage Vault' : 'Hot Storage Vault'}
            disableScroll
            style={{ paddingBottom: 20 }}
        >
            <Tabs onChangeSelectedTab={onChangeSelectedTab} selectedTab={selectedTab} vaultTab={vaultTab} />
            {renderView()}
        </ScreenLayout>
    );
}

export default HotStorageVault;
