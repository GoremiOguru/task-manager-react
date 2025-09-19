interface Product {
    name: string;
    slug: string;
    price: number;
    category: string;
    subcategory: string;
    description: string;
    imageUrl:string[];
    stock: number;
    sizes: Array<string>;
    colors: string[];
    tags: string[];
    discount: number;
    features?: Array<string>;
    specs: Array<string>;
}