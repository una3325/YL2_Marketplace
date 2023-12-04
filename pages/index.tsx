import { NextPage } from 'next'
import NextLink from 'next/link'
import ImageSlider from './ImageSlider'
import { Button, Container, Flex, Heading, Stack } from '@chakra-ui/react'
const images = ['/images/sky.jpg', '/images/cafe.jpg']
const Home: NextPage = () => {
  return (
    <Container maxW={'2400px'} backgroundColor={'#f0f0f0'} height={'100vh'}>
      <Flex align={'center'} justify={'center'} height={'100%'}>
        <Stack spacing={8} align={'center'} textAlign={'center'}>
          {/* <ImageSlider images={images} /> */}
          <Heading color="#333" fontSize="4xl" fontWeight="bold">
            YL2_Marketplace
          </Heading>
          <Button
            as={NextLink}
            href="/buy"
            colorScheme="gray"
            color="white"
            size="lg"
            borderRadius="full"
            backgroundColor="gray.800"
            _hover={{ backgroundColor: 'gray.700' }}
          >
            Shop NFTs
          </Button>
        </Stack>
      </Flex>
    </Container>
  )
}

export default Home
