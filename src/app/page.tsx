import Image from "next/image";
import { SheetDemo } from "./sheet";
import { CommandDemo } from "./command";
import { TableDemo } from "./table";
import { DataTableDemo } from "./dataTable";

export default function Home() {
  return (
    <div className="bg-yellow-100">
    <h1 className="scroll-m-20 text-4xl text-orange-700 text-center font-extrabold tracking-tight lg:text-5xl bg-black pb-4 pt-4">
    Shadcn Ui Sheet Components
    </h1>
    <div className="mt-4 mb-4">
    <SheetDemo/>
    </div>

    <h1 className="scroll-m-20 text-4xl text-emerald-400 text-center font-extrabold tracking-tight lg:text-5xl bg-black pb-4 pt-4">
    Shadcn Ui Command Components
    </h1>
    <div className="mt-4 mb-4">
      <CommandDemo/>
 
    </div>

    <h1 className="scroll-m-20 text-4xl text-blue-400 text-center font-extrabold tracking-tight lg:text-5xl bg-black pb-4 pt-4">
    Shadcn Ui Table Components
    </h1>
    <div className="mt-4 mb-4">
      <TableDemo/>
 
    </div>

    <h1 className="scroll-m-20 text-4xl text-purple-500 -400 text-center font-extrabold tracking-tight lg:text-5xl bg-black pb-4 pt-4">
    Shadcn Ui Data Table Components
    </h1>
    <div className="mt-4 mb-4">
      <DataTableDemo/>
 
    </div>

    </div>

  );
}