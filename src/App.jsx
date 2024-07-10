import './App.css';
import { useState } from 'react';

const pages = [
  { id: 1, name: 'Page 1' },
  { id: 2, name: 'Page 2' },
  { id: 3, name: 'Page 3' },
  { id: 4, name: 'Page 4' }
];

function App() {
  const [selectedPages, setSelectedPages] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedPages([]);
    } else {
      setSelectedPages(pages.map((page) => page.id));
    }
    setSelectAll(!selectAll);
  };

  const handlePageSelect = (id) => {
    if (selectedPages.includes(id)) {
      setSelectedPages(selectedPages.filter((pageId) => pageId !== id));
    } else {
      setSelectedPages([...selectedPages, id]);
    }
  };
  const handleDone = () => {
    console.log('Selected Pages:', selectedPages);
  };
  return (
    <div className="options">
      <li className="option">
        <span className="option-text">All Pages</span>
        <input
          className="checkbox"
          type="checkbox"
          checked={selectAll}
          onChange={handleSelectAll}
        />
      </li>
      <span className="checkmark"></span>
      <hr className="hr" />
      <div>
        {pages.map((page) => (
          <li key={page.id} className="option">
            <span className="option-text">{page.name}</span>
            <input
              className="checkbox"
              type="checkbox"
              checked={selectedPages.includes(page.id)}
              onChange={() => handlePageSelect(page.id)}
            />
          </li>
        ))}
      </div>
      <hr className="hr" />
      <div className="option">
        <div className="select-btn" onClick={handleDone}>
          Done
        </div>
      </div>
    </div>
  );
}

export default App;
