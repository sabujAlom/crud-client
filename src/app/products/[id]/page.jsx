import { getProductById } from "@/lib/product/data";
import { Button, Card, CloseButton } from "@heroui/react";
import React from "react";

const ProductDetails = async ({ params }) => {
  const pageParams = await params;
  const { id } = pageParams;
  const data = await getProductById(id);
  const { title, description, price, image, stock } = data;
//   console.log(title);
  return (
    <div className="grid w-full h-screen items-center justify-center border">
      <div className="grid w-full max-w-2xl grid-cols-12 gap-4 p-4 border ">
        {/* Row 1: Large Product Card - Available Soon */}
        <Card className="col-span-12 flex h-auto min-h-[270px] flex-col sm:flex-row">
          
          <div className="relative h-[300px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-auto sm:w-1/2">
            <img
              alt="Cherries"
              className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
              loading="lazy"
              src={image}
            />
          </div>
          <div className="flex flex-1 flex-col gap-3 sm:w-1/2">
            <Card.Header className="gap-1">
              <Card.Title className="pe-8">{title}</Card.Title>
              <Card.Description>{description}</Card.Description>
              <CloseButton
                aria-label="Close banner"
                className="absolute end-3 top-3"
              />
            </Card.Header>
            <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col">
                <span className="text-sm text-muted font-medium">
                  $ {price}
                </span>
                <span className="text-xs text-muted">Stock: {stock}</span>
              </div>
              <Button className="w-full sm:w-auto">Buy Now</Button>
            </Card.Footer>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetails;
