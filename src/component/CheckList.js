import React, { useEffect, useState } from "react";
import "../App.css";

function checkList() {
    const checkList =  (event) => {
        console.log('checkList', event.target.checked)
        if(event.target.checked) {
        setFilterList( event.target.value)
        }
        else {
          setFilterList('')
        }
    }
    const [filterList, setFilterList] = useState('');

    const checkListArr =  (event) => {
      console.log('checkList', event.target.name)
      if(event.target.checked) {
        filterListArr.push(event.target.name)
      //  console.log(filterListArr)
      setFilterLisArr(filterListArr)
      }
      else {
        filterListArr.slice(1,1)
        console.log(filterListArr, event)
        setFilterLisArr(filterListArr)
      }
  }
  const [filterListArr, setFilterLisArr] = useState([]);


  return (
    <div>
        <h2>CheckList</h2>
        <input type="checkbox" onChange={checkList} value="list" name="list"/>
          <label for="list">List</label>
        <hr/>
        <div>
        {filterList}
        </div>

        <h2>CheckList Array</h2>
        <input type="checkbox" onChange={checkListArr} name="list1"/>
          <label for="list1">List1</label>
          <input type="checkbox" onChange={checkListArr} name="list2"/>
          <label for="list2">List2</label>
        <hr/>
        <div>
        {filterListArr}
        </div>


    </div>
  );
}

export default checkList;
