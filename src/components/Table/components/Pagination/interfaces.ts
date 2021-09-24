export interface iProps {
  currentPage: Number;
  countPages: Number;
  recordsCountOnPage: Number;
  next: any;
  prev: any;
  cPage: any;
  cRecordsCountOnPage: any;
}

export interface iBtn {
  destiny?: String;
  access?: Boolean | false;
  onClick?: any;
  pageNumber?: Number;
  children?: any;
  cur?: any;
}
