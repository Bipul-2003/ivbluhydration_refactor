import Product from "@/components/product/Product";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import data from "@/data/data";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import AllProducts from './AllProducts';

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState(data["products"]);

    const handleSearch = (e) => {
        const items = data["products"].filter((item) =>item.name.toLowerCase().includes(e.target.value.toLowerCase()))
        
        setAllProducts(items)
    }

    return (
        <div className="grid grid-flow-row md:grid-cols-8 gap-4 my-4">
            <div className="col-span-2 border-r-4 border-r-gray-300 px-2 hidden md:block">
                <div className=" my-4 mx-2">
                    <p className="text-lg">Catagory</p>
                    <Separator className="my-2" />

                    <div className="flex-col space-y-2">
                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                            ALL
                        </Button>
                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                            Tretment
                        </Button>
                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                            Beauty
                        </Button>
                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                            Weightloss
                        </Button>
                    </div>
                </div>
                <div className=" my-4 mx-2">
                    <p className="text-lg">Price-range</p>
                    <Separator className="my-2" />
                    <div className="flex-col space-y-2">
                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                            ALL
                        </Button>
                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                            50-100
                        </Button>
                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                            100-200
                        </Button>
                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                            200-500
                        </Button>
                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                            500-1000
                        </Button>
                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                            1000-more
                        </Button>
                    </div>
                </div>
                <div className=" my-4 mx-2">
                    <p className="text-lg">Discount</p>
                    <Separator className="my-2" />
                    <div className="flex-col space-y-2">
                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                            ALL
                        </Button>
                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                            0-10 %
                        </Button>
                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                            10-30 %
                        </Button>
                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                            30-40 %
                        </Button>
                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                            40-50 %
                        </Button>
                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                            50-more %
                        </Button>
                    </div>
                </div>
            </div>
            <div className="col-span-6 ">
                <div className=" lg:flex justify-between">
                    <h3 className="font-semibold text-3xl ml-4 ">Products</h3>
                    <div className=" mx-2 flex w-full justify-end my-2">
                        <Input
                            type="text"
                            placeholder="Search the product"
                            className="max-w-sm"
                            onChange={(e) => handleSearch(e)}
                        />
                        <Dialog>
                            <Button className="mx-2 md:hidden">
                                <DialogTrigger>Filters</DialogTrigger>
                            </Button>
                            <DialogContent>
                                <div className=" my-4 mx-2">
                                    <p className="text-lg">Catagory</p>
                                    <Separator className="my-2" />

                                    <div className="flex-col space-y-2">
                                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                                            ALL
                                        </Button>
                                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                                            Tretment
                                        </Button>
                                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                                            Beauty
                                        </Button>
                                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                                            Weightloss
                                        </Button>
                                    </div>
                                </div>
                                <div className=" my-4 mx-2">
                                    <p className="text-lg">Price-range</p>
                                    <Separator className="my-2" />
                                    <div className="flex-col space-y-2">
                                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                                            ALL
                                        </Button>
                                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                                            50-100
                                        </Button>
                                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                                            100-200
                                        </Button>
                                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                                            200-500
                                        </Button>
                                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                                            500-1000
                                        </Button>
                                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                                            1000-more
                                        </Button>
                                    </div>
                                </div>
                                <div className=" my-4 mx-2">
                                    <p className="text-lg">Discount</p>
                                    <Separator className="my-2" />
                                    <div className="flex-col space-y-2">
                                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                                            ALL
                                        </Button>
                                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                                            0-10 %
                                        </Button>
                                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                                            10-30 %
                                        </Button>
                                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                                            30-40 %
                                        </Button>
                                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                                            40-50 %
                                        </Button>
                                        <Button className="h-6 bg-transparent border border-primary text-black mr-2">
                                            50-more %
                                        </Button>
                                    </div>
                                </div>
                                <DialogClose>
                                    <div className=" flex justify-center">
                                        <Button type="submit">Apply</Button>
                                    </div>
                                </DialogClose>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
                <div className="p-3 grid lg:grid-cols-4 grid-cols-2 place-items-center gap-2 overflow-y-scroll scroll-smooth scrollba">
                    {allProducts.map((item) => (
                        <div key={item.id} className="">
                            <Link to={`/products/${item.id}`}>
                                <Product
                                    name={item.name}
                                    discount_price={item.discount_price}
                                    orioriginal_price={item.original_price}
                                    discount={item.discount}
                                    image={item.image}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
