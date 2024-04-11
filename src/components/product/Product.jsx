import React from "react";
import { Card, CardContent, CardDescription } from "../ui/card";

const Product = ({
    name,
    image,
    discount,
    discount_price,
    orioriginal_price,
    description,
}) => {
    return (
        <div className="w-full h-full m-2">
            <div className="md:h-full md:w-64 hover:scale-105 transition-all ">
                <Card className=" bg-transparent border-none h-[22rem] w-40 md:h-full md:w-full">
                    <CardContent asChild className=" size-full p-2">
                        <img
                            src={image}
                            className="object-cover h-64 rounded-lg "
                            alt={name}
                        />
                        <div className="text-black px-2 my-1">
                            <h2 className="md:text-base text-sm mb-2 truncate">
                                {name}
                            </h2>
                            <div className="flex space-x-3">
                                <h3 className="font-bold md:text-base text-xs">{`$${discount_price}`}</h3>
                                <p className="line-through opacity-70 md:text-base text-xs">
                                    {orioriginal_price}
                                </p>
                                <p className="font-semibold md:text-base text-xs text-green-600">
                                    {`${discount}% off`}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Product;
