export interface LinkDataPropDef {
  text: string;
  to?: string;
  Icon: any;
  fab?: number;
  subLinks?: { text: string; to: string }[];
  active: string;
}

export interface ContextType {
  open: boolean;
  handleDrawerClose: () => void;
  handleDrawerOpen: () => void;
}

export interface NewsItemPropDef {
  title: string;
  imgUrl: string;
  description: string;
  readingTime: string;
  url: string;
}

export interface ApiNews {
  data: { id: NewsItemPropDef[] };
}

export interface OrderObj {
  name: string;
  value: string;
}
