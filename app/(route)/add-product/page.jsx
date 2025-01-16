import { Input } from "@/components/ui/input";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

function AddProduct() {
  const categoryOption = [
    "source code",
    "UI Kit",
    "Documents",
    "Fonts",
    "Theme",
    "Video",
    "Illustration",
    "Other",
  ];
  return (
    <div className="mt-5">
      <h2 className="text-3xl font-bold">Add New Product</h2>
      <p>Start adding product item details to sell your item</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        <div></div>
        <div className="flex flex-col gap-5">
          <div>
            <h4>Product Title</h4>
            <Input name="title" placeholder="Ex.UI Kit in Figma" />
          </div>
          <div>
            <h4> Price</h4>
            <Input type="number" name="price" placeholder="Ex.$99" />
          </div>
          <div>
            <h4>Category</h4>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categoryOption?.map((category, index) => (
                  <SelectItem key={index} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <h4> Description</h4>
            <Textarea
              name="description"
              placeholder="Add Product Description"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
