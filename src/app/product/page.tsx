"use client";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import data from "@/lib/data.json";
import { useCallback, useState } from "react";

export default function TableDemo() {
  const [products, setProduct] = useState<Product[]>(data);
  const [search, setSearch] = useState("");
  const filter = useCallback(
    (s: string) => {
      setSearch(s);
      if (search.length > 0) {
        const newReg = new RegExp(search.trim(), "ig");
        setProduct(
          data.filter(
            (p) =>
              newReg.test(p.name) ||
              newReg.test(p.category) ||
              newReg.test(p.price.toString()) ||
              newReg.test(p.stock.toString())
          )
        );
      } else {
        setProduct(data);
      }
    },
    [search]
  );
 const totalProducts = products.length;
const totalPrice = data.reduce((acc, p)=> acc + p.price, 0);
const totalStock = data.reduce((acc, p)=> acc + p.stock, 0);
  return (
    <div className=" p-8 space-y-6">
        <div className=" flex gap-4 ">
            <Card className=" flex-1 h-40 text-center">
                <span className="font-bold"> Total Product:</span>
                <p>{totalProducts}</p>
            </Card>
            <Card className=" flex-1 h-40 text-center">
                <span className="font-bold">Total Price:</span>
                <p>${totalPrice}</p>
            </Card>
            <Card className=" flex-1 h-40 text-center">
                <span className="font-bold">Total Stock:</span>
                <p>{totalStock}</p>
            </Card>
        </div>
      <div>
        <Input value={search} onChange={(e) => filter(e.target.value)} />
      </div>
      <Table>
        <TableCaption>A list of your recent products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead> Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Subcategory</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Discount</TableHead>
            <TableHead>Colors</TableHead>
            <TableHead>Sizes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.map((p) => (
            <TableRow key={p.slug}>
              <TableCell>
                <img className="w-12 h-12 object-cover" src={p.imageUrl[0]} />
              </TableCell>
              <TableCell className="font-medium">{p.name}</TableCell>
              <TableCell>{p.price}</TableCell>
              <TableCell>{p.category}</TableCell>
              <TableCell>{p.subcategory}</TableCell>
              <TableCell>{p.stock}</TableCell>
              <TableCell>{p.description}</TableCell>
              <TableCell>{p.discount}</TableCell>
              <TableCell>{p.colors}</TableCell>
              <TableCell>
                <Badge>{p.sizes}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
