export interface MapInterface {
  tabLocation: MapLocation;
  setRenderIndex: React.Dispatch<React.SetStateAction<number>>;
  maxIndex: number;
}

export interface DetailInforInterface {
  icon: any;
  title: string;
  value: string;
}

export interface MapLocation {
  name: string;
  description: string;
  temperature: number;
  long: number;
  lad: number;
}

export interface HomeHeader {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface RenderLayoutItem {
  icon: JSX.Element;
  title: string;
}

export interface RenderLayoutInterface {
  title: string;
  renderData: RenderLayoutItem[];
}

export interface TabInforChart {
  title: string;
  icon: any;
  color: string;
}

export interface ChartRenderInterface {
  title: string;
  data: {value: number; label: string}[];
  colorProp: number;
  popUpData: ChartPopUpItemInterface;
}

interface DataPoint {
  value: number;
  label: string;
}

// Define the interface for the object containing the data for each category
export interface ChartData {
  apSuatKhiQuyen: DataPoint[];
  tocDoGio: DataPoint[];
  luongMua: DataPoint[];
  nhietDoMatBien: DataPoint[];
  doAm: DataPoint[];
}

export interface ChartPopUpItemInterface {
  safe: string[];
  danger: string[];
}

export interface ChartPopUpInterface {
  title: string;
  visible: boolean;
  onClose: () => void;
  popUpData: ChartPopUpItemInterface;
}

export interface OnboardingComponentProps {
  title: string;
  description?: string | null;
  step: number;
  setStep: (newStep: number) => void;
  ui: React.ReactNode;
  isNext: boolean;
}

export interface LoginBtnProps {
  btnColor: string;
  textColor: string;
  title: string;
  icon?: JSX.Element;
}

export interface OnboardingInterfaceProps {
  setIsNext: React.Dispatch<React.SetStateAction<boolean>>;
  formData: {name: string; age: string; goal: string; location: string};
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      age: string;
      goal: string;
      location: string;
    }>
  >;
}
