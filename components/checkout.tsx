import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Meow_Script } from "next/font/google"
import localFont from "next/font/local"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const meowScript = Meow_Script({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
})

const trueTypeWriter = localFont({
    src: "/fonts/TTWPGOTT.ttf",
    display: "swap",
})

const text = [
    "Gửi anh Lộc - công ty LỘC fabric,",
    "Được biết anh là người ăn chay, tôi đã tự tay chọn và xin gửi tặng anh một hộp bánh Trung Thu với các vị bánh chay thanh đạm cho mùa lễ lần này. Hơn nữa, 4 hương vị dịu ngọt này đây chính là biểu tượng của những ‘quả ngọt’ mà chúng ta đã cùng nhau gặt hái trong thời gian qua. Rất mong rằng doanh nghiệp chúng ta sẽ ngày càng gắn bó và cùng nhau vươn mình đến những thành quả ngọt ngào hơn trong tương lai.",
    "Biết ơn anh vì đã luôn đồng hành cùng T.M Tailoring. Chúc anh một mùa Trung Thu an lành bên người thân.",
    "Trân trọng\nMinh - Giám đốc T.M Tailoring.",
]

function ListSelectedCakes({
    selectedCakes,
}: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    selectedCakes: any[]
}) {
    return (
        <div className="grid grid-cols-2 gap-4">
            {selectedCakes.map((cake, index) => {
                return (
                    <div
                        key={cake + index}
                        className="rounded-[2vw] cake-background flex flex-col justify-center items-center text-center aspect-square hover:shadow-md hover:shadow-black"
                    >
                        <div className="grid grid-rows-4 h-full w-full p-3">
                            <div className="flex justify-center items-center row-span-3 mb-5">
                                <Image
                                    src={cake.image}
                                    alt={cake.name}
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    className="w-auto h-25 rounded"
                                />
                            </div>
                            <span className="h-full w-full row-span-1 font-extrabold text-sm pt-1 flex justify-center items-center">
                                {cake.name}
                            </span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function ListSelectedTea({
    selectedTea,
}: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    selectedTea: any[]
}) {
    return (
        <div className="h-full w-full">
            {selectedTea.map((tea, index) => {
                return (
                    <div
                        key={tea + index}
                        className="h-full w-full rounded-[2vw] tea-background flex flex-col justify-center items-center text-center aspect-square hover:shadow-md hover:shadow-black"
                    >
                        <div className="grid grid-rows-5 h-full w-full p-5">
                            <div className="flex justify-center items-center row-span-3">
                                <Image
                                    src={tea.image}
                                    alt={tea.name}
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    className="w-auto h-30 rounded"
                                />
                            </div>
                            <span className="h-full w-full row-span-2 font-extrabold text-lg pt-1 flex justify-center items-center">
                                {tea.name}
                            </span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default function Checkout({
    selectedCakes,
    selectedTea,
}: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    selectedCakes: any[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    selectedTea: any[]
}) {
    return (
        <div className="flex flex-col items-center h-full">
            <div className="checkout-banner w-full p-6 pt-10">
                <span className="text-4xl font-bold flex justify-center items-center text-white text-shadow-slate-800 text-shadow-lg/80">
                    THE STORY FROM YOUR SELECTION IS READY
                </span>
            </div>
            <div className="grid grid-cols-2 gap-4 h-full pr-30 pl-30">
                <div className="col-span-1 flex flex-col items-center justify-center h-full gap-1 p-0">
                    <div className="rounded-[5vw] grid grid-cols-3 border-10 border-white border-dashed p-8 gap-4">
                        <div className="col-span-2">
                            <ListSelectedCakes selectedCakes={selectedCakes} />
                        </div>
                        <div className="col-span-1">
                            <ListSelectedTea selectedTea={selectedTea} />
                        </div>
                    </div>
                    <Button className="mt-2 text-2xl text-black font-bold rounded-[3vw] next-background h-fit p-8 pt-2 pb-3">
                        Input your personal description
                    </Button>
                    <span className="text-white text-2xl font-light text-center pr-20 pl-20">
                        can be anything (your idea, your request, writing style
                        etc)
                    </span>
                </div>
                <div className="col-span-1 flex flex-col items-center justify-center h-full gap-7">
                    <div className="flex flex-col items-center justify-center w-full">
                        <span
                            className={`text-6xl text-white ${meowScript.className}`}
                        >
                            Open me
                        </span>
                    </div>
                    <Dialog>
                        <DialogTrigger>
                            <div>
                                <Image
                                    src="/images/letter.png"
                                    alt="letter"
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    className="w-auto h-60"
                                />
                            </div>
                        </DialogTrigger>
                        <DialogContent className="letter-popup-background p-0 max-w-[32vw] rounded-[1.4vw]">
                            <DialogHeader>
                                <DialogTitle className="hidden"></DialogTitle>
                                <DialogDescription className="relative">
                                    <div className="p-10 pt-15 pb-15">
                                        <span
                                            className={`text-xl text-black whitespace-pre-wrap ${trueTypeWriter.className}`}
                                        >
                                            {text.map((line, index) => {
                                                return (
                                                    <span
                                                        key={index}
                                                        className="text-center"
                                                    >
                                                        {line}
                                                        <br />
                                                        <br />
                                                    </span>
                                                )
                                            })}
                                        </span>
                                    </div>
                                    {/* <div className="absolute bottom-0 right-0 flex gap-5 p-5">
                                        <Button className="text-2xl text-black font-bold rounded-[3vw] alt-btn-background h-fit p-2 pl-14 pr-14">
                                            Edit
                                        </Button>
                                        <Button className="text-2xl text-black font-bold rounded-[3vw] alt-btn-background h-fit p-2 pl-5 pr-5">
                                            Regenerate
                                        </Button>
                                    </div> */}
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>

                    <Button className="text-2xl text-black font-bold rounded-[3vw] next-background h-fit p-8 pt-2 pb-3">
                        Edit
                    </Button>
                    <Button className="text-2xl text-black font-bold rounded-[3vw] next-background h-fit p-8 pt-2 pb-3">
                        Purchase your gift with The Joy Box
                    </Button>
                </div>
            </div>
        </div>
    )
}
