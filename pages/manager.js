import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { StyledBadge } from "../templates/table/StyleBadge";
import { IconButton } from "../templates/table/IconButton";
import { EyeIcon } from "../templates/table/EyeIcon";
import { EditIcon } from "../templates/table/EditIcon";
import { DeleteIcon } from "../templates/table/DeleteIcon";

//import { Table } from '@nextui-org/react';
import Navbar from "../templates/navbar";


async function handleSubmit_Reg() {




}


export default  function App({products}) {

 
  handleSubmit_Reg()

  const columns = [
    { name: "NAME", uid: "username" },
    { name: "ACC TYPE", uid: "type" },
    { name: "ADDRESS", uid: "address" },
    { name: "ACTIONS", uid: "actions" },
  ];
  const users = products;
  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "username":
        return (
          
          <User  name={cellValue} css={{ p: 0 }}>
          UserID:    {user.id}
            <br></br>
            {user.email}
            
          </User>
        );
      case "type":
        return (
          
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
           
          </Col>
        );
      case "address":
        return <StyledBadge type={user.status}>{cellValue}</StyledBadge>;

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Details">
                <IconButton onClick={() => console.log("View user", user.id)}>
                  <EyeIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Edit user">
                <IconButton onClick={() => console.log("Edit user", user.id)}>
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete user"
                color="error"
                onClick={() => console.log("Delete user", user.id)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };
  return (
    
    
    <Table
      aria-label="Example table with custom cells"
      css={{
        height: "auto",
        minWidth: "100%",
        backgroundColor: "white"
      }}
      selectionMode="none"
    >
      
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column
            key={column.uid}
            hideHeader={column.uid === "actions"}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={users}>
        {(item) => (
          <Table.Row>
            {(columnKey) => (
              <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>


   
  );
  
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://localhost:3000/api/db_getUser')
  const productss = await res.json()

  let products =[{"id":1,"username":"admin","pass":"password","email":"admin@admin.com","type":"admin","address":"Dublin"},]

  // Pass data to the page via props
  return { props: { products } }
}