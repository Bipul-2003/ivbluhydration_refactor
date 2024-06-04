import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import data from "@/data/data";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

const ProductMainPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    if (id) {
      // console.log(id);

      const product = data["products"].find(
        (product) => product["id"] === Number(id)
      );
      setProduct(product);
    }
  }, [id]);

  return (
    <div className="grid md:grid-cols-6 place-items-center my-3">
      <div className=" col-span-2 h-full w-full bg-transparent">
        <img
          src={product.image}
          className=" object-scale-down object-center rounded-lg mix-blend-multiply"
          alt={product.name}
        />
      </div>
      <div className="col-span-4 px-8 mt-5">
        <p>Catagory</p>
        <h1 className="text-3xl font-base my-2">{product.name}</h1>
        <p className="font-semibold md:text-xl text-xs text-green-600 mt-3">
          Special Price
        </p>
        <div className="flex items-center space-x-5">
          <h2 className="font-bold md:text-2xl text-xl">{`$${product.discount_price}`}</h2>
          <p className="line-through opacity-70 md:text-xl text-base">
            {product.original_price}
          </p>
          <p className="font-semibold md:text-2xl text-base text-green-700">
            {`${product.discount}% off`}
          </p>
        </div>
        <div className=" flex items-center my-4 md:my-6">
          <Button variant="outline" className="size-12 ">
            <PlusIcon />
          </Button>
          <p className="mx-2">1</p>
          <Button variant="outline" className="size-12 ">
            <MinusIcon />
          </Button>
        </div>
        <p className="mt-2 md:mt-6 max-w-2xl">{product.description}</p>
        <div className="flex space-x-4 my-4">
          <Drawer>
            {/* <DrawerTrigger>
                            <Button variant="outline" className="h-12 w-32">
                                ADD TO CART
                            </Button>
                        </DrawerTrigger> */}
            <DrawerTrigger>
              <Button variant="outline" className="h-12 w-32">
                BUY NOW
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="flex items-center justify-center w-screen my-3">
                <div className="">
                  <p>You may interested..</p>
                  <div className="flex m-4">
                    <h3 className="mr-32 lg:mr-64">Additional item 1</h3>
                    <div className=" flex items-center">
                      <Button variant="outline" className="h-6 ">
                        <PlusIcon />
                      </Button>
                      <p className="mx-2">1</p>
                      <Button variant="outline" className="h-6 ">
                        <MinusIcon />
                      </Button>
                    </div>
                  </div>
                  <div className="flex m-4">
                    <h3 className="mr-32 lg:mr-64">Additional item 2</h3>
                    <div className=" flex items-center">
                      <Button variant="outline" className="h-6 ">
                        <PlusIcon />
                      </Button>
                      <p className="mx-2">1</p>
                      <Button variant="outline" className="h-6 ">
                        <MinusIcon />
                      </Button>
                    </div>
                  </div>
                  <div className="flex m-4">
                    <h3 className="mr-32 lg:mr-64">Additional item 3</h3>
                    <div className=" flex items-center">
                      <Button variant="outline" className="h-6 ">
                        <PlusIcon />
                      </Button>
                      <p className="mx-2">1</p>
                      <Button variant="outline" className="h-6 ">
                        <MinusIcon />
                      </Button>
                    </div>
                  </div>
                  <div className="flex m-4">
                    <h3 className="mr-32 lg:mr-64">Additional item 4</h3>
                    <div className=" flex items-center">
                      <Button variant="outline" className="h-6 ">
                        <PlusIcon />
                      </Button>
                      <p className="mx-2">1</p>
                      <Button variant="outline" className="h-6 ">
                        <MinusIcon />
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-center my-6">
                    <DrawerClose>
                      <Link to="/checkout">
                        <Button>CHECKOUT</Button>
                      </Link>
                    </DrawerClose>
                  </div>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default ProductMainPage;
