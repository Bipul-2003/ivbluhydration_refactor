import React, { useState, useCallback } from "react";
import data from "../data/data.json";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BookAppintmentPage from "./BookAppointment";
import '../css/Appointment.css';
import logo from '../assets/images/check-mark.png';
import { Link } from "react-router-dom";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

const AllTreatmentsPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isBookingClicked, setIsBookingClicked] = useState(false);
  const [response] = useState(data.treatmets);
  const [service, setService] = useState("");

  const toggleCheckbox = useCallback((optionId, service) => {
    setSelectedService(prevSelectedService =>
      prevSelectedService === optionId ? null : optionId
    );
    setIsBookingClicked(prev => !prev);
    setService(service)
  }, []);

  const openBooking = useCallback((val) => {
    setSelectedService(val.name);
    setIsBookingClicked(prev => !prev);
  }, []);

  return (
    <div className="mx-auto">
      <div className="flex-row p-6 bg-[url(https://cdn.vectorstock.com/i/1000v/53/34/abstract-hand-drawn-green-organic-shapes-vector-44235334.avif)] bg-fill h-64 ">
        <h1 className="font-semibold text-3xl ml-4 my-4 text-center">
          IV HYDRATION & VITAMIN THERAPY
        </h1>
        <p className="text-center lg:tracking-wider tracking-tight leading-loose text-xs sm:text-xs lg:px-60">
          Customized to boost your health and vitality, our treatments are expertly formulated to nourish, invigorate, and restore your well-being at a cellular level. Begin your path to peak health today.
        </p>
        <div className="w-full flex justify-center md:pt-4 px-8">
          <a href="https://ivbluhydration.myaestheticrecord.com/online-booking/book-appointment">
            <Button>BOOK NOW</Button>
          </a>
        </div>
      </div>

      <Accordion type="single" collapsible>
        {response.map(item => (
          <div className="" key={item.title}>
            <AccordionItem value={item.title}>
              <AccordionTrigger className="border-2 rounded-md p-2 bg-primary/20 my-2">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="">
                <div className="md:grid grid-cols-5 gap-x-8">
                  <div className="col-span-2 bg-primary/30 rounded-lg" style={{ height: 'fit-content' }}>
                    <img
                      src="https://purepng.com/public/uploads/large/purepng.com-thinking-womanthinking-womanwomengirlfemalethinkingbusiness-women-thinkinggirl-sitting-thinking-1421526926018eaewd.png"
                      alt=""
                      className="object-cover"
                    />
                  </div>
                  <div className="col-span-3 text-sm mt-4">
                    <span className="font-bold  tracking-wider">Purpose: </span>
                    {item.Purpose}
                    <br />
                    <div className="pt-4">
                      <span className="font-bold   tracking-wider">Key Benefits:</span>
                    </div>
                    <ul className="tracking-wider">
                      {Object.entries(item.keyBenefits).map(([key, value]) => (
                        <li key={key}>
                          <span className="font-bold">{`• ${key}`}</span>
                          <span>{value}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <span className="font-bold">Ingredients:</span>
                    </div>
                    <ul className="tracking-wider">
                      {Object.entries(item.Ingredients).map(([key, value]) => (
                        <li key={key}>
                          <span className="font-bold">{`• ${key}`}</span>
                          <span>{value}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="pt-4 tracking-wider">
                      <span className="font-bold tracking-wider">Ideal For: </span>
                      {item.idealFor}
                    </p>
                    <div className="w-full flex space-x-8 px-2">
                      <div className="my-2 flex gap-x-4 items-baseline pt-2 col">
                        {item.options.map((option, index) => (
                          <div
                            key={index}
                            className="text-xs p-3 bg-primary/10"
                            onClick={() => toggleCheckbox(option.id, option.name)}
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
                              <p>30 minutes</p>
                              <p className="font-bold text-xl">{`$${option.price}`}</p>
                            </div>
                            {selectedService === option.id && (
                              <div>
                                <img
                                  src={logo}
                                  alt="Styled Logo"
                                  style={{ width: '20px', height: 'auto', borderRadius: '10px', marginTop: '-20px' }}
                                />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="my-2 flex gap-x-4 items-baseline pt-2 col">

                        <div
                          className="text-xs p-3 bg-primary/10"
                          style={{ height: '19vh', maxWidth: '35vw' }}
                          onClick={() => toggleCheckbox()}
                        >
                          {selectedService && (
                            <div>
                              <div className="flex-row p-6  bg-fill h-20 ">
                                <h1 className="font-semibold text-3xl ml-4 my-4 text-center">
                                  {service}
                                </h1>
                                <div className="w-full flex justify-center md:pt-4 px-8">
                                  <Link  to={`/checkout/?service=${service}`}>
                                    <Button>BOOK NOW</Button>
                                  </Link>
                                </div>
                              </div>
                              {/* <BookAppintmentPage selectedService={selectedService} /> */}
                            </div>
                          )}
                        </div>
                      </div>
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
