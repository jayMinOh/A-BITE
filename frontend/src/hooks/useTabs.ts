import { useState } from "react";
import React from "react";

interface Tab {
    key: string;
    title: string;
    content: React.ReactNode;
    isActive: boolean;
}

const useTabs = () => {
    const [tabs, setTabs] = useState<Tab[]>([]);
    const [activeTab, setActiveTab] = useState<Tab | null>(null);

    const addTab = (newTab: Omit<Tab, "isActive">) => {
        if (tabs.length >= 10) {
            alert("탭은 최대 10개까지 열 수 있습니다.");
            return;
        }

        const updatedTabs = tabs.map((tab) => ({ ...tab, isActive: false }));
        const existingTab = tabs.find((tab) => tab.key === newTab.key);

        if (existingTab) {
            setTabs(
                updatedTabs.map((tab) =>
                    tab.key === newTab.key ? { ...tab, isActive: true } : tab
                )
            );
            setActiveTab({ ...existingTab, isActive: true });
        } else {
            const newActiveTab: Tab = { ...newTab, isActive: true };
            setTabs([...updatedTabs, newActiveTab]);
            setActiveTab(newActiveTab);
        }
    };

    const closeTab = (tabKey: string) => {
        setTabs((prevTabs) => {
            const updatedTabs = prevTabs.filter((tab) => tab.key !== tabKey);
            if (activeTab?.key === tabKey) {
                setActiveTab(updatedTabs.length > 0 ? updatedTabs[0] : null);
            }
            return updatedTabs;
        });
    };

    const activateTab = (tab: Tab) => {
        setTabs((prevTabs) =>
            prevTabs.map((t) => ({ ...t, isActive: t.key === tab.key }))
        );
        setActiveTab(tab);
    };

    return { tabs, activeTab, addTab, closeTab, activateTab };
};

export default useTabs;
