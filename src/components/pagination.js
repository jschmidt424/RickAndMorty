import React from "react";
const Pagination = ({ nextPage, prevPage, goToPage, pages }) => {
  let pageButtons = [];
  for (let i = 1; i <= pages; i++) {
    pageButtons.push(
      <button key={i} onClick={() => goToPage(i)}>
        {i}
      </button>
    );
  }
};
export default Pagination;
