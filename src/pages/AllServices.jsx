import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import data from "../data/data.json";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

const allservices = data.allservices;
// console.log(allservices);

const AllServices = () => {
    const [catagory, setCatagory] = useState();

    return (
        <div className="max-w-screen-lg mx-auto">
            <h1 className="font-semibold text-3xl ml-4 my-4 ">Services</h1>
            <div className="flex justify-between px-2">
                <div className="">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="px-4 py-1  rounded-xl border bg-white">
                            {catagory ? catagory : "Select Calagory"}
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel className="bg-white text-black">
                                Catagories
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup
                                className="bg-primary "
                                value={catagory}
                                onValueChange={setCatagory}>
                                {allservices.map((service) => (
                                    <DropdownMenuRadioItem
                                        key={service.catagory}
                                        value={service.catagory}>
                                        {service.catagory}
                                    </DropdownMenuRadioItem>
                                ))}
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <Link to="/checkout">
                    <Button>BOOK</Button>
                </Link>
            </div>
            <div className="">
                {allservices
                    .filter((cat) => cat.catagory === catagory)
                    .map((service) => (
                        <div key={service.catagory}>
                            <div className="">
                                {service.services.map((items) => (
                                    <div
                                        className=" p-5 my-2 border border-primary rounded-lg flex space-x-2 items-baseline "
                                        key={items.id}>
                                        <Checkbox id={items.id} />
                                        <label htmlFor={items.id}>
                                            <div className="">
                                                <h2 className="text-xl font-bold ">
                                                    {items.name}
                                                </h2>
                                                <p className="mb-4 text-sm ">
                                                    {items.description}
                                                </p>
                                                <Separator />
                                                <div className="flex justify-between my-4">
                                                    <div className="">
                                                        <p>{`${items.duration} minutes`}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default AllServices;
