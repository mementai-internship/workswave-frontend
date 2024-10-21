export default function Commute() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="text-center border border-slate-300 p-3 rounded-lg hover:bg-slate-100   cursor-pointer">
        출근
      </div>
      <div className="text-center border border-slate-300 p-3 rounded-lg hover:bg-slate-100   cursor-pointer">
        퇴근
      </div>
      <div className="text-center border border-slate-300 p-3 rounded-lg hover:bg-slate-100   cursor-pointer">
        출/퇴근 내역
      </div>
    </div>
  );
}
