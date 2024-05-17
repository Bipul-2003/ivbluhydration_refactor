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


// const allservices = data.treatmets;
// console.log(allservices);

const AllTreatmentsPage = () => {
  const [response, setData] = useState(data.treatmets);

  // console.log(data);

  // const [exceed, setExceed] = useState(false);

  // const handelSelect = (item, isChecked) => {
  //   setSelected((prevState) => {
  //     const updatedItems = [...prevState]; // Create a copy to avoid mutation
  //     if (isChecked) {
  //       if (selected.length < 2) {
  //         updatedItems.push(item); // Add the item if checked
  //       } else {
  //         setExceed(true);
  //       }
  //     } else {
  //       const itemIndex = updatedItems.findIndex(
  //         (existingItem) => existingItem === item
  //       );
  //       if (itemIndex !== -1) {
  //         updatedItems.splice(itemIndex, 1); // Remove the item if unchecked
  //         setExceed(false);
  //       }
  //     }
  //     return updatedItems;
  //   });
  // };
  const img =
    "https://purepng.com/public/uploads/large/purepng.com-thinking-womanthinking-womanwomengirlfemalethinkingbusiness-women-thinkinggirl-sitting-thinking-1421526926018eaewd.png";
  return (
    <div className=" mx-auto">
      <div className="flex-row p-6 bg-[url(https://cdn.vectorstock.com/i/1000v/53/34/abstract-hand-drawn-green-organic-shapes-vector-44235334.avif)] bg-fill h-64 ">
        <h1 className="font-semibold text-3xl ml-4 my-4 text-center">
          IV HYDRATION & VITAMIN THERAPY
        </h1>
        <p className="text-center lg:tracking-wider tracking-tight leading-loose text-xs sm:text-xs lg:px-60">
          Customized to boost your health and vitality, our treatments are
          expertly formulated to nourish, invigorate, and restore your
          well-being at a cellular level. Begin your path to peak health today.
        </p>
        {/* <Link to="/checkout">
          <Button>BOOK</Button>
        </Link> */}
        <div className="w-full flex justify-center md:pt-4 px-8">
          <a href="https://ivbluhydration.myaestheticrecord.com/online-booking/book-appointment">
          <Button>BOOK NOW</Button>
          </a>
        </div>
      </div>
      <div className="flex mx-3 items-center">
        {/* <span>Selected Treatments: </span> */}

        {/* {selected.map((item, index) => (
          <div key={index} className="m-1 py-1 px-2 rounded-lg bg-primary/40 ">
            {item}
          </div>
        ))} */}
      </div>

      <Accordion type="single" collapsible>
        {response.map((item) => (
          <div className="" key={item.title}>
            <AccordionItem value={item.title}>
              <AccordionTrigger className="border-2 rounded-md p-2 bg-primary/20 my-2">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="">
                <div className="grid grid-cols-5 gap-x-8">
                  <div className="col-span-2 h-25 bg-primary/30 rounded-lg">
                    <img
                      src="https://purepng.com/public/uploads/large/purepng.com-thinking-womanthinking-womanwomengirlfemalethinkingbusiness-women-thinkinggirl-sitting-thinking-1421526926018eaewd.png"
                      alt=""
                      className="object-cover h-full"
                    />
                  </div>
                  <div className="col-span-3 text-base font-light font-sans">
                    <span className="font-bold ">Purpose: </span>
                    {item.Purpose}
                    <br />
                    <div className="pt-2">

                    <span className="font-bold ">Key Benefits:</span>
                    </div>
                    <ul className="">
                      {item.keyBenefits.map((benefit, index) => (
                        <li key={index}>{`• ${benefit}`}</li>
                      ))}
                    </ul>
                    <div className="pt-2">

                    ‍<span className="font-bold">Ingredients:</span>
                    </div>
                    <ul>
                      {item.Ingredients.map((ingredient, index) => (
                        <li key={index}>{`• ${ingredient}`}</li>
                      ))}
                    </ul>
                    <p className="text-base font-light font-sans pt-2"><span className="font-bold">Ideal For: </span>
                      {item.idealFor}
                    </p>
                    <div className="w-full flex space-x-8 px-2">
                      {/* <Button
                        // variant="outline"
                        className="py-6 hover:bg-primary"
                      >
                        BOOK NOW HYDRATION BOOST $189
                      </Button> */}

                      <div className="my-2 flex gap-x-4 items-baseline pt-2 ">
                        {/* <Checkbox
                          id={1}
                          // checked={selected.includes(items.name)}
                          // onCheckedChange={(checked) =>
                          //   handelSelect(items.name, checked)
                          // }
                          className="bg-white"
                        /> */}
                        {item.options.map((option, index) => (
                          <div
                            key={index}
                            className="lg:w-64 h-full p-3  bg-primary/10  border border-primary rounded-lg "
                          >
                            <h2 className="text-base font-bold pl-2">
                              {option.name}
                            </h2>
                            <ul className="list-disc marker:text-black pl-8 pb-2 ">
                              <li>Faster recovery</li>
                              <li>Increase energy</li>
                              <li>Boost Stamina</li>
                            </ul>
                            <Separator />
                            <div className="flex justify-between my-4">
                              <p className="">30 minutes</p>
                              <p className="font-bold text-xl">{`$${option.price}`}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* <Button
                        // variant="outline"
                        className="py-6 hover:bg-primary"
                      >
                        BOOK NOW ATHLETIC RECOVERY $389
                      </Button> */}
                      {/* <div className="bg-primary/10 lg:w-80 p-3 my-2 border border-primary rounded-lg flex space-x-2 items-baseline ">
                        <Checkbox
                          id={2}
                          // checked={selected.includes(items.name)}
                          // onCheckedChange={(checked) =>
                          //   handelSelect(items.name, checked)
                          // }
                          className="bg-white"
                        />
                        <label htmlFor={2}>
                          <div className="">
                            <h2 className="text-xl font-bold pl-2">
                              ATHLETIC RECOVERY
                            </h2>
                            <ul className="list-disc marker:text-black pl-8 pb-2 ">
                              <li>Super-Faster recovery</li>
                              <li>Increase energy</li>
                              <li>Boost Stamina</li>
                            </ul>
                            <Separator />
                            <div className="flex justify-between my-4">
                              <p className="">30 minutes</p>
                              <p className="font-bold text-xl">$389</p>
                            </div>
                          </div>
                        </label>
                      </div> */}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </div>
  );
};

export default AllTreatmentsPage;