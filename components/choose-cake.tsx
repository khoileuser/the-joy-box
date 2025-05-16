import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const cakes = {
    1: {
        image: "/images/cake1.png",
        name: "LAVA CHOCOLATE MỨT VỎ CAM",
    },
    2: {
        image: "/images/cake2.png",
        name: "DÂU TÂY RƯỢU RUM NHO KHÔ",
    },
    3: {
        image: "/images/cake3.png",
        name: "THẬP CẨM GÀ QUAY BÁT BỬU TRỨNG MUỐI",
    },
    4: {
        image: "/images/cake4.png",
        name: "ĐẬU XANH HẠT SEN TRỨNG MUỐI",
    },
    5: {
        image: "/images/cake5.png",
        name: "NGŨ CỐC BÁT BỬU TRỨNG MUỐI",
    },
    6: {
        image: "/images/cake6.png",
        name: "HẠT SEN KỶ TỬ",
    },
    7: {
        image: "/images/cake7.png",
        name: "HẠT SEN OLONG THƯỢNG HẠNG",
    },
}

function ListCakes({
    from,
    to,
    handleSelectCake,
}: {
    from?: number
    to?: number
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleSelectCake?: (cake: any) => void
}) {
    return Object.keys(cakes).map((key) => {
        // @ts-expect-error not undifined
        if (parseInt(key) < from || parseInt(key) > to) {
            return null
        }
        // @ts-expect-error key description
        const cake = cakes[key]
        return (
            <div
                key={key}
                className="rounded-[2vw] cake-background flex flex-col justify-center items-center text-center aspect-square hover:shadow-md hover:shadow-black"
                style={{
                    cursor: "pointer",
                }}
                onClick={() => {
                    if (handleSelectCake) {
                        handleSelectCake(cake)
                    }
                }}
            >
                <div className="grid grid-rows-4 h-full w-full p-5">
                    <div className="flex justify-center items-center row-span-3 pb-1">
                        <Image
                            src={cake.image}
                            alt={cake.name}
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="w-auto h-35 rounded"
                        />
                    </div>
                    <span className="h-full w-full row-span-1 font-extrabold text-lg pt-1 flex justify-center items-center 2xl:text-2xl">
                        {cake.name}
                    </span>
                </div>
            </div>
        )
    })
}

function ListSelectedCakes({
    selectedCakes,
    handleDeselectCake,
}: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    selectedCakes: any[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleDeselectCake: (cake: any) => void
}) {
    // map through selectedCakes and display them, fill the rest with "MOONCAKE OPTION X"
    return selectedCakes
        .map((cake, index) => {
            return (
                <div
                    key={cake + index}
                    className="rounded-[2vw] selected-cake p-5 aspect-4/2 grid grid-cols-5"
                    style={{
                        cursor: "pointer",
                    }}
                    onClick={() => handleDeselectCake(cake)}
                >
                    <div className="col-span-2 flex justify-center items-center">
                        <Image
                            src={cake.image}
                            alt={cake.name}
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="w-max h-auto"
                        />
                    </div>
                    <span className="col-span-3 font-extrabold text-lg flex justify-center items-center">
                        {cake.name}
                    </span>
                </div>
            )
        })
        .concat(
            Array.from({ length: 4 - selectedCakes.length }, (_, index) => (
                <div
                    key={index}
                    className="text-lg rounded-[2vw] selected-cake flex flex-row justify-center items-center p-9 aspect-4/2 2xl:text-2xl"
                >
                    MOONCAKE <br /> OPTION {index + selectedCakes.length + 1}
                </div>
            ))
        )
}

export default function ChooseCake({
    selectedCakes,
    handleSelectCake,
    handleDeselectCake,
}: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    selectedCakes: any[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleSelectCake: (cake: any) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleDeselectCake: (cake: any) => void
}) {
    return (
        <div className="grid grid-rows-6">
            <div className="row-span-1 flex justify-center items-center">
                <span className="secondary-text-color text-5xl font-extrabold mt-20 text-shadow-slate-900 text-shadow-lg/60 2xl:text-6xl">
                    CHOOSE 4 MOONCAKES
                </span>
            </div>
            <div className="row-span-5 p-10">
                <div className="h-full grid grid-cols-5 gap-5">
                    <div className="col-span-3 p-10 flex flex-col items-center 2xl:justify-center">
                        {/* mooncakse carousel  */}
                        <Carousel className="">
                            <CarouselContent>
                                <CarouselItem>
                                    <div className="grid grid-cols-3 gap-5 cake-text-color text-pretty">
                                        <ListCakes
                                            from={4}
                                            to={6}
                                            handleSelectCake={handleSelectCake}
                                        />
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="grid grid-cols-3 gap-5 cake-text-color text-pretty">
                                        <ListCakes
                                            from={0}
                                            to={3}
                                            handleSelectCake={handleSelectCake}
                                        />
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                        <span className="text-2xl font-extrabold mt-7 secondary-text-color text-shadow-slate-900 text-shadow-lg/60 2xl:text-4xl">
                            WE HAVE 13 FLAVOURS
                        </span>
                    </div>
                    <div className="col-span-2 flex flex-col items-center 2xl:justify-center">
                        {/* selected mooncakes  */}
                        <div className="selected-cake-box rounded-[2vw]">
                            <span className="font-extrabold text-4xl flex justify-center items-center p-1 pt-4 cake-selection-text">
                                YOUR SELECTION
                            </span>
                            <div className="grid grid-cols-2 gap-4 p-5 text-2xl font-extrabold text-center cake-text-color text-pretty">
                                <ListSelectedCakes
                                    selectedCakes={selectedCakes}
                                    handleDeselectCake={handleDeselectCake}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
