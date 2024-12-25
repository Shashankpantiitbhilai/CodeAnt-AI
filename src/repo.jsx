import { useState } from 'react';
import {
    Box,
    Drawer,
    IconButton,
    List,
    
    ListItemIcon,
    ListItemText,
    Typography,
    InputBase,
    Paper,
    Button,
    styled,
    useMediaQuery,
    useTheme,
    ListItemButton
} from '@mui/material';
import {
    Menu,
    Search,
    RefreshCw,
    Plus,
    Home,
    Code,
    Cloud,
    HelpCircle,
    Settings,
    LogOut,Headphones,
    X,
    ChevronDown
} from 'lucide-react';
import logo from "./assets/logo.png";
import sizelogo from "./assets/size.png";

import { Chip } from '@mui/material';

const StyledInputBase = styled(InputBase)(() => ({
    width: '100%',
    '& .MuiInputBase-input': {
        padding: '8px 8px 8px 40px',
    },
}));

const SearchIconWrapper = styled('div')({
    position: 'absolute',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 12,
    pointerEvents: 'none',
});

const SidebarContainer = styled(Box)(({ theme }) => ({
    width: 240,
    borderRight: `1px solid ${theme.palette.divider}`,
    height: '100vh',
    position: 'fixed',
    left: 0,
    top: 0,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
}));

const MainContent = styled(Box)(({ theme }) => ({
    marginLeft: 240,
    padding: theme.spacing(3),
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        padding: theme.spacing(2),
    },
}));

const RepositoryCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    '&:hover': {
        backgroundColor: '#f8f9fa',
        cursor: 'pointer',
    },
}));

const LanguageDot = styled(Box)(({ color }) => ({
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: color || '#0366d6',
    marginRight: 6,
    marginLeft: 6
}));

const RepositoryInterface = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const repositories = [
        { name: 'design-system', language: 'React', size: '7320 KB', visibility: 'Public', updated: '1 day ago' },
        { name: 'codeant-ci-app', language: 'Javascript', size: '5871 KB', visibility: 'Private', updated: '2 days ago' },
        { name: 'analytics-dashboard', language: 'Python', size: '4521 KB', visibility: 'Private', updated: '5 days ago' },
        { name: 'mobile-app', language: 'Swift', size: '3096 KB', visibility: 'Public', updated: '3 days ago' },
        { name: 'e-commerce-platform', language: 'Java', size: '6210 KB', visibility: 'Private', updated: '6 days ago' },
        { name: 'blog-website', language: 'HTML/CSS', size: '1876 KB', visibility: 'Public', updated: '4 days ago' },
        { name: 'social-network', language: 'PHP', size: '5432 KB', visibility: 'Private', updated: '7 days ago' }
    ];

    const mainMenuItems = [
        { icon: <Home size={20} />, label: 'Repositories', isActive: true },
        { icon: <Code size={20} />, label: 'AI Code Review' },
        { icon: <Cloud size={20} />, label: 'Cloud Security' },
        { icon: <HelpCircle size={20} />, label: 'How to Use' },
        { icon: <Settings size={20} />, label: 'Settings' },
    ];

    const bottomMenuItems = [
        { icon: <Headphones size={20} />, label: 'Support' },
        { icon: <LogOut size={20} />, label: 'Logout' }
    ];


    const RepositoryList = () => (
        <Box>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h5" sx={{ mb: 0.5 }}>Repositories</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>33 total repositories</Typography>

                <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                    <Button
                        variant="outlined"
                        startIcon={<RefreshCw size={16} />}
                        size="small"
                        sx={{
                            color: 'text.secondary',
                            borderColor: 'rgba(0, 0, 0, 0.12)',
                            textTransform: 'none',
                            fontSize: '0.875rem',
                            padding: '4px 12px',
                            minWidth: 'auto',
                            backgroundColor: 'white',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                borderColor: 'rgba(0, 0, 0, 0.12)'
                            }
                        }}
                    >
                        Refresh All
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<Plus size={16} />}
                        size="small"
                        sx={{
                            backgroundColor: '#0052CC',
                            textTransform: 'none',
                            fontSize: '0.875rem',
                            padding: '4px 12px',
                            minWidth: 'auto',
                            boxShadow: 'none',
                            '&:hover': {
                                backgroundColor: '#0747A6',
                                boxShadow: 'none'
                            }
                        }}
                    >
                        Add Repository
                    </Button>
                </Box>
            </Box>

            <Paper
                sx={{
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    mb: 3,
                    position: 'relative'
                }}
            >
                <SearchIconWrapper>
                    <Search size={20} color="#666" />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search Repositories"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </Paper>

            {repositories.map((repo, index) => (
                <RepositoryCard key={index} elevation={0}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="subtitle1" sx={{ color: 'black', fontWeight: 600 }}>
                            {repo.name}
                        </Typography>
                        <Chip
                            label={repo.visibility}
                            sx={{
                                bgcolor: "#F0FFFF",
                                color: 'primary.main',
                                marginLeft: 1,
                                padding: '3px 5px',
                                border: '1px solid',
                                borderRadius: 3,
                                marginRight: isMobile ? 2 : 160,
                                borderColor: "lightblue"
                            }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="body2" color="text.secondary">
                                {repo.language}
                            </Typography>
                            <div>
                                <LanguageDot />
                            </div>
                        </Box>
                        <img src={sizelogo} alt="size" />
                        <Typography variant="body2" color="text.secondary">
                            {repo.size}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Updated {repo.updated}
                        </Typography>
                    </Box>
                </RepositoryCard>
            ))}
        </Box>
    );
    const MobileDrawerContent = () => (
        <Box sx={{ height: '100%', overflowY: 'auto' }}>
            <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box
                        component="img"
                        src={logo}
                        alt="CodeAnt AI"
                        sx={{ width: 300, height: "auto",marginLeft:-6 }}
                    />
                </Box>
                <IconButton onClick={() => setIsMenuOpen(false)}>
                    <X />
                </IconButton>
            </Box>

            <Box sx={{ p: 2 }}>
                <Button
                    variant="text"
                    sx={{
                        width: '100%',
                        justifyContent: 'space-between',
                        color: 'text.primary',
                        textTransform: 'none',
                        border: "1px solid",
                        borderRadius: 2,
                        mb: 2
                    }}
                    endIcon={<ChevronDown />}
                >
                    UtkarshDhairyaPa...
                </Button>

                <List>
                    {[...mainMenuItems, ...bottomMenuItems].map((item, index) => (
                        <ListItemButton
                            key={index}
                            sx={{
                                bgcolor: item.isActive ? 'primary.main' : 'transparent',
                                color: item.isActive ? 'white' : 'inherit',
                                '&:hover': {
                                    bgcolor: item.isActive ? 'primary.dark' : 'action.hover',
                                },
                            }}
                        >
                            <ListItemIcon sx={{
                                color: item.isActive ? 'white' : 'inherit',
                                minWidth: 36,
                                '& img': {
                                    filter: item.isActive ? 'brightness(0) invert(1)' : 'none'
                                }
                            }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    ))}
                </List>
            </Box>
        </Box>
    );

    const DesktopSidebar = () => (
        <SidebarContainer>
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                        <Box
                            component="img"
                            src={logo}
                            alt="CodeAnt AI"
                            sx={{ width: 240, height: "auto" }}
                        />
                    </Box>
                    <Button
                        variant="text"
                        sx={{
                            width: '100%',
                            justifyContent: 'space-between',
                            color: 'text.primary',
                            textTransform: 'none',
                            border: "1px solid",
                            borderRadius: 2
                        }}
                        endIcon={<ChevronDown />}
                    >
                        UtkarshDhairyaPa...
                    </Button>
                </Box>

                <List sx={{ flex: 1 }}>
                    {mainMenuItems.map((item, index) => (
                        <ListItemButton
                            key={index}
                            sx={{
                                bgcolor: item.isActive ? 'primary.main' : 'transparent',
                                color: item.isActive ? 'white' : 'inherit',
                                '&:hover': {
                                    bgcolor: item.isActive ? 'primary.dark' : 'action.hover',
                                },
                            }}
                        >
                            <ListItemIcon sx={{ color: item.isActive ? 'white' : 'inherit', minWidth: 36 }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    ))}
                </List>

                <List sx={{ borderTop: 1, borderColor: 'divider' }}>
                    {bottomMenuItems.map((item, index) => (
                        <ListItemButton
                            key={index}
                            sx={{
                                color: 'inherit',
                                '&:hover': {
                                    bgcolor: 'action.hover',
                                },
                            }}
                        >
                            <ListItemIcon sx={{
                                minWidth: 36,
                                '& img': {
                                    filter: 'none'
                                }
                            }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    ))}
                </List>
            </Box>
        </SidebarContainer>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            {isMobile ? (
                <>
                    <Box sx={{ width: '100%', bgcolor: 'background.default' }}>
                        <Box sx={{
                            p: 2,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderBottom: 1,
                            borderColor: 'divider'
                        }}>
                            <Box sx={{ display: 'flex', alignItems: 'left', gap: 1 }}>
                                <Box
                                    component="img"
                                    src={logo}
                                    alt="CodeAnt AI"
                                    sx={{ width: 300, height: "auto" }}
                                />
                            </Box>
                            <IconButton onClick={() => setIsMenuOpen(true)}>
                                <Menu />
                            </IconButton>
                        </Box>
                        <Box sx={{ p: 2 }}>
                            <RepositoryList />
                        </Box>
                    </Box>
                    <Drawer
                        anchor="top"  // Changed from 'left' to 'top'
                        open={isMenuOpen}
                        onClose={() => setIsMenuOpen(false)}
                        PaperProps={{
                            sx: {
                                width: '100%',
                                height: '60%',  // Added to ensure full height
                                maxHeight: '100vh',  // Added to limit height to viewport
                                overflowY: 'auto'  // Added to enable scrolling
                            }
                        }}
                    >
                        <MobileDrawerContent />
                    </Drawer>
                </>
            ) : (
                <>
                    <DesktopSidebar />
                    <MainContent>
                        <RepositoryList />
                    </MainContent>
                </>
            )}
        </Box>
    );
};

export default RepositoryInterface;