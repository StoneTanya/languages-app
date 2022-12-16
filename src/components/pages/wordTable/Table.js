import {React, useState} from "react";
import {useOutletContext} from 'react-router-dom';
import { Paper, Box, Table, TableContainer, TableBody, TableCell, TableRow, TableHead, TableFooter, TablePagination, TextField } from "@mui/material";
import { Container } from "@mui/system";
import styles from "./table.module.scss";
import TableRowComp from "./TableRow";
import { StyledEngineProvider } from '@mui/material/styles';
import Loader from "../loader/loader";

export default function WordsTable() {
    const {words, createOrUpdateWord, deleteWord, TablePaginationActions, isLoaded, error} = useOutletContext();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    
    const [value, setValue] = useState(''); 
    const [searchParam] = useState(["russian", "english"]);
    
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - words.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 5));
        setPage(0);
    };

    function search(words) {
        return words.filter((word) => {
            return searchParam.some((newWord) => {
                return (
                    word[newWord]
                        .toString()
                        .toLowerCase()
                        .indexOf(value.toLowerCase()) > -1
                );
            });
        });
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <Loader/>;
    } else {
    return (
        <StyledEngineProvider injectFirst>
        <Container>
        <Box m={5}>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
                <TextField id="filled-search" label="Search for..." type="search" 
                    value={value} onChange={(event) => setValue(event.target.value)}/>
            </Box>
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
                        ? search(words).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : search(words)).map(editWord =>
                            <TableRowComp
                                word={editWord} key={editWord.id} createOrUpdateWord={createOrUpdateWord} deleteWord={deleteWord}
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
        </Container>
        </StyledEngineProvider>
    );
}
}
