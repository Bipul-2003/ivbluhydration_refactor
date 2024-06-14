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
        <div className=" bg-gray-100  flex items-center justify-center">
            <div className="w-full max-w-2xl p-6 bg-white shadow-md rounded-lg">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem className="flex flex-row-12">
                                    <div className="flex-col md:flex-col-6 md:items-cente">
                                        <div className="font-bold pt-3 text-xl text-center">
                                            Select Location&nbsp;:&nbsp;&nbsp;
                                        </div>
                                    </div>
                                    <div className="flex-col md:flex-col-6 md:items-cente">
                                        <select className="border border-gray-300 rounded-md p-2  w-full">
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <option key={index} className="text-center">
                                                    SAN FRANCISCO
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="dob"
                            render={({ field }) => (
                                <FormItem className="flex flex-row-12">
                                    <div className=" flex-col md:flex-col-6 md:items-center">
                                        <div className="font-bold pt-3 text-xl text-center">
                                            Pick a Date & Time&nbsp;:&nbsp;&nbsp;
                                        </div>
                                    </div>
                                    <div className=" flex-col md:flex-col-12 md:items-center">

                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-full md:w-auto mt-2 md:mt-0 pl-3 text-left font-normal",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                        style={{width:'8vw'}}
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date > new Date() || date < new Date("1900-01-01")
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <select className="border border-gray-300 rounded-md p-2 mt-2 md:mt-0 md:ml-2 w-full md:w-auto">
                                            {Array.from({ length: 20 }).map((_, index) => (
                                                <option key={index} className="text-center">
                                                    10-11 AM
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="w-full flex justify-center">
                            <Button
                                type="submit"
                                className="my-10 w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark"
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default DateAndTime;
