import { Tablee, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { StyledBadge } from "../templates/table/StyleBadge";
import { IconButton } from "../templates/table/IconButton";
import { EyeIcon } from "../templates/table/EyeIcon";
import { EditIcon } from "../templates/table/EditIcon";
import { DeleteIcon } from "../templates/table/DeleteIcon";
import { Table } from '@nextui-org/react';
import Navbar from "../templates/navbar";

export default function App({products}) {


// converting to JSON
const obj = JSON.stringify(products);

// accessing the data
//console.log(obj); // "{"name":"John","age":22}"

const columns = [
  {
    key: "username",
    label: "NAME",
  },
  {
    key: "email",
    label: "EMAIL",
  },
  {
    key: "type",
    label: "TYPE",
  },
  {
    key: "address",
    label: "ADDRESS",
  },

];


const rows = products;

  return (
    <Table
    aria-label="Example table with dynamic content"
    css={{
      height: "auto",
      minWidth: "100%",
      backgroundColor:"white"
    }}
  >
    <Table.Header columns={columns}>
      {(column) => (
        <Table.Column key={column.userID}>{column.label}</Table.Column>
      )}
    </Table.Header>
    <Table.Body items={rows}>
      {(item) => (
        <Table.Row key={item.userID}>
          {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
        </Table.Row>
      )}
    </Table.Body>
  </Table>
  );
}


export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://localhost:3000/api/db_getUser')
  const products = await res.json()

  // Pass data to the page via props
  return { props: { products } }
}