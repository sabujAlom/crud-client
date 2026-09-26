import {CircleDollar} from "@gravity-ui/icons";
import {Button, Card, Link} from "@heroui/react";

export function ProductCard({product}) {
    console.log(product)
  return (
    <Card className="w-[400px]">
      <img
          alt={product.title}
          className="pointer-events-none aspect-square w-full rounded-2xl object-cover select-none"
          loading="lazy"
          src={product.image}
        />
      <Card.Header>
        <Card.Title>{product.title}</Card.Title>
        <Card.Description>
        {product.description}
        </Card.Description>
      </Card.Header>
      <p>$ {product.price}</p>
      <p>Stock: {product.stock}</p>
      <Card.Footer>
        <Link
          
          href="/"
         
        ><Button>View Details</Button>
          
          <Link.Icon aria-hidden="true" />
        </Link>
      </Card.Footer>
    </Card>
  );
}