// Import necessary libraries
import  { useState } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';
import github from './assets/github.png';
import bitbucket from './assets/bitbucket.png';
import gitlab from './assets/gitlab.png';
import azure from './assets/azure.png';
import bottomleft from './assets/bottom-left.png';
import q from './assets/q.png';
import sso from './assets/sso.png';

const SignInPage = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    const navigate = useNavigate();

    const [selectedOption, setSelectedOption] = useState('SAAS'); // Default to SAAS

    const handleSignIn = () => {
        navigate('/repo');
    };

    const options = {
        SAAS: [
            { src: github, label: 'Sign in with Github' },
            { src: bitbucket, label: 'Sign in with Bitbucket' },
            { src: azure, label: 'Sign in with Azure DevOps' },
            { src: gitlab, label: 'Sign in with GitLab' },
        ],
        'Self Hosted': [
            { src: gitlab, label: 'Self Hosted GitLab' },
            { src: sso, label: 'Sign in with SSO' },
        ],
    };

    const renderSignInOptions = () => {
        return options[selectedOption].map((option, index) => (
            <Button
                key={index}
                variant="outlined"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    padding: '12px 16px',
                    fontWeight: 500,
                    fontSize: '14px',
                    textTransform: 'none',
                    borderRadius: '8px',
                    backgroundColor: '#fff',
                    color: '#374151',
                    border: '1px solid #E5E7EB',
                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                        backgroundColor: '#f9fafb',
                    },
                }}
                onClick={handleSignIn}
            >
                <img src={option.src} alt="Sign in provider" style={{ width: '40px', height: '40px', marginRight: '12px' }} />
                {option.label}
            </Button>
        ));
    };
    const MobileView = () => (
        <Container
            sx={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '16px',
                backgroundColor: '#fafafa',
                flexDirection: 'column', // To ensure alignment of the privacy text
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '400px',
                    padding: '20px',
                    borderRadius: '8px',
                    backgroundColor: '#fff',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    marginBottom: '16px', // Add margin to separate the privacy line
                }}
            >
                <Box sx={{ textAlign: 'center', marginBottom: '24px' }}>
                    <img
                        src={logo}
                        alt="CodeAnt Logo"
                        style={{ width: '340px', height: 'auto', margin: '0 auto' }}
                    />
                    <Typography
                        variant="body1"
                        sx={{ fontWeight: 700, color: '#374151', marginTop: '4px', fontSize: '30px' }}
                    >
                        Welcome to CodeAnt AI
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '1px',
                        backgroundColor: '#E5E7EB',
                        borderRadius: '6px',
                        marginBottom: '24px',
                    }}
                >
                    <Button
                        onClick={() => setSelectedOption('SAAS')}
                        sx={{
                            backgroundColor: selectedOption === 'SAAS' ? '#2563eb' : 'transparent',
                            color: selectedOption === 'SAAS' ? 'white' : '#6B7280',
                            fontSize: '14px',
                            fontWeight: 500,
                            textTransform: 'none',
                            borderRadius: '6px 0 0 6px',
                            padding: '8px 16px',
                            '&:hover': {
                                backgroundColor: selectedOption === 'SAAS' ? '#2563eb' : 'transparent',
                            },
                        }}
                    >
                        SAAS
                    </Button>
                    <Button
                        onClick={() => setSelectedOption('Self Hosted')}
                        sx={{
                            backgroundColor: selectedOption === 'Self Hosted' ? '#2563eb' : 'transparent',
                            color: selectedOption === 'Self Hosted' ? 'white' : '#6B7280',
                            fontSize: '14px',
                            fontWeight: 500,
                            textTransform: 'none',
                            borderRadius: '0 6px 6px 0',
                            padding: '8px 16px',
                            '&:hover': {
                                backgroundColor: selectedOption === 'Self Hosted' ? '#2563eb' : 'transparent',
                            },
                        }}
                    >
                        Self Hosted
                    </Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>{renderSignInOptions()}</Box>
            </Box>
            <Typography
                variant="body2"
                sx={{
                    textAlign: 'center',
                    color: '#6B7280',
                    fontSize: '12px',
                    marginTop: '16px',
                }}
            >
                By signing up you agree to the{' '}
                <a href="#" style={{ color: 'black', textDecoration: 'none' }}>
                    <b>Privacy Policy</b>
                </a>
            </Typography>
        </Container>
    );

    const DesktopView = () => (
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '48px',
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundColor: '#fff',
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <img src={q} alt="CodeAnt Stats" style={{ maxWidth: '80%', height: 'auto' }} />
                </Box>
                <Box
                    component="img"
                    src={bottomleft}
                    alt=""
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '250px',
                        height: 'auto',
                        zIndex: 0,
                    }}
                />
            </Box>
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '48px',
                    backgroundColor: '#fafafa',
                }}
            >
                <Box
                    sx={{
                        height: 600,
                        width: '400px',
                        padding: '24px',
                        borderRadius: '8px',
                        backgroundColor: '#fff',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        marginBottom: '24px',
                    }}
                >
                    <Box sx={{ textAlign: 'center', marginBottom: '24px' }}>
                        <img src={logo} alt="CodeAnt Logo" style={{ width: '320px', height: 'auto' }} />
                        <Typography variant="subtitle1" sx={{ color: '#374151', marginTop: '8px' }}>
                            <b>Welcome to CodeAnt AI</b>
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '1px',
                            backgroundColor: '#E5E7EB',
                            borderRadius: '6px',
                            marginBottom: '24px',
                        }}
                    >
                        <Button
                            onClick={() => setSelectedOption('SAAS')}
                            sx={{
                                backgroundColor: selectedOption === 'SAAS' ? '#2563eb' : 'transparent',
                                color: selectedOption === 'SAAS' ? 'white' : '#6B7280',
                                fontSize: '14px',
                                fontWeight: 500,
                                textTransform: 'none',
                                borderRadius: '6px 0 0 6px',
                                padding: '8px 24px',
                                '&:hover': {
                                    backgroundColor: selectedOption === 'SAAS' ? '#2563eb' : 'transparent',
                                },
                            }}
                        >
                            SAAS
                        </Button>
                        <Button
                            onClick={() => setSelectedOption('Self Hosted')}
                            sx={{
                                backgroundColor: selectedOption === 'Self Hosted' ? '#2563eb' : 'transparent',
                                color: selectedOption === 'Self Hosted' ? 'white' : '#6B7280',
                                fontSize: '14px',
                                fontWeight: 500,
                                textTransform: 'none',
                                borderRadius: '0 6px 6px 0',
                                padding: '8px 24px',
                                '&:hover': {
                                    backgroundColor: selectedOption === 'Self Hosted' ? '#2563eb' : 'transparent',
                                },
                            }}
                        >
                            Self Hosted
                        </Button>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>{renderSignInOptions()}</Box>
                </Box>
                <Typography
                    variant="body2"
                    sx={{
                        textAlign: 'center',
                        color: '#6B7280',
                        fontSize: '12px',
                        marginTop: '16px',
                    }}
                >
                    By signing up you agree to the{' '}
                    <a href="#" style={{ color: 'black', textDecoration: 'none' }}>
                        <b>Privacy Policy</b>
                    </a>
                </Typography>
            </Box>
        </Box>
    );

    return isDesktop ? <DesktopView /> : <MobileView />;
};

export default SignInPage;
