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
import { set } from "date-fns";

const allservices = data.allservices;
// console.log(allservices);

const AllServices = () => {
  const [selected, setSelected] = useState([]);
  const [exceed, setExceed] = useState(false);

  const handelSelect = (item, isChecked) => {
    setSelected((prevState) => {
      const updatedItems = [...prevState]; // Create a copy to avoid mutation
      if (isChecked) {
        if (selected.length < 2) {
          updatedItems.push(item); // Add the item if checked
        } else {
          setExceed(true);
        }
      } else {
        const itemIndex = updatedItems.findIndex(
          (existingItem) => existingItem === item
        );
        if (itemIndex !== -1) {
          updatedItems.splice(itemIndex, 1); // Remove the item if unchecked
          setExceed(false);
        }
      }
      return updatedItems;
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex justify-between items-center px-2">
        <h1 className="font-semibold text-3xl ml-4 my-4 ">Treatments</h1>
        <Link to="/checkout">
          <Button>BOOK</Button>
        </Link>
      </div>
      <div className="text-red-700 text-center" hidden={!exceed}>
        You can only select two services at a time.
      </div>
      <div className="flex mx-3 items-center">
        <span>Selected Treatments: </span>

        {selected.map((item, index) => (
          <div key={index} className="m-1 py-1 px-2 rounded-lg bg-primary/40 ">
            {item}
          </div>
        ))}
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
                  .filter((item) => item.catagory === allservice.catagory)
                  .map((service) => (
                    <div key={service.catagory}>
                      <div className="grid grid-cols-2 gap-2">
                        {service.services.map((items) => (
                          <div
                            className=" p-3 my-2 border border-primary rounded-lg flex space-x-2 items-baseline "
                            key={items.id}
                          >
                            <Checkbox
                              id={items.id}
                              checked={selected.includes(items.name)}
                              onCheckedChange={(checked) =>
                                handelSelect(items.name, checked)
                              }
                            />
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
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </div>
  );
};

export default AllServices;
