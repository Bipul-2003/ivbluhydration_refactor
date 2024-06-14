import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import DateAndTime from "@/components/dateAndTime/DateAndTime";
import PersionalDetails from "@/components/persionalDetails/PersionalDetails";
import {
  Form,
  FormControl,
  FormLabel,
  FormField,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import BookAppintmentPage from "./BookAppointment";

const FormSchema = z.object({
  fullname: z.string().nonempty({
    message: "Full name is required",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  phone: z.string().nonempty({
    message: "Phone number is required",
  }),
  dob: z.date({
    _error: "A date of birth is required",
  }),
  location: z.string().nonempty({
    message: "Location is required",
  }),
  time: z.string().nonempty({
    message: "Time is required",
  }),
});

const CheckoutPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const service = params.get("service");
  const [baseUrl, setBaseUrl] = useState("http://localhost:9999/prebook/api/v1");
  const [formData, setFormData] = useState({
    service: service,
    name: "",
    email: "",
    phno: "",
    date: "",
    slot: "",
    patient: {
      userId: 2,
      role: "USER",
    },
    nurse: null,
    status: "",
    isVisited: false,
    location: "",
    creditCardName: "",
    creditCardNumber: "",
    cvv: "",
    expiryDate: "",
  });

  const [timeSlots, setTimeSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [showPaymentFields, setShowPaymentFields] = useState(false);

  useEffect(() => {
    const fetchTimeSlots = async () => {
      try {
        const response = await fetch(baseUrl + "/slots");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTimeSlots(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTimeSlots();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    const parsedDate = new Date(date);
    setFormData((prevData) => ({
      ...prevData,
      date: parsedDate,
    }));
    setIsPopoverOpen(false);
  };

  const handleSlotChange = (e) => {
    const timeSlot = JSON.parse(e.target.value);
    setFormData((prevData) => ({
      ...prevData,
      slot: timeSlot,
    }));
  };

  const handlePaymentProceed = () => {
    setShowPaymentFields(true);
  };

  const confirmAppointment = () => {
    console.log(formData)
    alert("Appointment Booked Successfully!")
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  return (
    <div>
      <div className=" bg-gray-200 pt-5 pb-20">
        <div className="container mx-auto bg-white shadow-2xl rounded-xl p-12">
          <h3 className="font-bold text-4xl text-center pb-2 text-gray-900">CHECKOUT</h3>
          <Form {...form}>
            <form onSubmit={handleFormSubmit} className="space-y-10">
              <div className="flex items-center p-0 m-0">
                <div className="py-1 px-8 rounded-lg bg-blue-200 border-blue-600 border-4 text-center text-lg text-blue-800">
                  {service}
                </div>
              </div>
              <div className="md:grid grid-cols-2 gap-12">
                <div className="col-span-1">
                  <div className="bg-gray-200 p-8 rounded-lg shadow-inner">
                    <div className="flex items-center space-x-4">
                      <label className="font-medium text-gray-800 w-1/3">Full Name</label>
                      <FormControl className="w-2/3">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                      </FormControl>
                    </div>
                    <div className="flex items-center space-x-4">
                      <label className="font-medium text-gray-800 w-1/3">Email</label>
                      <FormControl className="w-2/3">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email"
                          className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                      </FormControl>
                    </div>
                    <div className="flex items-center space-x-4">
                      <label className="font-medium text-gray-800 w-1/3">Phone Number</label>
                      <FormControl className="w-2/3">
                        <input
                          type="tel"
                          name="phno"
                          value={formData.phno}
                          onChange={handleChange}
                          placeholder="Your Phone Number"
                          className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                      </FormControl>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="bg-gray-200 p-8 rounded-lg shadow-inner">
                    <div className="flex items-center space-x-4">
                      <label className="font-medium text-gray-800 w-1/3">Select Location</label>
                      <FormControl className="w-2/3">
                        <select
                          className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                        >
                          <option value="" disabled>Select Location</option>
                          <option value="Los Angeles">SAN FRANCISCO</option>
                          <option value="Orange County">NEW YORK</option>
                          <option value="Corona">LOS ANGELES</option>
                          <option value="Inland Empire">CHICAGO</option>
                          <option value="Las Vegas">MIAMI</option>
                        </select>
                      </FormControl>
                    </div>
                    <div className="flex items-center space-x-4">
                      <label className="font-medium text-gray-800 w-2/4">Pick a Date</label>
                      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                        <PopoverTrigger asChild>
                          <FormControl className="w-2/3 mt-1 flex">
                            <Button
                              variant={"outline"}
                              className={cn(
                                "text-left font-normal",
                                !formData.date && "text-muted-foreground"
                              )}
                              style={{ marginLeft: "-13%" }}
                            >
                              {formData.date ? format(formData.date, "PPP") : <span>Pick a date</span>}
                              <CalendarIcon className="ml-auto h-4 w-6 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            name="date"
                            selected={formData.date}
                            onSelect={handleDateChange}
                            disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="flex items-center space-x-4">
                      <label className="font-medium text-gray-800 w-1/3">Select Time</label>
                      <FormControl className="w-2/3">
                        <select
                          className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                          name="slot"
                          value={formData.slot}
                          onChange={handleSlotChange}
                        >
                          <option value="" disabled>Select Time</option>
                          {timeSlots.map((slot, index) => (
                            <option key={index} value={JSON.stringify(slot)}>
                              {slot.time} {slot.maridian}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>
              {showPaymentFields && (
                <div className="bg-gray-200 p-8 rounded-lg shadow-inner" style={{ marginLeft: 'auto', marginRight: 'auto', width: '50vw' }}>
                  <div className="flex items-center space-x-4">
                    <label className="font-medium text-gray-800 w-1/3">Card Holder Name</label>
                    <FormControl className="w-2/3">
                      <input
                        type="text"
                        name="creditCardName"
                        value={formData.creditCardName}
                        onChange={handleChange}
                        placeholder="Card Holder Name"
                        className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </FormControl>
                  </div>
                  <div className="flex items-center space-x-4">
                    <label className="font-medium text-gray-800 w-1/3">Card Number</label>
                    <FormControl className="w-2/3">
                      <input
                        type="text"
                        name="creditCardNumber"
                        value={formData.creditCardNumber}
                        onChange={handleChange}
                        placeholder="Card Number"
                        className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </FormControl>
                  </div>
                  <div className="flex items-center space-x-4">
                    <label className="font-medium text-gray-800 w-1/3">CVV</label>
                    <FormControl className="w-2/3">
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        placeholder="CVV"
                        className="mt-2 block w-50 p-3 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </FormControl>
                  </div>
                  <div className="flex items-center space-x-4">
                    <label className="font-medium text-gray-800 w-1/3">Expiry Date</label>
                    <FormControl className="w-2/3">
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </FormControl>
                  </div>
                </div>
              )}
              <div className="w-full flex justify-center">
                {!showPaymentFields ? (
                  <Button
                    type="button"
                    onClick={handlePaymentProceed}
                    className="my-0 flex bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  >
                    Proceed for payment
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="my-10 flex bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    onClick={confirmAppointment}
                  >
                    Confirm Appoitment
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </div>
      </div>
      {/* <hr />
      Old design
      <hr />
      <hr />
      <div className="my-2 mx-4">
        <h3 className="font-semibold text-3xl text-center pb-8">CHECKOUT Old</h3>
        <div className="md:grid grid-cols-2 gap-x-6">
          <div className="col-span-1 mt-4">
            <div className="flex items-center">
              <div className="m-1 py-2 w-fit px-8 rounded-lg bg-primary/40 border-primary border-4">
                {service}
              </div>
            </div>
            <PersionalDetails />
          </div>
          <div className="col-span-1 mt-4">
            <DateAndTime />
          </div>
        </div>
      </div>
      <hr>
      </hr>
      <hr>
      </hr>
      <div>
        <BookAppintmentPage></BookAppintmentPage>
      </div> */}
    </div>
  );
};

export default CheckoutPage;
