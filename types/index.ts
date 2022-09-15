import { DiscoverData } from "./../assets/data/discoverData";
export interface Nav {
  navigate: (path: string, params?: unknown) => void;
  goBack: () => void;
}

export type StackParamsList = {
  Home: undefined;
  Details: {
    item: DiscoverData;
  };
};
