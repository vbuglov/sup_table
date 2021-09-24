import React from "react";
import { Wrapper, PagButton, Dots, Select } from "./styles";
import { iBtn, iProps } from "./interfaces";
import { randKey } from "../../funcs";

const NextBtn = ({ access, onClick, children }: iBtn) => {
  if (!onClick) return null;
  if (!children) return null;
  return (
    //@ts-ignore
    <PagButton disabled={!access} onClick={onClick}>
      {children}
    </PagButton>
  );
};

const PageBtn = ({ pageNumber, onClick, access, ...rest }: iBtn) => {
  if (!onClick) return null;
  if (!pageNumber) return null;
  if (!access) return null;
  return (
    //@ts-ignore
    <PagButton {...rest} onClick={onClick}>{`${pageNumber}`}</PagButton>
  );
};

const options = [10, 20, 50, 100];

const index = ({
  prev,
  next,
  currentPage,
  cPage,
  countPages,
  recordsCountOnPage,
  cRecordsCountOnPage,
}: iProps) => {
  if (typeof currentPage !== "number") return <span>"paginatin error"</span>;
  if (typeof countPages !== "number") return <span>"paginatin error"</span>;

  return (
    <Wrapper>
      <NextBtn
        access={currentPage > 1}
        onClick={prev}
        destiny="Вернуться на страницу назад"
      >
        {"<"}
      </NextBtn>
      <PageBtn
        destiny="Первая страница"
        pageNumber={1}
        access={currentPage > 1}
        onClick={() => cPage(1)}
      />
      {currentPage > 1 && <Dots>...</Dots>}
      <PageBtn
        destiny="Предыдущая страница"
        //@ts-ignore
        pageNumber={currentPage - 4}
        access={currentPage > 5 && currentPage > countPages - 3}
        onClick={() => cPage(currentPage - 4)}
      />
      <PageBtn
        destiny="Предыдущая страница"
        //@ts-ignore
        pageNumber={currentPage - 3}
        access={currentPage > 4 && currentPage > countPages - 2}
        onClick={() => cPage(currentPage - 3)}
      />
      <PageBtn
        destiny="Предыдущая страница"
        //@ts-ignore
        pageNumber={currentPage - 2}
        access={currentPage > 3}
        onClick={() => cPage(currentPage - 2)}
      />
      <PageBtn
        destiny="Предыдущая страница"
        //@ts-ignore
        pageNumber={currentPage - 1}
        access={currentPage > 2}
        onClick={() => cPage(currentPage - 1)}
      />
      <PageBtn
        destiny="Текущая страница"
        pageNumber={currentPage}
        access={true}
        onClick={() => {}}
        cur
      />
      <PageBtn
        destiny="Следущая страница"
        pageNumber={currentPage + 1}
        access={currentPage < countPages - 1}
        onClick={() => cPage(currentPage + 1)}
      />
      <PageBtn
        destiny="Следущая страница"
        pageNumber={currentPage + 2}
        access={currentPage < countPages - 2}
        onClick={() => cPage(currentPage + 2)}
      />
      <PageBtn
        destiny="Следущая страница"
        pageNumber={currentPage + 3}
        access={currentPage < countPages - 3 && currentPage < 3}
        onClick={() => cPage(currentPage + 3)}
      />
      <PageBtn
        destiny="Следущая страница"
        pageNumber={currentPage + 4}
        access={currentPage < countPages - 4 && currentPage < 4}
        onClick={() => cPage(currentPage + 4)}
      />
      {currentPage < countPages && <Dots>...</Dots>}
      <PageBtn
        destiny="Последняя страница"
        pageNumber={countPages}
        access={currentPage < countPages}
        onClick={() => cPage(countPages)}
      />
      <NextBtn
        access={currentPage < countPages}
        onClick={next}
        destiny="Перейти на страницу вперед"
      >
        {">"}
      </NextBtn>
      <div
        data-cooltipz-dir="top"
        aria-label="Количество элементов на странице"
      >
        <Select
          name="pets"
          id="count-select"
          placeholder="Количество элементов на странице"
          value={`${recordsCountOnPage}`}
          onChange={(e) =>
            cRecordsCountOnPage(
              +e.target.options[e.target.selectedIndex].innerText
            )
          }
        >
          {options.map((el) => (
            <option key={randKey()} value={`${el}`}>{`${el}`}</option>
          ))}
        </Select>
      </div>
    </Wrapper>
  );
};

export default index;
