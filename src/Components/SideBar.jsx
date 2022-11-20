import { Stack } from '@mui/material'
import { categories } from '../utils/constants'
function SideBar() {
    return (
        <Stack
            direction="column"
            sx={{
                overflowY: 'auto',
                height: {
                    sx: 'auto',
                    md: '95%',
                    flexDirection: {
                        sx: 'auto',
                        md: 'column',
                    }
                }
            }}
        >
            {categories.map((category) => (
                <button>
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                </button>
            ))}
        </Stack>
    )
}

export default SideBar