"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import moneyBagImage from "../../assets/images/money-bag.png";

export default function Page() {
  const [amount, setAmount] = useState("");
  const [people, setPeople] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<number | null>(null);

  function handleCalculate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const totalAmount = Number(amount);
    const numberOfPeople = Number(people);

    if (
      !Number.isFinite(totalAmount) ||
      !Number.isFinite(numberOfPeople) ||
      totalAmount <= 0 ||
      numberOfPeople <= 0
    ) {
      setError("กรุณากรอกจำนวนเงินและจำนวนคนให้มากกว่า 0");
      setResult(null);
      return;
    }

    setError("");
    setResult(totalAmount / numberOfPeople);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[linear-gradient(135deg,rgba(223,243,248,0.9),transparent_45%),linear-gradient(315deg,rgba(255,227,233,0.85),transparent_55%),#fffdfc] px-5 py-8 text-[#243347] sm:px-8 sm:py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <Link
          href="/"
          className="w-fit text-sm font-medium text-[#688298] transition hover:text-[#e9858e] focus-visible:outline-3 focus-visible:outline-[#88c9d5] focus-visible:outline-offset-4"
        >
          ← กลับหน้าหลัก
        </Link>

        <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div className="hidden justify-center md:flex">
            <div className="grid aspect-square w-[min(28vw,280px)] place-items-center rounded-[48%_52%_55%_45%/55%_45%_55%_45%] bg-[#dff3f8] shadow-[0_18px_45px_rgba(136,201,213,0.2)]">
              <Image
                src={moneyBagImage}
                alt="ถุงเงินสำหรับคำนวณการแบ่งค่าใช้จ่าย"
                priority
                className="w-[70%] object-contain"
              />
            </div>
          </div>

          <section className="rounded-[28px] border border-white/80 bg-white/75 p-6 shadow-[0_20px_55px_rgba(91,126,145,0.14)] backdrop-blur-sm sm:p-10">
            <div className="mb-8">
              <p className="mb-2 text-sm font-medium tracking-[0.12em] text-[#e9858e]">
                MONEY SHARE
              </p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
                คำนวณเงินที่ต้องแชร์
              </h1>
              <p className="mt-3 text-sm leading-7 text-[#68778b]">
                กรอกข้อมูลด้านล่าง แล้วดูยอดเงินที่แต่ละคนต้องจ่าย
              </p>
            </div>

            <form onSubmit={handleCalculate} className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#3f5268]">
                  จำนวนเงินทั้งหมด (บาท)
                </span>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  inputMode="decimal"
                  value={amount}
                  onChange={(event) => setAmount(event.target.value)}
                  placeholder="เช่น 1000"
                  className="w-full rounded-2xl border border-[#d7e8ec] bg-[#f8fdfe] px-4 py-3.5 text-lg text-[#243347] outline-none transition placeholder:text-[#a5b4c0] focus:border-[#88c9d5] focus:ring-4 focus:ring-[#dff3f8]"
                  required
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#3f5268]">
                  จำนวนคน
                </span>
                <input
                  type="number"
                  min="1"
                  step="1"
                  inputMode="numeric"
                  value={people}
                  onChange={(event) => setPeople(event.target.value)}
                  placeholder="เช่น 4"
                  className="w-full rounded-2xl border border-[#f0d6dc] bg-[#fff9fa] px-4 py-3.5 text-lg text-[#243347] outline-none transition placeholder:text-[#a5b4c0] focus:border-[#e9858e] focus:ring-4 focus:ring-[#ffe3e9]"
                  required
                />
              </label>

              {error && (
                <p className="text-sm font-medium text-[#cf6571]">{error}</p>
              )}

              <button
                type="submit"
                className="w-full rounded-2xl bg-[#e9858e] px-5 py-3.5 text-base font-medium text-white shadow-[0_12px_24px_rgba(233,133,142,0.25)] transition hover:-translate-y-0.5 hover:bg-[#dc707b] hover:shadow-[0_16px_30px_rgba(233,133,142,0.3)] focus-visible:outline-3 focus-visible:outline-[#88c9d5] focus-visible:outline-offset-4"
              >
                คำนวณเงินต่อคน
              </button>
            </form>

            <div
              aria-live="polite"
              className={`mt-7 rounded-2xl border p-5 text-center transition ${
                result !== null
                  ? "border-[#f4c6cf] bg-[#fff0f3]"
                  : "border-dashed border-[#d7e8ec] bg-[#f8fdfe]"
              }`}
            >
              <p className="text-sm text-[#68778b]">แต่ละคนจ่าย</p>
              <p className="mt-1 text-4xl font-bold text-[#d86f7a]">
                {result !== null ? result.toFixed(2) : "--"}
                <span className="ml-2 text-base font-medium">บาท</span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
