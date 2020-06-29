import {
    withStyles, TableCell, TableRow, makeStyles, TableContainer, Paper,
    Table, TableHead, TableBody
} from "@material-ui/core";
import React from "react";

export const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 30,
    },
    body: {
        fontSize: 25,

    },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        direction: "rtl",
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        direction: "rtl",
        textAlign: "right",
        width: "300px !important",
        backgroundColor: "darkgrey",
        overflowX: "hidden",
        overflowY: "scroll"
    },
    container: {
        width: 'inherit',
        overflowX: 'hidden',
        backgroundColor: 'darkgrey',
        padding: '0px'
    }
});


export interface CustomizedTablesProps {
    elements: JSX.Element[]
    titleOfList: string
}
const CustomizedTables = (props: CustomizedTablesProps) => {
    const classes = useStyles();

    return (
        <TableContainer className={classes.container} component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>{props.titleOfList}</StyledTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {props.elements}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CustomizedTables;