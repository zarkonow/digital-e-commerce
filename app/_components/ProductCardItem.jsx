import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

function ProductCardItem({ product }) {
  return (
    <div className="border">
      <Card className="p-3">
        <Image
          src={product?.image}
          alt={product.name}
          width={400}
          height={400}
        />
        <div className="mt-3 ">
          <h3 className="font-bold text-lg">{product.name}</h3>
          <p>{product.description}</p>
          <p className="font-bold text-lg text-yellow-500"> ${product.price}</p>

          <div className="mt-3 md:flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <Image
                src={product?.user?.image}
                alt="user"
                width={20}
                height={20}
                className="rounded-full"
              />
              <h2 className="text-sm text-gray-400">{product?.user?.name}</h2>
            </div>
            <Button size="sm">Add to Cart</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ProductCardItem;
