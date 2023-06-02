import CrossDown from "components/Icons/CrossDown";
import Dropdown from "components/Dropdown";
import * as S from "./styles";

const FilterBy = () => {
  return (
    <Dropdown
      title={
        <S.Title>
          Filtrar por <CrossDown />{" "}
        </S.Title>
      }
    >
      <S.ListWrapper>
        <S.List>Novidades</S.List>
        <S.List>Preço: Maior - menor</S.List>
        <S.List>Preço: Menor - maior</S.List>
        <S.List>Mais vendidos</S.List>
      </S.ListWrapper>
    </Dropdown>
  );
};

export default FilterBy;
