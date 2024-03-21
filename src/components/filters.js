import ascending from "../ascending-a-z-solid-svgrepo-com.svg";
import descending from "../descending-z-a-solid-svgrepo-com.svg";
import { useFoodContext } from "./foodContext/foodContext";
const Filters = () => {
  const {
    sortAscending,
    sortDescending,
    toggleDropdown,
    areas,
    selectedArea,
    handleAreaChange,
    applyFilter,
  } = useFoodContext(); 

  return (
    <div className="container">
      <div className="filters">
        <div className="filter-wrapper">
          <div className="filter-tag" onClick={toggleDropdown}>
            Filter
            <span className="filters">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                aria-hidden="true"
                strokecolor="rgba(2, 6, 12, 0.92)"
                fillcolor="rgba(2, 6, 12, 0.92)"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.3996 5.99897C13.3996 6.66172 12.8623 7.19897 12.1996 7.19897C11.5368 7.19897 10.9996 6.66172 10.9996 5.99897C10.9996 5.33623 11.5368 4.79897 12.1996 4.79897C12.8623 4.79897 13.3996 5.33623 13.3996 5.99897ZM14.9996 5.99897C14.9996 7.54537 13.746 8.79897 12.1996 8.79897C10.9311 8.79897 9.85962 7.95547 9.51546 6.79878L1.80875 6.79878C1.36692 6.79878 1.00875 6.44061 1.00875 5.99878C1.00875 5.55695 1.36692 5.19878 1.80875 5.19878L9.51558 5.19878C9.85986 4.04228 10.9312 3.19897 12.1996 3.19897C13.746 3.19897 14.9996 4.45258 14.9996 5.99897ZM3.8 13.4527C3.13726 13.4527 2.6 12.9154 2.6 12.2527C2.6 11.59 3.13726 11.0527 3.8 11.0527C4.46274 11.0527 5 11.59 5 12.2527C5 12.9154 4.46274 13.4527 3.8 13.4527ZM3.8 15.0527C2.2536 15.0527 1 13.7991 1 12.2527C1 10.7063 2.2536 9.45271 3.8 9.45271C5.0683 9.45271 6.13964 10.296 6.48396 11.4524H14.1953C14.6372 11.4524 14.9953 11.8106 14.9953 12.2524C14.9953 12.6942 14.6372 13.0524 14.1953 13.0524H6.48414C6.14001 14.2092 5.06852 15.0527 3.8 15.0527Z"
                  fill="rgba(2, 6, 12, 0.92)"
                  fillOpacity="0.92"
                ></path>
              </svg>
            </span>
          </div>

          <div className="filter-tag" onClick={sortAscending}>
            Sort
            <span className="filters">
              <img src={ascending} alt="ascending sort icon"></img>
            </span>
          </div>
          <div className="filter-tag" onClick={sortDescending}>
            Sort
            <span className="filters">
              <img src={descending} alt="desceding sort icon"></img>
            </span>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropdown-close" onClick={toggleDropdown}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.75729 1.75736L5.99993 6M10.2426 10.2426L5.99993 6M5.99993 6L10.2426 1.75736M5.99993 6L1.75729 10.2426"
                stroke="#02060C"
                strokeOpacity="0.6"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <h3 className="dropdown-header">Filter</h3>
          <ul className="dropdown-content tabs">
            <li className="tab">
              <input
                className="radioClass"
                type="radio"
                name="tabs"
                id="tab1"
                defaultChecked
              />
              <label htmlFor="tab1">
                <h3>Filter by Area</h3>
              </label>
              <div className="content filter-master">
                <ul>
                  {areas.map((area, index) => (
                    <li key={index}>
                      <label htmlFor={area}>
                        <input
                          type="radio"
                          value={area}
                          checked={selectedArea === area}
                          onChange={handleAreaChange}
                          id={area}
                        />
                        <span> {area}</span>
                      </label>
                    </li>
                  ))}
                  {selectedArea && (
                    <div>
                      <button className="dropdown-apply" onClick={applyFilter}>
                        Apply
                      </button>
                    </div>
                  )}
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className="dropdown-shadow"></div>
      </div>
    </div>
  );
};

export default Filters;
