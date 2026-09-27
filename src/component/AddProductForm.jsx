"use client";

import { addProduct } from "@/lib/product/action";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { useRouter } from "next/navigation";


export function AddProductForm() {
    const router = useRouter();
    const handleSubmit = async(formdata)=>{
      const data = await addProduct(formdata)
      if(data.insertedId){
        router.push("/products")
      }
      
    }

  return (
    <Form action={handleSubmit} className="flex w-96 flex-col gap-4" > 
      <TextField
        isRequired
        name="Image"
        type="url"
       
      >
        <Label>Image</Label>
        <Input placeholder="image url" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        name="title"
        type="text"
       
      >
        <Label>Title</Label>
        <Input placeholder="Car model" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        name="Description"
        type="text"
       
      >
        <Label>Description</Label>
        <Input placeholder="description" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        name="Price"
        type="number"
       
      >
        <Label>Price</Label>
        <Input placeholder="30000" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        name="stock"
        type="number"
       
      >
        <Label>Stock</Label>
        <Input placeholder="10" />
        <FieldError />
      </TextField>

     

      <div className="flex gap-2">
        <Button type="submit">
          <Check />
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
  );
}