import { PiCaretDoubleLeft, PiCaretDoubleRight, PiCaretLeft, PiCaretRight } from 'react-icons/pi';
import { useLocation, useNavigate } from 'react-router-dom';

export interface IPaginationProps {
  totalItems: number;
  itemsPerPage: number;
}

export default function Pagination({ totalItems, itemsPerPage }: IPaginationProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const currentPage = parseInt(queryParams.get('page') || '1', 10);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pageGroup = Math.ceil(currentPage / 10);
  const start = (pageGroup - 1) * 10 + 1;
  const end = Math.min(pageGroup * 10, totalPages);
  const pageNumbers = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  function handleChangePage(page: number) {
    queryParams.set('page', page.toString());
    navigate(`${location.pathname}?${queryParams.toString()}`);
  }

  return (
    <>
      <div className="flex items-center gap-1 justify-center">
        <button
          disabled={currentPage < 11}
          onClick={() => handleChangePage(Math.min(totalPages, currentPage - 10))}
        >
          <PiCaretDoubleLeft />
        </button>
        <button
          disabled={currentPage === 1}
          onClick={() => handleChangePage(Math.min(totalPages, currentPage - 1))}
        >
          <PiCaretLeft />
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`w-8 h-8 py-1 rounded-md align-middle ${
              currentPage === number ? 'border-purple-50 border' : 'text-gray-50 hover:bg-gray-10'
            }`}
            onClick={() => handleChangePage(number)}
          >
            {number}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handleChangePage(Math.min(totalPages, currentPage + 1))}
        >
          <PiCaretRight />
        </button>
        <button
          disabled={end >= totalPages}
          onClick={() => handleChangePage(Math.min(totalPages, start + 10))}
        >
          <PiCaretDoubleRight />
        </button>
      </div>
    </>
  );
}
