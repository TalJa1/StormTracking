export interface MapInterface {
  tabLocation: MapLocation;
  setTabLocation: React.Dispatch<React.SetStateAction<number>>;
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
