import React, { useState } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import {
    Form,
    FormControl,
    FormLabel,
    FormField,
    FormMessage,
    FormItem
} from "../ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const FormSchema = z.object({
    dob: z.date({
        required_error: "A date of birth is required.",
    }),
});

const DateAndTime = () => {
    const isDateBeforeToday = (date) => {
        const today = new Date();
        return date.isBefore(today, "day");
    };
    const form = useForm({
        resolver: zodResolver(FormSchema),
    });

    function onSubmit(data) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">
                        {JSON.stringify(data, null, 2)}
                    </code>
                </pre>
            ),
        });
    }

    return (
        <div>
            <div className="">
                <div className="">
                    <div className="flex-row items-center">
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-8">
                                <FormField
                                    control={form.control}
                                    name="dob"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel className="font-bold my-3 text-xl">
                                                Pick a Date
                                            </FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-full pl-3 text-left font-normal",
                                                                !field.value &&
                                                                    "text-muted-foreground"
                                                            )}>
                                                            {field.value ? (
                                                                format(
                                                                    field.value,
                                                                    "PPP"
                                                                )
                                                            ) : (
                                                                <span>
                                                                    Pick a date
                                                                </span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50 " />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent
                                                    className="w-auto p-0 "
                                                    align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={
                                                            field.onChange
                                                        }
                                                        disabled={(date) =>
                                                            date > new Date() ||
                                                            date <
                                                                new Date(
                                                                    "1900-01-01"
                                                                )
                                                        }
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                {/* <Button type="submit">Submit</Button> */}
                            </form>
                        </Form>
                    </div>
                </div>
                <div className=" w-full flex-row items-center justify-center">
                    <p className="font-bold my-3 text-xl">Select Timing</p>
                    <div className="grid lg:grid-cols-8 grid-cols-3 gap-y-10 lg:gap-x-1 gap-x-0 place-items-center place-content-center">
                        {Array.from({ length: 20 }).map((_, index) => (
                            <Button
                                key={index}
                                variant="outline"
                                className="col-span-1">
                                10-11 AM
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
