import * as React from 'react';
import { Box } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

export default function Loader() {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 3,
            }}>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, minmax(150px, 1fr))',
                    gap: 1,
                }}>
                <CircularProgress />
            </Box>
        </Box>
    );
}
