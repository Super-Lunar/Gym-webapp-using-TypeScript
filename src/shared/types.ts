export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  Classes = "classestraining",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType{
  name: string;
  description?: string;
  image: string;
}