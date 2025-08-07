import { Pie } from "../lib/types";
import MenuItem from "./MenuItem";

export default function PiesOfTheMonth({ pies }: { pies: Pie[] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-serif font-bold mb-8">
          Pies Of The Month
        </h1>
      </div>
      <MenuItem pies={pies} />
    </div>
  );
}
