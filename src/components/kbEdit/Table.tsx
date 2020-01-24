import React from "react";
import "./kbEdit.scss";
import MaterialTable, { Column } from "material-table";
import TextField from "@material-ui/core/TextField";

import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { Icons } from "material-table";

interface Row {
  question: string;
  answer: string;
  category1: string;
  category2: string;
  category3: string;
  category4: string;
  category5: string;
}

interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
}

const tableIcons: Icons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};
const column = [];
const Table: React.FC = props => {
  const [state, setState] = React.useState<TableState>({
    columns: [
      {
        title: "質問",
        field: "question",
        editComponent: props => (
          <TextField multiline rowsMax="4" value={props.value} onChange={e => props.onChange(e.target.value)} />
        )
      },
      {
        title: "回答",
        field: "answer",
        editComponent: props => (
          <TextField multiline rowsMax="4" value={props.value} onChange={e => props.onChange(e.target.value)} />
        )
      },
      { title: "カテゴリ1", field: "category1" },
      { title: "カテゴリ2", field: "category2" },
      { title: "カテゴリ3", field: "category3" },
      { title: "カテゴリ4", field: "category4" },
      { title: "カテゴリ5", field: "category5" }
    ],
    data: [
      {
        question: "これはReactで作られてますか？",
        answer: "そうです",
        category1: "JavaScript",
        category2: "React",
        category3: "",
        category4: "",
        category5: ""
      },
      {
        question: "バックエンドはC#ですか？",
        answer: "そうです",
        category1: "Microsoft",
        category2: "C#",
        category3: ".net core",
        category4: "",
        category5: ""
      }
    ]
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      icons={tableIcons}
      components={{}}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );
};

export default Table;
