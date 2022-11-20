import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton, Input } from '@mui/material';
import { Search, ViewSidebarSharp } from '@mui/icons-material'


function SearchBar() {
    return (
        <Paper
            component="form"
            onSubmit={() => {}}
            sx= {
                {
                    borderRadius: '15px',
                    border: '1px solid #e3e3e3',
                    pl: 2,
                    boxShadow: 'none',
                    mr: {sm: 5}
                }
            }
        >

        <Input 
            className="search-bar"
            placeholder="Search..."
            value=""
            onChange={() => {}}
        />

        <IconButton 
            type="submit" 
            sx={
                {
                    p: '10px',
                    color: '#f60009'
                }
            }
        >
            <Search />
        </IconButton>

        </Paper>
    )
}

export default SearchBar