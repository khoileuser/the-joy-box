import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export default function NavigationBar() {
    return (
        <nav className="fixed nav-bar inset-x-0 top-0 z-50 p-1">
            <div className="w-full max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex flex-row justify-between items-center gap-6">
                        <Link
                            href="/"
                            className="text-inherit flex flex-row items-center"
                        >
                            <Image
                                src="/images/logo.png"
                                alt="Logo Picture"
                                width="0"
                                height="0"
                                sizes="100vw"
                                className="w-50 h-max"
                            />
                        </Link>
                        <div className="hidden md:flex gap-8 mt-3 text-md text-white/90">
                            <Link
                                href="/"
                                className="underline underline-offset-5"
                            >
                                TRANG CHỦ
                            </Link>
                            <Link href="/">GIỚI THIỆU</Link>
                            <Link href="/">
                                <span className="flex flex-row">
                                    SẢN PHẨM <ChevronDown />
                                </span>
                            </Link>
                            <Link href="/">
                                <span className="flex flex-row">
                                    QUÀ TẶNG DOANH NGHIỆP <ChevronDown />
                                </span>
                            </Link>
                            <Link href="/">WEDDING GIFTS</Link>
                            <Link href="/">
                                <span className="flex flex-row">
                                    THE JOY SCENT <ChevronDown />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
