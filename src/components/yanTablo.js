import React from "react";
import { Table, Thead, Tr, Th } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "../styles/App.css";
function Items(props) {
  const image = props.image;
  const text = props.text;
  const paragraph = props.paragraph;
  const styleI = props.imageS;
  const styleT = props.styleT;
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>
            {" "}
            <div className="div1">
              <h3 style={styleT}>{text}</h3>
              <br />
              <br />
              <p style={styleI}>{paragraph}</p>{" "}
            </div>
          </Th>
          <Th>
            <img src={image} alt="" style={styleI} />
          </Th>
        </Tr>
      </Thead>
    </Table>
  );
}
Items.defaultProps = {};

export default Items;
