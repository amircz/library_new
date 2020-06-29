import React from "react";
import CustomizedTables from "./CustomizedTables";
import LineComponent from "./LineComponent";
import { Account } from "../Classes/Account";
import { Author } from "../Classes/Author";
import { makeStyles } from "@material-ui/core";
import { handleAccountLineClickFunctionsContext, handleAutorLineClickFunctionsContext } from "./HomePage";

export interface ListComponentProps {
  objectsOfList: string[];
  isAccount?: boolean;
  favoriteBookTitle?: string;

  titleOfList: string;
  handleAccountLineClicked?: (account: Account) => void
  handleAuthorLineClicked?: (author: Author) => void
}
const useStyles = makeStyles({
  list: {
    display: 'inline-block',
    textAlign: 'right',
    width: 300,
    margin: 20,
    marginTop: 0,
    overflowX: 'hidden',
    height: 363,
    backgroundColor: 'darkgrey',
    padding: 0,
  }
})

const ListComponent: React.FunctionComponent<ListComponentProps> = props => {
  const classes = useStyles();
  const LIST_ELEMENTS = props.objectsOfList.map((entity) => {
    return (
      <handleAccountLineClickFunctionsContext.Consumer>
        {valueOfAccountContext =>
          <handleAutorLineClickFunctionsContext.Consumer>
            {valueOfAuthorContext =>
              <LineComponent handleAccountLineClicked={valueOfAccountContext} handleAuthorLineClicked={valueOfAuthorContext}
                content={entity} isFavorite={entity === props.favoriteBookTitle} isAccount={props.isAccount}></LineComponent>
            }
          </handleAutorLineClickFunctionsContext.Consumer>
        }
      </handleAccountLineClickFunctionsContext.Consumer>
    );
  })
  return (
    <div className={classes.list}>
      <CustomizedTables elements={LIST_ELEMENTS} titleOfList={props.titleOfList}></CustomizedTables>
    </div>
  );
}
export default ListComponent;