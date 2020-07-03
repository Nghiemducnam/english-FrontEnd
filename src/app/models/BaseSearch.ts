export interface BaseSearch {
  totalRecords?: number;
  page: number;
  totalPages?: number;
  pageSize?: number;
  orders?: any[];
  data?: any[];
}
