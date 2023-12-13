import React from 'react'
import { Container, Heading, Text } from '@chakra-ui/react'
import NFTGrid from '../components/NFTGrid'
import {
  NFT_COLLECTION_ADDRESS,
  // NFT_COLLECTION_ADDRESS_2,
  // NFT_COLLECTION_ADDRESS_3,
} from '../const/addresses'
import { useContract, useNFTs } from '@thirdweb-dev/react'

export default function Buy() {
  const { contract: contract1 } = useContract(NFT_COLLECTION_ADDRESS)
  // const { contract: contract2 } = useContract(NFT_COLLECTION_ADDRESS_2)
  // const { contract: contract3 } = useContract(NFT_COLLECTION_ADDRESS_3)
  const { data: data1, isLoading: isLoading1 } = useNFTs(contract1)
  // const { data: data2, isLoading: isLoading2 } = useNFTs(contract2)
  // const { data: data3, isLoading: isLoading3 } = useNFTs(contract3)

  return (
    <Container maxW={'1200px'} p={5}>
      <Heading as="h3" mb={4} fontSize="4xl">
        Explore and Buy NFTs
      </Heading>
      <Text fontSize="lg" mb={4} color={'gray'}>
        Discover unique NFTs from these collections and add them to your
        collection.
      </Text>
      <Heading size="md" mt={4}>
        Dog Collection
      </Heading>
      <NFTGrid
        isLoading={isLoading1}
        data={data1}
        emptyText={'No NFTs found in Collection 1'}
      />

      {/* <Heading size="md" mt={4}>
        Cat Collection
      </Heading>
      <NFTGrid
        isLoading={isLoading2}
        data={data2}
        emptyText={'No NFTs found in Collection 2'}
      /> */}

      {/* <Heading size="md" mt={4}>
        Cat Collection
      </Heading>
      <NFTGrid
        isLoading={isLoading3}
        data={data3}
        emptyText={'No NFTs found in Collection 1'}
      /> */}
    </Container>
  )
}
