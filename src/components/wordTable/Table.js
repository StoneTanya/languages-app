import {React, useState} from "react";
import { Paper, Box, Table, TableContainer, TableBody, TableCell, TableRow, TableHead, TableFooter, TablePagination } from "@mui/material";
import styles from "./table.module.scss";
import TableRowComp from "./TableRow";
import { StyledEngineProvider } from '@mui/material/styles';

export default function WordsTable({ words, createOrUpdate, deleteWord, TablePaginationActions }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - words.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 5));
        setPage(0);
    };
    
    return (
        <StyledEngineProvider injectFirst>
        <Box m={5}>
            <TableContainer component={Paper} >
                <Table className={styles.table} sx={{ minWidth: 450 }} aria-label="custom pagination table">
                    <TableHead>
                        <TableRow className={styles.table__head}>
                            <TableCell align="left">№</TableCell>
                            <TableCell>English</TableCell>
                            <TableCell>Transcription</TableCell>
                            <TableCell>Russian</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0 
                        ? words.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : words).map(editWord =>
                            <TableRowComp
                                word={editWord} key={editWord.id} createOrUpdate={createOrUpdate} deleteWord={deleteWord}
                            />
                        )}
                        {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                        )}
                    </TableBody>

                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={5}
                                count={words.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                            SelectProps={{
                                inputProps: {
                                    'aria-label': 'rows per page',
                                },
                                native: true,
                            }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                showFirstButton={true}
                                showLastButton={true}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Box>
        </StyledEngineProvider>
    );
}
