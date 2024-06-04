import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import React from "react";

const MembershipPage = () => {
    return (
        <div className="flex min-h-screen pt-[30px] px-[40px]">
            <div className="min-w-full">
                <p className="text-[#00153B] leading-[40px] text-center font-bold text-3xl">
                    Memberships
                </p>

                <div className="mt-[20px] grid md:grid-cols-3 gap-[20px]">
                    <Card className="bg-primary">
                        <CardHeader className="pt-[15px] px-[25px] pb-[25px]">
                            <div className="flex justify-end">
                                <div className="bg-[#F6F6F7] rounded-[20px] flex justify-center align-center px-[12px]">
                                    <p className="text-[#00153B] text-[12px] leading-[28px] font-bold">
                                        Starter
                                    </p>
                                </div>
                            </div>

                            <div>
                                <p className=" text-[19px] leading-[24px] font-bold">
                                    Base
                                </p>
                                <p className=" text-[40px] leading-[63px] font-bold">
                                    BLU Essentials
                                </p>
                            </div>
                        </CardHeader>

                        <CardContent className="pt-[25px] px-[25px] pb-[35px]">
                            <div>
                                <p className=" text-[14px] leading-[24px] font-medium">
                                    One shot per Month
                                </p>
                                <p className=" text-[14px] leading-[24px] font-medium">
                                    One VitaGO Blends 1 Treatment of Choice
                                </p>
                                <p className=" text-[14px] leading-[24px] font-medium">
                                    Invitation to Special Events featuring
                                    discounted Treatments
                                </p>
                                <p className=" text-[14px] leading-[24px] font-medium">
                                    Free Monthly Products
                                </p>
                                <p className=" text-[14px] leading-[24px] font-medium">
                                    VitaGO! Add-on - 1 Unit(s)
                                </p>
                            </div>

                            <CardFooter className="mt-20 flex justify-start">
                                <Button
                                    variant="secondary"
                                    className=" rounded-[5px] py-[15px] px-[25px] text-[14px] leading-[17px] font-semibold">
                                    $99.00/Month
                                </Button>
                            </CardFooter>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary">
                        <CardHeader className="pt-[15px] px-[25px] pb-[25px]">
                            <div className="flex justify-end">
                                <div className="bg-[#F6F6F7] rounded-[20px] flex justify-center align-center px-[12px]">
                                    <p className="text-[#00153B] text-[12px] leading-[28px] font-bold">
                                        Starter
                                    </p>
                                </div>
                            </div>

                            <div>
                                <p className=" text-[19px] leading-[24px] font-bold">
                                    Prime
                                </p>
                                <p className=" text-[40px] leading-[63px] font-bold">
                                    BLU Vitality
                                </p>
                            </div>

                            <div></div>
                        </CardHeader>

                        <CardContent className="pt-[25px] px-[25px] pb-[35px]">
                            <div>
                                <p className=" text-[14px] leading-[24px] font-medium">
                                    One Shot Per Month
                                </p>
                                <p className=" text-[14px] leading-[24px] font-medium">
                                    One Vitago Blends 1
                                </p>
                                <p className=" text-[14px] leading-[24px] font-medium">
                                    One Hydrogo Max
                                </p>
                                <p className=" text-[14px] leading-[24px] font-medium">
                                    Invitation To Special Events Featuring
                                    Discounted Treatments
                                </p>
                                <p className=" text-[14px] leading-[24px] font-medium">
                                    Free Monthly Products
                                    <br /> VitaGO! Add-on - 1<br />
                                    Unit(s) HydraGO - 1 Unit(s)
                                </p>
                            </div>

                            <CardFooter className="mt-[25px]">
                                <Button
                                    variant="secondary"
                                    className=" rounded-[5px] py-[15px] px-[25px] text-[14px] leading-[17px] font-semibold">
                                    $299.00/Month
                                </Button>
                            </CardFooter>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary">
                        <CardHeader className="pt-[15px] px-[25px] pb-[25px]">
                            <div className="flex justify-end">
                                <div className="bg-[#F6F6F7] rounded-[20px] flex justify-center align-center px-[12px]">
                                    <p className="text-[#00153B] text-[12px] leading-[28px] font-bold">
                                        Starter
                                    </p>
                                </div>
                            </div>

                            <div>
                                <p className=" text-[19px] leading-[24px] font-bold">
                                    Prime+
                                </p>
                                <p className=" text-[40px] leading-[63px] font-bold">
                                    BLU Max Wellness
                                </p>
                            </div>
                        </CardHeader>

                        <CardContent className="pt-[25px] px-[25px] pb-[35px]">
                            <div>
                                <p className=" text-[14px] leading-[24px] font-medium">
                                    One Shot Per Month
                                </p>
                                <p className=" text-[14px] leading-[24px] font-medium">
                                    One Vitago Blends 1
                                </p>
                                <p className=" text-[14px] leading-[24px] font-medium">
                                    One Hydrogo Max
                                </p>
                                <p className=" text-[14px] leading-[24px] font-medium">
                                    Invitation To Special Events Featuring
                                    Discounted Treatments
                                </p>
                                <p className=" text-[14px] leading-[24px] font-medium">
                                    Free Monthly Products
                                    <br /> HydraGO - 1 Unit(s)
                                    <br />
                                    VitaGO! Add-on - 1 Unit(s)(s)
                                </p>
                            </div>

                            <CardFooter className="mt-[25px]">
                                <Button
                                    variant="secondary"
                                    className=" rounded-[5px] py-[15px] px-[25px] text-[14px] leading-[17px] font-semibold">
                                    $599.00/Month
                                </Button>
                            </CardFooter>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default MembershipPage;
