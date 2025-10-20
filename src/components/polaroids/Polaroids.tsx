import { Box, Typography, Fade } from "@mui/material";
import React, { useState, useEffect, useRef } from 'react';

const images = [
    { src: '/public/foto02.jpg' },
    { src: '/public/foto-06.jpeg' },
    { src: '/public/foto-08.jpeg' },
    { src: '/public/foto-10.jpeg' },
    { src: '/public/foto03.jpg' },
    { src: '/public/foto-11.jpeg' },
    { src: '/public/foto-12.jpeg' },
    { src: '/public/foto-14.jpeg' },
    { src: '/public/foto01.jpg' },
    { src: '/public/foto-13.jpeg' },
    { src: '/public/foto04.jpg' },
];

interface PolaroidImageProps {
    image: {
        src: string;
    };
    index: number;
}

const PolaroidImage = ({ image, index }: PolaroidImageProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the image is visible
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <Fade in={isVisible} timeout={1000} style={{ transitionDelay: `${index * 150}ms` }}>
            <Box
                ref={ref}
                sx={{
                    backgroundColor: 'white',
                    padding: '16px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    borderRadius: '4px',
                    transition: 'transform 0.3s ease-in-out',
                    width: { xs: 'calc(100% - 32px)', sm: 'calc(50% - 32px)', md: 'calc(33.333% - 32px)', lg: 'calc(25% - 32px)' },
                    boxSizing: 'border-box',
                    '&:hover': {
                        transform: 'scale(1.05)'
                    }
                }}
            >
                <Box
                    component="img"
                    src={image.src}
                    sx={{
                        width: '100%',
                        height: 'auto',
                        display: 'block'
                    }}
                />
            </Box>
        </Fade>
    );
};

export const Polaroids = () => {
    return (
        <Box id="portfolio" sx={{ flexGrow: 1, padding: 4, backgroundColor: '#fff' }}>
            <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#333', marginBottom: 4 }}>
                Portfolio
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
                {images.map((image, index) => (
                    <PolaroidImage key={index} image={image} index={index} />
                ))}
            </Box>
        </Box>
    );
}