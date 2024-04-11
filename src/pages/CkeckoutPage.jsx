import DateAndTime from "@/components/dateAndTime/DateAndTime";
import PersionalDetails from "@/components/persionalDetails/PersionalDetails";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const CkeckoutPage = () => {
    return (
        <div>
            <div className="my-2 mx-4">
                <h3 className="font-semibold text-3xl text-center pb-8">
                    CHECKOUT
                </h3>
                <Accordion
                    type="single"
                    collapsible
                    defaultValue="1"
                    className="w-full space-y-4">
                    <AccordionItem value="1">
                        <AccordionTrigger className="border-2 rounded-md p-2 bg-primary/20">
                            Persional details
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="max-w-screen-xl my-10 mx-auto">
                                <PersionalDetails />
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="2">
                        <AccordionTrigger className=" border-2 rounded-md p-2 bg-primary/20">
                            Date and Time
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="max-w-screen-xl my-10 mx-auto">
                                <DateAndTime />
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default CkeckoutPage;
