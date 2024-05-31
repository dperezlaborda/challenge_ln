import { MockDataType } from "../types/mock";

export interface HeroProps {
  data: MockDataType[];
  children?: React.ReactElement | React.ReactElement[];
}

export interface FocalProps {
  data: MockDataType[] | null;
  isLoading: boolean;
  error: boolean;
}

export interface CardRegularImageProps {
  src?: string | undefined | null;
  className?: string;
  alt: string;
  height?: string;
  width?: string;
}

export interface BadgeComponentProps {
  label?: string;
  bgColor?: string;
  border?: string;
  labelColor?: string;
}
