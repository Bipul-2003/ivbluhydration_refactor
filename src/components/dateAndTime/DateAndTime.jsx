import React, { useState } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";

const DateAndTime = () => {
    const [date, setDate] = useState();
    const isDateBeforeToday = (date) => {
        const today = new Date();
        return date.isBefore(today, "day");
    };

    return (
        <div>
            <div className="grid md:grid-flow-col">
                <div className="">
                    <div className="flex-row items-center">
                        <Button
                            variant={"outline"}
                            className={cn(
                                "lg:w-96 w-80 ml-2 justify-center text-left font-normal",
                                !date && "text-muted-foreground"
                            )}>
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? (
                                format(date, "PPP")
                            ) : (
                                <span>Pick a date</span>
                            )}
                        </Button>
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={{ before: new Date() }}
                            initialFocus
                            className=""
                        />
                    </div>
                </div>
                <div className=" w-full flex-row items-center justify-center">
                    <p className="font-bold my-11 text-xl">Select Timing</p>
                    <div className="grid lg:grid-cols-8 grid-cols-3 gap-y-10 lg:gap-x-1 gap-x-0 place-items-center place-content-center">
                        {Array.from({ length: 20 }).map((_, index) => (
                            <Button
                                key={index}
                                variant="outline"
                                className="col-span-1">
                                10-20
                            </Button>
                        ))}
                    </div>
                    <Button className="my-10 w-full">Submit</Button>
                </div>
            </div>
        </div>
    );
};

export default DateAndTime;
