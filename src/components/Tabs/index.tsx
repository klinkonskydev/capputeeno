"use client";

import Link from "next/link";
import * as S from "./styles";

export type Tab = {
  label: string;
  url: string;
};

type TabsProps = {
  tabs: Tab[];
};

const Tabs = ({ tabs }: TabsProps) => {
  return tabs.map((tab, i) => (
    <li key={`${tab.label}-${i}`}>
      <Link href={tab.url} passHref>
        <S.Tab isActive={i === 0}>{tab.label}</S.Tab>
      </Link>
    </li>
  ));
};
export default Tabs;
