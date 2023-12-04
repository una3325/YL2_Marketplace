import { useState, useEffect } from 'react'
import { Button, Container, Flex, Image, Text } from '@chakra-ui/react'

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

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 3000) // 이미지 변경 간격 (ms)

    return () => clearInterval(interval)
  }, [currentImageIndex])

  return (
    <Container maxW="xl" p={4}>
      <Flex direction="column" align="center">
        <Image
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex}`}
          maxW={1150}
        />
        <Text mt={4} fontSize="lg">
          Image {currentImageIndex + 1} of {images.length}
        </Text>
        <Flex mt={4}>
          <Button onClick={handlePrev} mr={2}>
            Previous
          </Button>
          <Button onClick={handleNext}>Next</Button>
        </Flex>
      </Flex>
    </Container>
  )
}

export default ImageSlider
