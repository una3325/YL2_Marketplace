import React from 'react'
import {
  NFT_COLLECTION_ADDRESS,
  NFT_COLLECTION_ADDRESS_2,
  NFT_COLLECTION_ADDRESS_3,
} from '../const/addresses'
import { Box, Heading, Text, VStack } from '@chakra-ui/react'

const collectionData = [
  { name: 'Dog Collection', address: NFT_COLLECTION_ADDRESS },
  { name: 'Cat Collection', address: NFT_COLLECTION_ADDRESS_2 },
  { name: 'Robot Collection', address: NFT_COLLECTION_ADDRESS_3 },
]

const CollectionList = () => {
  return (
    <VStack spacing={4}>
      <Heading as="h3" size="lg" margin={'40px'}>
        NFT Collection List
      </Heading>
      {collectionData.map((collection, index) => (
        <Box
          key={index}
          p={4}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          bg="linear-gradient(to right, #f0f8ff, #e6e6fa)"
          width="50%"
        >
          <Text fontSize="md" fontWeight="bold">{` ${collection.name}`}</Text>
          <Text fontSize="md">{`Address: ${collection.address}`}</Text>
        </Box>
      ))}
    </VStack>
  )
}

export default CollectionList
