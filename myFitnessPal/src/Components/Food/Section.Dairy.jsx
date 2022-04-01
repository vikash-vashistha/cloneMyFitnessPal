import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductDairy } from "./ProductDairy";

import {
  
  ItemLink,
 
  ItemTime,
} from "./TableDairy";

export function SectionDairy({ type, total, setTotal }) {
  const [data, setData] = useState([]);
  let key = "Fred";
  useEffect(() => {
    axios
      .get(
        `https://salty-hamlet-78204.herokuapp.com/list/user?key=${key}&cat=${type}`
      )
      .then((res) => setData(res.data));
  }, []);

  return (
    <>
      <tbody>
        <tr className="table-secondary">
          <ItemTime>{type}</ItemTime>
          <td>500</td>
          <td>21</td>
          <td>70</td>
          <td>22</td>
          <td>30</td>
          <td>25</td>
          <td>15</td>
          <td>45</td>
          
        </tr>
        
          
        {data.map((sa) => (
          <ProductDairy
            total={total}
            setTotal={setTotal}
            key={sa._id}
            recipe={sa.foodId}
          />
        ))}

        <tr>
          <div>
            <ItemLink>
              <div>
                Add Food {" "}
                </div>
                <div>{"  | "} QuickTool</div>
              
            </ItemLink>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
         
          </div>
         <hr/>
        </tr>
       
      </tbody>
    </>
  );
}