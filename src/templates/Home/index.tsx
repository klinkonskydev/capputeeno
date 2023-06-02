"use client";

import Tabs, { Tab } from "components/Tabs";
import FilterBy from "components/FilterBy";

import * as S from "./styles";

const tabs: Tab[] = [
  {
    label: "TODOS",
    url: "/",
  },
  {
    label: "CAMISETAS",
    url: "/",
  },
  {
    label: "CANECAS",
    url: "/",
  },
];

type HomeTemplateProps = React.PropsWithChildren<unknown>
export default function HomeTemplate({ children }: HomeTemplateProps) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.TabsWrapper>
          {/* @ts-expect-error Server Component */}
          <Tabs tabs={tabs} />
        </S.TabsWrapper>

        <FilterBy />
      </S.Header>

      {children}
    </S.Wrapper>
  );
}
