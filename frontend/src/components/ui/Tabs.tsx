import React from "react";
import "../../assets/styles/tabs.css";

interface Tab {
    key: string;
    title: string;
    content: React.ReactNode;
}
interface TabsProps {
    tabs: Tab[];
    activeTab: Tab | null;
    onTabClick: (tab: Tab) => void;
    onTabClose: (tabKey: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs , activeTab, onTabClick, onTabClose }) => {
return (
        <>
        {
            tabs && <div className={`tabs ${tabs.length > 0 ? "tabs-border" : ""}`} >
            {tabs.map((tab) => (
                <div
                    key={tab.key}
                    className={`tab-item ${activeTab && activeTab.key === tab.key ? "active" : ""}`}
                    onClick={() => onTabClick(tab)}
                >
                    <span className="tab-label">{tab.title}</span>
                    <button
                        className="tab-close"
                        onClick={(e) => {
                            e.stopPropagation(); // 부모 클릭 이벤트 차단
                            onTabClose(tab.key);
                        }}
                    >
                        ✖
                    </button>
                </div>
            ))}
        </div>
        }
       </>
    );
};

export default Tabs;
