import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    return (
        <div className=" flex justify-center items-center">
            <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-screen-xl relative"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}>
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className=" sm:h-[30rem]">
                                <img
                                    src="https://assets-global.website-files.com/6492bbb37e861bae839b64d8/657d2663728c9a6088e6695e_Fitness%20Man.png"
                                    className="object-contain"
                                    alt="Flowbite Logo"
                                />{" "}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-6 bg-inherit hidden sm:flex  " />
                <CarouselNext className="absolute right-6 bg-inherit hidden sm:flex" />
            </Carousel>
        </div>
    );
};

export default Home;
