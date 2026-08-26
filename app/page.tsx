import Image from "next/image";
import Link from "next/link";
import moneyBagImage from "../assets/images/money-bag.png";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col justify-center overflow-hidden bg-[linear-gradient(120deg,rgba(223,243,248,0.8),transparent_48%),linear-gradient(300deg,rgba(255,227,233,0.75),transparent_52%),#fffdfc] px-6 py-10 sm:px-[7vw] sm:py-8">
      <div className="mx-auto grid w-full max-w-[1100px] items-center gap-10 sm:gap-[clamp(44px,9vw,120px)] md:grid-cols-[minmax(0,1fr)_minmax(280px,0.78fr)]">
        <div className="text-center motion-safe:animate-[pulse_700ms_ease-out_1] md:text-left">
          <p className="mb-[18px] text-base font-medium tracking-[0.08em] text-[#e9858e]">Money Share App</p>
          <h1 className="max-w-[620px] text-[clamp(2.4rem,5vw,4.8rem)] font-bold leading-[1.15]">
            เว็บคำนวณเงินที่จะหารกัน
          </h1>
          <p className="mx-auto mb-[34px] mt-6 max-w-[460px] text-[1.08rem] leading-[1.8] text-[#68778b] md:mx-0">
            แบ่งค่าใช้จ่ายให้เป็นเรื่องง่าย คำนวณได้รวดเร็วและชัดเจนในที่เดียว
          </p>
          <Link
            className="inline-flex items-center gap-[18px] rounded-xl bg-[#e9858e] px-6 py-3.5 text-base font-medium text-white no-underline shadow-[0_12px_26px_rgba(233,133,142,0.25)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#dc707b] hover:shadow-[0_16px_30px_rgba(233,133,142,0.32)] focus-visible:outline-3 focus-visible:outline-[#88c9d5] focus-visible:outline-offset-4"
            href="/moneyshare"
          >
            เริ่มคำนวณเงิน
            <span aria-hidden="true" className="text-[1.35rem] leading-none">→</span>
          </Link>
        </div>

        <div className="order-first mx-auto grid aspect-square w-[min(78vw,320px)] place-items-center rounded-[44%_56%_53%_47%/48%_42%_58%_52%] bg-[#dff3f8] motion-safe:animate-[pulse_800ms_ease-out_1] sm:w-[min(100%,390px)] md:order-none">
          <Image
            src={moneyBagImage}
            alt="ถุงเงินสำหรับการแบ่งค่าใช้จ่าย"
            priority
            className="h-auto w-[74%] object-contain"
          />
        </div>
      </div>

      <p className="mx-auto mt-14 text-[0.92rem] text-[#68778b] sm:mt-[clamp(56px,9vh,96px)]">แบ่งกันง่าย สบายใจกว่าเดิม</p>
    </main>
  );
}