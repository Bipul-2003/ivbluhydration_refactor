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
               
                <div className="md:grid grid-cols-2 gap-x-6 ">
                    <div className="col-span-1 mt-4">
                        <PersionalDetails />
                    </div>
                    <div className="col-span-1 mt-4">
                        <DateAndTime />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CkeckoutPage;
