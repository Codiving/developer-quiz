import styled from "@emotion/styled";
import Chip from "src/components/Chip";
import { hexToRgbWithA } from "src/utils";
import {
  commonIconStyle,
  SpeedQuizCategory,
  SPEED_QUIZ_CATEGORY_DATA
} from "../../../../common";
import { GrPowerReset } from "react-icons/gr";
import { SpeedQuizCateogoryProps } from "../../../../types";

const Container = styled("div", {
  label: "SpeedQuizCateogory"
})(() => {
  return {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem"
  };
});

const CategoryChip = styled(Chip, {
  label: "CategoryChip"
})<{ selected?: boolean; color: string }>(({ selected, color: _color }) => {
  const color = hexToRgbWithA(_color, 0.3);
  const backgroundColor = hexToRgbWithA(_color, 0.5);
  return {
    border: `1px solid ${color}`,
    backgroundColor: selected ? color : "transparent",
    transition: "all .3s",

    "&:hover": {
      backgroundColor: backgroundColor
    }
  };
});

const SpeedQuizCateogory = (props: SpeedQuizCateogoryProps) => {
  const {
    onChangeOnlyBookmarked,
    categories,
    onChangeCategories,
    onResetCategories
  } = props;

  console.log("categories", categories);

  return (
    <Container>
      {Object.entries(SPEED_QUIZ_CATEGORY_DATA).map(item => {
        const [key, { color, iconStyle, startIcon }] = item;
        const category = key as SpeedQuizCategory;
        return (
          <CategoryChip
            key={category}
            startIcon={startIcon({ style: iconStyle })}
            color={color}
            onClick={() => {
              onChangeCategories(category);
            }}
            selected={categories.includes(category)}
          >
            {category}
          </CategoryChip>
        );
      })}
      <CategoryChip
        key={"reset"}
        onClick={onResetCategories}
        startIcon={
          <GrPowerReset style={{ ...commonIconStyle, color: "#313030" }} />
        }
        color="#313030"
      >
        {"Reset"}
      </CategoryChip>
    </Container>
  );
};

export default SpeedQuizCateogory;
