import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  subsets: ["thai"],
  weight: ["100", "200", "300","400", "500", "700"],
});



export const metadata: Metadata = {
  title: "MoneyShare DTI",
  description: "เว็บแอปพลิเคชันสำหรับการแบ่งปันเงิน",
  
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${prompt.className}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
