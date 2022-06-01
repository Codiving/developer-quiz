import { SpeedQuizCategory } from "./common";

export interface SpeedQuizGeneratorProps {
  onChangeOnlyBookmarked: () => void;
  categories: SpeedQuizCategory[];
  onChangeCategories: (category: SpeedQuizCategory) => void;
  onResetCategories: () => void;
}

export interface SpeedQuizCateogoryProps {
  onChangeOnlyBookmarked: () => void;
  categories: SpeedQuizCategory[];
  onChangeCategories: (category: SpeedQuizCategory) => void;
  onResetCategories: () => void;
}
