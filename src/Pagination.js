function Pagination({ itemsPerPage, totalItems, paginate }) {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    const paginationStyle = {
      display: 'flex',
      justifyContent: 'center',
      listStyle: 'none',
      padding: '10px',
    };
  
    const pageItemStyle = {
      margin: '5px',
      padding: '5px',
      border: '1px solid #ddd',
      cursor: 'pointer',
    };
  
    return (
      <nav>
        <ul style={paginationStyle}>
          {pageNumbers.map(number => (
            <li key={number} style={pageItemStyle} onClick={() => paginate(number)}>
              {number}
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  export default Pagination;
  