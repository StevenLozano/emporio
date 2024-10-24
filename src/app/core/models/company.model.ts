export interface Company {
    id?: number;
    company: string;
    nit?: boolean;
    user_id?: number;
    logo?: string;
    group: boolean;
    group_id?: number;
}
  
export type Companys = Company[];