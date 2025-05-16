import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { Noto_Serif_Display } from "next/font/google"

const notoSerifDisplay = Noto_Serif_Display({
    subsets: ["latin"],
    display: "swap",
})

const teas = {
    1: {
        image: "/images/tea1.png",
        name: "TRÀ XANH ƯỚP NHÀI TƯƠI",
        description: {
            header: ["Biểu tượng của", "SỰ THANH TỊNH"],
            bullet: [
                "Tốt cho tim mạch",
                "Thanh lọc cơ thể - giải nhiệt",
                "Hỗ trợ tiêu hóa, giảm béo",
                "Cải thiện tinh thần và giảm căng thẳng",
            ],
        },
    },
    2: {
        image: "/images/tea2.png",
        name: "TRÀ BÚP SEN TỨ VỊ",
        description: {
            header: ["Biểu tượng của", "SỰ THANH TỊNH"],
            bullet: [
                "Tốt cho tim mạch",
                "Thanh lọc cơ thể - giải nhiệt",
                "Hỗ trợ tiêu hóa, giảm béo",
                "Cải thiện tinh thần và giảm căng thẳng",
            ],
        },
    },
    3: {
        image: "/images/tea3.png",
        name: "TRÀ Ô LONG ƯỚP BÚP SEN",
        description: {
            header: ["Biểu tượng của", "SỰ THANH TỊNH"],
            bullet: [
                "Tốt cho tim mạch",
                "Thanh lọc cơ thể - giải nhiệt",
                "Hỗ trợ tiêu hóa, giảm béo",
                "Cải thiện tinh thần và giảm căng thẳng",
            ],
        },
    },
}

function ListTeas({
    from,
    to,
    handleSelectTea,
}: {
    from?: number
    to?: number
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleSelectTea?: (tea: any) => void
}) {
    return Object.keys(teas).map((key) => {
        // @ts-expect-error not undifined
        if (parseInt(key) < from || parseInt(key) > to) {
            return null
        }
        // @ts-expect-error key description
        const tea = teas[key]
        return (
            <div
                key={key}
                className="rounded-[2vw] tea-background flex flex-col justify-center items-center text-center aspect-square hover:shadow-md hover:shadow-black"
                style={{
                    cursor: "pointer",
                }}
                onClick={() => {
                    if (handleSelectTea) {
                        handleSelectTea(tea)
                    }
                }}
            >
                <div className="grid grid-rows-4 h-full w-full p-5">
                    <div className="flex justify-center items-center row-span-3 pb-1">
                        <Image
                            src={tea.image}
                            alt={tea.name}
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="w-auto h-35 rounded"
                        />
                    </div>
                    <span className="h-full w-full row-span-1 font-extrabold text-lg pt-1 flex justify-center items-center 2xl:text-2xl">
                        {tea.name}
                    </span>
                </div>
            </div>
        )
    })
}

function ListSelectedTea({
    selectedTeas,
    handleDeselectTea,
}: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    selectedTeas: any[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleDeselectTea: (tea: any) => void
}) {
    // map through selectedTeas and display them, fill the rest with "TEA OPTION X"
    return selectedTeas
        .map((tea, index) => {
            return (
                <div
                    key={tea + index}
                    className="rounded-[2vw] selected-tea grid grid-cols-2 p-5 aspect-4/2 gap-10"
                    style={{
                        cursor: "pointer",
                    }}
                    onClick={() => handleDeselectTea(tea)}
                >
                    <div className="col-span-1 grid grid-rows-3">
                        <div className="row-span-2 flex justify-center items-center">
                            <Image
                                src={tea.image}
                                alt={tea.name}
                                width="0"
                                height="0"
                                sizes="100vw"
                                className="w-auto h-40 rounded"
                            />
                        </div>
                        <span className="row-span-1 font-extrabold text-xl flex justify-center items-center text-pretty 2xl:text-2xl">
                            {tea.name}
                        </span>
                    </div>
                    <div className="col-span-1 grid grid-rows-3">
                        <div className="row-span-1 flex flex-col items-center">
                            <span
                                className={`font-medium text-xl flex justify-center items-center ${notoSerifDisplay.className} 2xl:text-2xl`}
                            >
                                <i>{tea.description.header[0]}</i>
                            </span>
                            <span className="font-extrabold text-2xl flex justify-center items-center 2xl:text-3xl">
                                {tea.description.header[1]}
                            </span>
                        </div>
                        <div className="row-span-2">
                            <ul className="list-disc list-inside">
                                {/* @ts-expect-error any type*/}
                                {tea.description.bullet.map((bullet, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className={`font-medium text-base flex justify-start items-center text-start ${notoSerifDisplay.className} 2xl:text-xl 2xl:mb-3`}
                                        >
                                            <Image
                                                src="/images/tea-bullet.png"
                                                alt="Tea Bullet"
                                                width="0"
                                                height="0"
                                                sizes="100vw"
                                                className="w-auto h-4"
                                            />
                                            <i>{bullet}</i>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        })
        .concat(
            Array.from({ length: 1 - selectedTeas.length }, (_, index) => (
                <div
                    key={index}
                    className="rounded-[2vw] selected-tea flex flex-row justify-center items-center p-30 aspect-4/2 2xl:text-2xl"
                >
                    TEA OPTION
                </div>
            ))
        )
}

export default function ChooseTea({
    selectedTeas,
    handleSelectTea,
    handleDeselectTea,
}: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    selectedTeas: any[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleSelectTea: (tea: any) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleDeselectTea: (tea: any) => void
}) {
    return (
        <div className="grid grid-rows-6">
            <div className="row-span-1 flex justify-center items-center">
                <span className="secondary-text-color text-5xl font-extrabold mt-20 text-shadow-slate-900 text-shadow-lg/60 2xl:text-6xl">
                    CHOOSE 1 TYPE OF TEA
                </span>
            </div>
            <div className="row-span-5 p-10">
                <div className="h-full grid grid-cols-5 gap-5">
                    <div className="col-span-3 p-10 flex flex-col items-center 2xl:justify-center">
                        {/* mooncakse carousel  */}
                        <Carousel className="">
                            <CarouselContent>
                                <CarouselItem>
                                    <div className="grid grid-cols-3 gap-5 tea-text-color text-pretty">
                                        <ListTeas
                                            from={0}
                                            to={3}
                                            handleSelectTea={handleSelectTea}
                                        />
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                        </Carousel>
                        <span className="text-2xl font-extrabold mt-7 secondary-text-color text-shadow-slate-900 text-shadow-lg/60 2xl:text-4xl">
                            WE HAVE 3 OPTIONS
                        </span>
                    </div>
                    <div className="col-span-2 flex flex-col items-center mb-20 2xl:justify-center">
                        {/* selected tea  */}
                        <div className="selected-tea-box rounded-[2vw]">
                            <span className="font-extrabold text-3xl flex justify-center items-center p-1 pt-4 tea-selection-text">
                                YOUR SELECTION
                            </span>
                            <div className="grid grid-cols-1 gap-4 p-5 text-2xl font-extrabold text-center tea-text-color text-pretty">
                                <ListSelectedTea
                                    selectedTeas={selectedTeas}
                                    handleDeselectTea={handleDeselectTea}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
