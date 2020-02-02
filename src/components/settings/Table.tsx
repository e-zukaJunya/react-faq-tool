import MaterialTable, { Column } from "material-table";
import React from "react";
import tableIcons from "../common/TableSettings";
import { Setting } from "../../modules/setting";

type Props = {
  data: Setting[];
};

const Table: React.FC<Props> = props => {
  // const [state, setState] = React.useState<Column<Setting>[]>([
  //   // { field: "id"},
  //   { title: "設定項目", field: "name", editable: "never" },
  //   { title: "設定値", field: "value" }
  // ]);
  const columns: Column<Setting>[] = [
    // { field: "id"},
    { title: "設定項目", field: "name", editable: "never" },
    { title: "設定値", field: "value" }
  ];

  return (
    <MaterialTable
      title="設定値"
      columns={columns}
      data={props.data}
      icons={tableIcons}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              // setState((prevState: any) => {
              //   const data = [...prevState.data];
              //   data.push(newData);
              //   return { ...prevState, data };
              // });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                // setState((prevState: any) => {
                //   const data = [...prevState.data];
                //   data[data.indexOf(oldData)] = newData;
                //   return { ...prevState, data };
                // });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              // setState((prevState: any) => {
              //   const data = [...prevState.data];
              //   data.splice(data.indexOf(oldData), 1);
              //   return { ...prevState, data };
              // });
            }, 600);
          })
      }}
    />
  );
};

export default Table;
