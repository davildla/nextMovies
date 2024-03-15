import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import { TextField, Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

function ExpandingSearchBar({ onEnter, search }) {

    const [expanded, setExpanded] = useState(false);
    const [searchText, setSearchText] = useState(search);

    const handleToggleExpand = () => {
        setExpanded(!expanded);
    };

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };


    return (
        <div className="fixed bottom-20 left-4 z-50 flex">
            <Fab
                title='Search a movie'
                color="inherit"
                aria-label="search"
                onClick={handleToggleExpand}
                className="transition-all transform hover:scale-110"
            >
                <SearchIcon />
            </Fab>
            {expanded && (
                <div className="flex pl-2">
                    <Paper>
                        <TextField
                            autoFocus
                            id="search"
                            label="Search Movie"
                            variant="outlined"
                            fullWidth
                            value={searchText}
                            onChange={handleSearchChange}
                            onKeyUp={(e) => {
                                if (e.key === 'Enter') {
                                    onEnter(e)
                                }
                            }}
                            InputProps={{
                                endAdornment: (
                                    <IconButton
                                        disabled={searchText === ''}
                                        onClick={() => {
                                            setSearchText('');
                                            onEnter({ target: { value: '' } });
                                        }}
                                        edge="end"

                                    >
                                        <ClearIcon />
                                    </IconButton>
                                ),
                            }}
                        />
                    </Paper>
                </div>
            )}
        </div>
    );
}

export default ExpandingSearchBar;