import React, { useEffect, useState } from "react";
import "../App.css";

function search() {
    const searchEle =  (event) => {
        console.log('searchEle', event.target.value)
        if(event.target.value === '') {
            setFilterList(List);
        }
        const filterValue = List.filter((item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    )
    setFilterList(filterValue);
    }
    const List = ["alist1a", "list2", "list3", "list4", "list5"]

    const [filterList, setFilterList] = useState(List);


  return (
    <div>
        <h2>search</h2>
        <input type="search"  onChange={searchEle} />
        {filterList}

    </div>
  );
}

export default search;
