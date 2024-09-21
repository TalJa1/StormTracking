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
