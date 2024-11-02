export type Sizes = 'small' | 'medium' | 'large' | 'huge';

export type Product = {
    name: string,
    createAt: Date,
    stock: number,
    size?: Sizes
}
