import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";
import { SiTypescript } from "react-icons/si";

export const prefix = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

export const SPEED_QUIZ_COUNT = [20, 25, 30, 35, 40] as const;

export type SpeedQuizCount = typeof SPEED_QUIZ_COUNT[number];

export const SPEED_QUIZ_CATEGORY = {
  Web: "Web",
  JavaScript: "JavaScript",
  TypeScript: "TypeScript",
  React: "React"
} as const;

export type SpeedQuizCategory =
  typeof SPEED_QUIZ_CATEGORY[keyof typeof SPEED_QUIZ_CATEGORY];

export const commonIconStyle = {
  width: 24,
  height: 24
};

export const SPEED_QUIZ_CATEGORY_DATA = {
  [SPEED_QUIZ_CATEGORY.Web]: {
    color: "#4b4bcd",
    iconStyle: {
      iconColor: "#4b4bcd",
      ...commonIconStyle
    },
    startIcon: GoBrowser
  },
  [SPEED_QUIZ_CATEGORY.JavaScript]: {
    color: "#ff9800",
    iconStyle: {
      iconColor: "#ff9800",
      ...commonIconStyle
    },

    startIcon: DiJavascript
  },
  [SPEED_QUIZ_CATEGORY.TypeScript]: {
    color: "#2f74c0",
    iconStyle: {
      iconColor: "#2f74c0",
      ...commonIconStyle
    },
    startIcon: SiTypescript
  },
  [SPEED_QUIZ_CATEGORY.React]: {
    color: "#03a9f4",
    iconStyle: {
      iconColor: "#03a9f4",
      ...commonIconStyle
    },

    startIcon: FaReact
  }
};
