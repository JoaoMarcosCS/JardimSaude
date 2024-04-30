import { ReactElement } from "react";

export default interface CardDashboardProps {
  title: string;
  tooltipTextHelp: string;
  icon?: ReactElement;
  color: string;
  description: string;
  children?: React.ReactNode;
  dataToDisplay: number | undefined | string;
}
