import { getAllData } from "@/lib/product/data";
import {Button, Table} from "@heroui/react";
import { DeleteModal } from "./DeleteModal";
import Link from "next/link";

export async function  AllProductTable () {
    const products = await getAllData()
    console.log(products)
  return (
     <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>Products Name</Table.Column>
            <Table.Column>Price</Table.Column>
            <Table.Column>Stocks</Table.Column>
            <Table.Column>Action</Table.Column>
          </Table.Header>
          <Table.Body>
             {
              products.map(product=> <Table.Row key={product._id}>
              <Table.Cell>{product.title}</Table.Cell>
              <Table.Cell>{product.price}</Table.Cell>
              <Table.Cell>{product.stock}</Table.Cell>
              <Table.Cell>
                 <Link href={`/products/${product._id}/edit`}>
                 <Button className="mr-2">
                     Edit
                 </Button>
                 </Link>
                  <DeleteModal 
                  productId={product._id}
                  />
              </Table.Cell>
            </Table.Row>)
             }
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}