import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function Products(){
    const{ data, 
    isLoading}
} = useSWR("/api/products", fetcher);

if (isLoading) {
    return <h1>load...</h1>;}

    return (
        <ul>
          {products.map((product) => {
            return (
              <li key={product.id}>
                <h2>{product.name}</h2>
                <p>
                  {product.price}
                  {product.currency}
                </p>
              </li>
            );
          })}
        </ul>
      );
    }
}

