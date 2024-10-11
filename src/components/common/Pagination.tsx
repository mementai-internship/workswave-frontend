import { PiCaretDoubleLeft, PiCaretDoubleRight, PiCaretLeft, PiCaretRight } from 'react-icons/pi';

export interface IPaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}: IPaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pageGroup = Math.ceil(currentPage / 10);
  const start = (pageGroup - 1) * 10 + 1;
  const end = Math.min(pageGroup * 10, totalPages);
  const pageNumbers = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <>
      <div className="flex items-center gap-1 justify-center">
        <button
          disabled={currentPage < 11}
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage - 10))}
        >
          <PiCaretDoubleLeft />
        </button>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage - 1))}
        >
          <PiCaretLeft />
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`w-8 h-8 py-1 rounded-md ${
              currentPage === number ? 'border-purple-50 border' : 'text-gray-50 hover:bg-gray-10'
            }`}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        >
          <PiCaretRight />
        </button>
        <button
          disabled={pageGroup * 10 >= totalPages}
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 10))}
        >
          <PiCaretDoubleRight />
        </button>
      </div>
    </>
  );
};

export default Pagination;
