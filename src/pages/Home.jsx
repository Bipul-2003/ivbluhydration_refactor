import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import data from "@/data/data";
import { Link } from "react-router-dom";
const Home = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    return (
        <main className="">
            <section className="  mx-auto my-2">
                <Carousel
                    plugins={[plugin.current]}
                    opts={{
                        align: "start",
                        loop: true,
                      }}
                    className="w-full relative"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}>
                    <CarouselContent>
                        {data["promotion"].map((promotion) => (
                            <CarouselItem key={promotion.name}>
                                <div
                                    className={`relative sm:h-[30rem] sm:bg-[url(${promotion.image})] bg-cover`}>
                                    <img
                                        src={promotion.image}
                                        className="object-fill w-[100vw] opacity-90"
                                        alt="Flowbite Logo "
                                    />{" "}
                                    <div className="absolute lg:left-72 md:bottom-32 md:left-20 left-4 bottom-6 lg:max-w-lg max-w-52">
                                        <h2 className="font-bold lg:text-5xl text-xs py-2">
                                            {promotion.offer_range}
                                        </h2>
                                        <p className="opacity-70 text-[0.60rem] md:text-base">
                                            {promotion.description}
                                        </p>
                                        <Link to="/all-produts">
                                            <Button className="font-semibold lg:text-base text-xs my-2 w-32 md:w-fit truncate">
                                                <p className="truncate w-32 lg:w-full">
                                                    {promotion.name}
                                                </p>
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-6 bg-inherit hidden sm:flex  " />
                    <CarouselNext className="absolute right-6 bg-inherit hidden sm:flex" />
                </Carousel>
            </section>

            <section className="bg-gradient-to-bl from-primary/60 to-primary/30 space-y-4 py-10 mt-6 px-1">
                <h2 className="text-center font-semibold text-2xl sm:text-4xl">
                    Begin Your Wellness Transformation
                </h2>
                <div className="max-w-xl sm:max-w-4xl mx-auto px-2 flex-col flex items-center space-y-3">
                    <p className="text-center tracking-wider leading-loose text-xs sm:text-base">
                        At ivBLU Hydration, we redefine what it means to feel
                        truly alive. Our innovative IV hydration and vitamin
                        therapies are crafted not just to refresh, but to
                        transform. Each infusion is a blend of science and
                        wellness, meticulously designed for your body's specific
                        needs.{" "}
                        <div className="my-4 font-bold">
                            Are you ready to unlock a new level of vitality?
                        </div>
                        ‍Join us on a journey where each drop of our IV therapy
                        is a promise of vitality, clarity, and holistic
                        well-being. Book your appointment today and step into a
                        life where every day is a peak wellness experience.
                    </p>{" "}
                </div>
            </section>
            <section className="py-6">
                <h2 className="text-center font-semibold text-2xl sm:text-4xl mb-6">
                    Trending Products
                </h2>

                <div className=" flex flex-col space-y-4 justify-center items-center my-2 ">
                    <Carousel className="w-full max-w-screen-xl">
                        <CarouselContent className="-ml-1">
                            {data["promtional-produts"].map((product) => (
                                <CarouselItem
                                    key={product.name}
                                    className="px-2  md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className="h-64 w-82 bg-white border-none">
                                            <CardContent className="flex rounded-md items-center justify-center p-2  h-56 w-full border border-primary">
                                                <img
                                                    src={product.image}
                                                    className="object-fill opacity-90 hover:opacity-50 w-full h-full bg-muted border-none"
                                                    alt="Logo "
                                                />
                                                
                                            </CardContent>
                                            <p className="text-black opacity-80 font-sans w-full text-center text-xl font-bold ">
                                                    {product.name}
                                                </p>
                                            
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className=" bg-inherit hidden sm:flex  " />
                        <CarouselNext className="bg-inherit absolute right-6 sm:-right-10 sm:flex" />
                    </Carousel>
                    <Link to="/all-products">
                        <Button>Products Info</Button>
                    </Link>
                </div>
            </section>
            <section className="py-28 bg-primary/50">
                <h2 className="text-center font-semibold text-2xl sm:text-4xl">
                    Your Journey to Exceptional Health Begins Here
                </h2>
                <div className="max-w-xl sm:max-w-4xl mx-auto px-2 flex-col flex items-center mt-6">
                    <a href=""></a>
                    <Button className="text-white">
                        Learn more about memebership
                    </Button>
                </div>
            </section>
            {/* <Product /> */}
        </main>
    );
};

export default Home;
