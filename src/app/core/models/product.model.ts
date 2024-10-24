export interface ProductItem {
    id?: number;
    company_id: number;
    product: string;
    status: boolean;
    sku?: string;
    detail?: string;
    image?: string;
}
  
export type Product = ProductItem[];