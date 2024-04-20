import React, { useState } from "react";
import data from "../data/data.json";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const allservices = data.allservices;
// console.log(allservices);

const AllServices = () => {
    // const [catagory, setCatagory] = useState();

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center px-2">
                <h1 className="font-semibold text-3xl ml-4 my-4 ">Services</h1>
                <Link to="/checkout">
                    <Button>BOOK</Button>
                </Link>
            </div>

            <Accordion type="single" collapsible>
                {allservices.map((allservice) => (
                    <div className="" key={allservice.catagory}>
                        <AccordionItem value={allservice.catagory}>
                            <AccordionTrigger className="border-2 rounded-md p-2 bg-primary/20 my-2">
                                {allservice.catagory}
                            </AccordionTrigger>
                            <AccordionContent className="h-80 overflow-y-scroll">
                                {allservices
                                    .filter(
                                        (item) =>
                                            item.catagory ===
                                            allservice.catagory
                                    )
                                    .map((service) => (
                                        <div key={service.catagory}>
                                            <div className="grid grid-cols-2 gap-2">
                                                {service.services.map(
                                                    (items) => (
                                                        <div
                                                            className=" p-3 my-2 border border-primary rounded-lg flex space-x-2 items-baseline "
                                                            key={items.id}>
                                                            <Checkbox
                                                                id={items.id}
                                                            />
                                                            <label
                                                                htmlFor={
                                                                    items.id
                                                                }>
                                                                <div className="">
                                                                    <h2 className="text-xl font-bold ">
                                                                        {
                                                                            items.name
                                                                        }
                                                                    </h2>
                                                                    <p className="mb-4 text-sm ">
                                                                        {
                                                                            items.description
                                                                        }
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
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    ))}
                            </AccordionContent>
                        </AccordionItem>
                    </div>
                ))}
            </Accordion>
        </div>
    );
};

export default AllServices;
