"use client"

import NavigationBar from "@/components/navigation-bar"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import ChooseCake from "@/components/choose-cake"
import ChooseTea from "@/components/choose-tea"
import Checkout from "@/components/checkout"

export default function Home() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [selectedCakes, setSelectedCakes] = useState<any[]>([])

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSelectCake = (cake: any) => {
        if (selectedCakes.length < 4) {
            setSelectedCakes([...selectedCakes, cake])
        } else {
            alert("You can only select 4 cakes")
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleDeselectCake = (cake: any) => {
        // Find the index of the first occurrence of the cake
        const index = selectedCakes.findIndex((c) => c === cake)
        if (index !== -1) {
            // Create new array without the first occurrence
            const newCakes = [
                ...selectedCakes.slice(0, index),
                ...selectedCakes.slice(index + 1),
            ]
            setSelectedCakes(newCakes)
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [selectedTea, setSelectedTea] = useState<any[]>([])

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSelectTea = (tea: any) => {
        if (selectedTea.length < 1) {
            setSelectedTea([...selectedTea, tea])
        } else {
            alert("You can only select 1 tea")
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleDeselectTea = (tea: any) => {
        // Find the index of the first occurrence of the tea
        const index = selectedTea.findIndex((t) => t === tea)
        if (index !== -1) {
            // Create new array without the first occurrence
            const newTeas = [
                ...selectedTea.slice(0, index),
                ...selectedTea.slice(index + 1),
            ]
            setSelectedTea(newTeas)
        }
    }

    const [tab, setTab] = useState("chooseCake")

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onTabChange = (value: any) => {
        setTab(value)
    }

    return (
        <>
            <NavigationBar />
            <div className="grid grid-rows-6 h-screen w-screen background">
                <Tabs
                    value={tab}
                    onValueChange={onTabChange}
                    className={tab !== "checkout" ? "row-span-5" : "row-span-6"}
                >
                    <TabsList>
                        <TabsTrigger value="chooseCake">
                            Choose Cake
                        </TabsTrigger>
                        <TabsTrigger value="chooseTea">Choose Tea</TabsTrigger>
                        <TabsTrigger value="checkout">Checkout</TabsTrigger>
                    </TabsList>
                    <TabsContent value="chooseCake">
                        <ChooseCake
                            selectedCakes={selectedCakes}
                            handleSelectCake={handleSelectCake}
                            handleDeselectCake={handleDeselectCake}
                        />
                    </TabsContent>
                    <TabsContent value="chooseTea">
                        <ChooseTea
                            selectedTeas={selectedTea}
                            handleSelectTea={handleSelectTea}
                            handleDeselectTea={handleDeselectTea}
                        />
                    </TabsContent>
                    <TabsContent value="checkout">
                        <Checkout
                            selectedCakes={selectedCakes}
                            selectedTea={selectedTea}
                        />
                    </TabsContent>
                </Tabs>
                {tab !== "checkout" ? (
                    <div className="row-span-1 flex flex-row justify-center text-center gap-5">
                        {tab === "chooseTea" ? (
                            <Button
                                className="text-4xl text-black font-bold rounded-[3vw] next-background h-fit p-15 pt-3 pb-4"
                                onClick={() => {
                                    setTab("chooseCake")
                                }}
                            >
                                BACK
                            </Button>
                        ) : (
                            <></>
                        )}
                        {tab !== "checkout" ? (
                            <Button
                                className="text-4xl text-black font-bold rounded-[3vw] next-background h-fit p-15 pt-3 pb-4"
                                onClick={() => {
                                    if (tab === "chooseCake") {
                                        setTab("chooseTea")
                                    } else if (tab === "chooseTea") {
                                        setTab("checkout")
                                    }
                                }}
                            >
                                NEXT
                            </Button>
                        ) : (
                            <></>
                        )}
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </>
    )
}
