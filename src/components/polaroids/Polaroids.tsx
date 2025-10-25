import { Box, Typography, Fade } from "@mui/material";
import { useState, useEffect, useRef } from 'react';

const images = [
  { src: '/foto01.jpeg' },
  { src: '/foto-05.jpeg' },
  { src: '/foto-08.JPG' },
  { src: '/foto-04.jpeg' },
  { src: '/foto-07.jpeg' },
  { src: '/foto-03.jpeg' },
  { src: '/foto-06.jpeg' },
];


interface PolaroidImageProps {
  image: { src: string };
  index: number;
}

const PolaroidImage = ({ image, index }: PolaroidImageProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
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
          '&:hover': { transform: 'scale(1.05)' }
        }}
      >
        <Box component="img" src={image.src} sx={{ width: '100%', height: 'auto', display: 'block' }} />
      </Box>
    </Fade>
  );
};

export const Polaroids = () => {
  return (
    <Box id="portfolio" sx={{ flexGrow: 1, padding: 4, backgroundColor: '#fff' }}>
  <Fade in={true} timeout={1200}>
  <Box
    sx={{
      maxWidth: '900px', // 🔥 Más ancho
      margin: '0 auto 40px auto',
      padding: '28px',
      border: '2px solid #d4af37', // dorado
      borderRadius: '12px',
      backgroundColor: '#fff',
      color: '#333',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      lineHeight: 1.7,
      fontSize: '1.05rem',
      fontFamily: '"Poppins", sans-serif',
    }}
  >
    <Typography sx={{ whiteSpace: 'pre-line', fontWeight: 400 }}>
      Soy Mayara Lobo, tengo 19 años y soy de Buenos Aires, Argentina. 
      Me apasionan la fotografía, la moda y expresarme frente a cámara. 
      Empecé a hacer fotos por gusto personal, pero hoy estoy enfocada en crecer de manera profesional.

    
      {'\n'}• Altura: 1,58 m 
      {'\n'}• Peso: 60 kg 

 {'\n'}• Busto: 87 cm
 {'\n'}• Cintura: 73 cm
 {'\n'}• Cadera: 90 cm
 
   

      {'\n'}Actualmente sigo aprendiendo, pero trabajo con dedicación, naturalidad y compromiso en cada proyecto. 
      Estoy abierta a colaborar con fotógrafos, marcas y nuevas propuestas creativas.
    </Typography>
  </Box>
</Fade>



      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
        {images.map((image, index) => (
          <PolaroidImage key={index} image={image} index={index} />
        ))}
      </Box>
    </Box>
  );
};
