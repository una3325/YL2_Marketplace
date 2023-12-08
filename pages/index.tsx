import { NextPage } from 'next'
import NextLink from 'next/link'
import {
  Button,
  Container,
  Flex,
  Stack,
  Heading,
  Box,
  Text,
} from '@chakra-ui/react'
import { useContract, useNFTs } from '@thirdweb-dev/react'
import { NFT_COLLECTION_ADDRESS } from '../const/addresses'
import NFTGrid from '../components/NFTGrid'
import ImageSlider from './ImageSlider'

const images = [
  '/images/web1.webp',
  '/images/web4.webp',
  '/images/web3.webp',
  '/images/web2.webp',
]

const Home: NextPage = () => {
  const { contract } = useContract(NFT_COLLECTION_ADDRESS)
  const { data, isLoading } = useNFTs(contract)

  const randomNFTs = data
    ? data.sort(() => Math.random() - 0.5).slice(0, 5)
    : []

  return (
    <Container maxW={'100%'} p={0}>
      <Box color="white" textAlign="center" py={4} maxHeight={100}>
        <Heading fontSize="4xl" fontWeight="bold">
          NFT마켓 플레이스 설명... 넣을까 말까
        </Heading>
      </Box>
      <Flex
        direction="column"
        align="center"
        justify="center"
        minHeight="100vh"
      >
        <Stack spacing={8} align={'center'} textAlign={'center'}>
          <ImageSlider images={images} />
          <Heading fontSize="4xl" fontWeight="bold" mt={4}>
            Welcome to YL2_Marketplace
          </Heading>
          <Text fontSize="lg" color="gray.600" mt={2}>
            Explore our collection of unique NFTs.
            <br /> <br />
            Check out the latest items for sale
          </Text>
          <NFTGrid
            isLoading={isLoading}
            data={randomNFTs}
            emptyText={'No NFTs found'}
          />
          <Button
            as={NextLink}
            href="/buy"
            colorScheme="gray"
            color="white"
            size="lg"
            borderRadius="full"
            backgroundColor="gray.800"
            _hover={{ backgroundColor: 'gray.700' }}
            mt={4}
            marginBottom={'100px'}
          >
            Explore NFTs
          </Button>
        </Stack>
      </Flex>
    </Container>
  )
}

export default Home
