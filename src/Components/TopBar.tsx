import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/core";


export interface TopBarProps {
  handleSearch: (bookId: string) => void
}
const useStyles = makeStyles({
  topbar: {
    direction: 'rtl',
    textAlign: 'right',
    backgroundColor: 'rgb(39, 88, 116);',
    color: 'white',
    width: '100%',
    height: '70px',
    fontSize: '30px'
  },
  libraryNmae: {
    marginRight: '10px',
    marginLeft: '10px',
    display: 'inline',
    fontSize: 'larger',
  }
})

const TopBar = (props: TopBarProps) => {
  const [searchIconClicked, setSearchIconClicked] = useState(false);

  const classes = useStyles();

  const handleSearchIconClicked = () => {
    setSearchIconClicked(!searchIconClicked);
  }
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    props.handleSearch(event.currentTarget.value);
  }
  return (
    <div className={classes.topbar}>
      <span className={classes.libraryNmae}>הספריה של אמיר</span>
      {searchIconClicked ?
        <input type="text" onChange={handleChange} placeholder="חיפוש"
         onBlur={() => setSearchIconClicked(false)
        } />
        :
        <FontAwesomeIcon onClick={handleSearchIconClicked} icon={faSearch}></FontAwesomeIcon>
      }

    </div>
  );
}
export default TopBar;