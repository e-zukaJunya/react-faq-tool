import MaterialTable, { Column } from "material-table";
import React from "react";
import tableIcons from "../common/TableSettings";
import { Setting } from "../../modules/setting";

import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
type Props = {
  data: Setting[];
  isLoading: boolean;
  updateSettings: (data: Setting) => void;
};

const Table: React.FC<Props> = props => {
  // const [state, setState] = React.useState<Column<Setting>[]>([
  //   // { field: "id"},
  //   { title: "設定項目", field: "name", editable: "never" },
  //   { title: "設定値", field: "value" }
  // ]);
  const columns: Column<Setting>[] = [
    // { title: "ID", field: "id"},
    { title: "設定項目", field: "name", editable: "never" },
    // { title: "設定項目", field: "name" },
    { title: "設定値", field: "value" }
  ];

  return (
    <MaterialTable
      columns={columns}
      data={props.data}
      icons={tableIcons}
      isLoading={props.isLoading}
      options={{
        draggable: false,
        search: false,
        sorting: false,
        showTitle: false,
        paging: false
      }}
      // actions={[
      //   {
      //     icon: () => <Edit />,
      //     tooltip: "編集",
      //     onClick: (event: any, data: any) => props.updateSettings(data)
      //   }
      // ]}
      editable={{
        isEditable: () => true,
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            props.updateSettings(newData);
            resolve();
          })
      }}
      localization={{
        body: {
          editRow: {
            saveTooltip: "保存",
            cancelTooltip: "キャンセル",
            deleteText: "削除"
          },
          addTooltip: "追加",
          deleteTooltip: "削除",
          editTooltip: "編集"
        }
      }}
    />
  );
};

export default Table;
