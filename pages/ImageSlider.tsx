import { useState, useEffect } from 'react'
import { Container, Flex, Image, Text, IconButton } from '@chakra-ui/react'

interface ImageSliderProps {
  images: string[]
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    )
  }

  useEffect(() => {
    const handleNext = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }
    const interval = setInterval(handleNext, 3000)

    return () => clearInterval(interval)
  }, [currentImageIndex, images.length])

  return (
    <>
      <Container maxW="100%" p={4} height="500px" overflow="hidden">
        <Flex direction="column" align="center" height="100%">
          <Image
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex}`}
            maxH="100%"
            objectFit="contain"
          />
        </Flex>
      </Container>
      <Flex
        direction="column"
        align="center"
        mt={4}
        position="relative"
        bottom="60px" // 하단 여백
      >
        <Flex>
          {[...Array(images.length)].map((_, index) => (
            <Text
              key={index}
              mx="2"
              display="inline-block"
              fontSize="lg"
              color={index === currentImageIndex ? 'gray.300' : 'gray.200'}
              cursor="pointer"
              onClick={() => setCurrentImageIndex(index)}
            >
              &#8226;
            </Text>
          ))}
        </Flex>
      </Flex>
    </>
  )
}

export default ImageSlider
