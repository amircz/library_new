import React from "react";
import ListComponent from "./ListComponent";
import useSharedStyles from "../sharedStyles";
import { dataOfTablesContext } from "./HomePage";

export const isClickableContext = React.createContext(false);
export const isAccountLineContext = React.createContext(false);
const AllLists = () => {

  const sharedClasses = useSharedStyles();

  return (

    <div className={sharedClasses.lists} >
      <dataOfTablesContext.Consumer>
        {value =>
          <>
            <isClickableContext.Provider value={true}>
              <isAccountLineContext.Provider value={true}>
                <ListComponent
                  objectsOfList={value.accounts.map(account => account.name)}
                  titleOfList="משתמשים" isAccount={true}>
                </ListComponent>
              </isAccountLineContext.Provider>

            </isClickableContext.Provider>

            <isClickableContext.Provider value={true}>
              <ListComponent
                objectsOfList={value.authors.map(author => author.name)}
                titleOfList="סופרים">
              </ListComponent>
            </isClickableContext.Provider>

            <ListComponent objectsOfList={value.books.map(book => book.title)}
              titleOfList="ספרים">
            </ListComponent>
          </>
        }
      </dataOfTablesContext.Consumer>

    </div>

  );
}
export default AllLists;