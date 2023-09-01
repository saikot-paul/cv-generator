export interface nestedItem {
  key: string;
  value: string;
  list?: {
    key: string;
    value: string;
  }[];
}
export interface item {
  key: string;
  value: nestedItem[];
}
export interface FormData {
  key: string;
  value: item[];
}
