import { Box, Flex, Heading, Link, Text, Avatar } from '@chakra-ui/react'
import { ConnectWallet, useAddress } from '@thirdweb-dev/react'
import NextLink from 'next/link'

const Navbar = () => {
  const address = useAddress()
  return (
    <Box backgroundColor="gray.800" m="auto" py="10px" px="40px">
      <Flex justifyContent="space-between" alignItems="center" color="#f0f0f0">
        <Link as={NextLink} href="/">
          <Heading fontSize="2xl">YL2_Marketplace</Heading>
        </Link>

        <Flex direction="row">
          <Link as={NextLink} href="/buy" mx={2.5}>
            Buy
          </Link>
          <Link as={NextLink} href="/sell" mx={2.5}>
            Sell
          </Link>
          <Link as={NextLink} href="/about" mx={2.5}>
            YL2_Team
          </Link>
        </Flex>

        <Flex direction="row" alignItems="center">
          <ConnectWallet />
          {address && (
            <Link as={NextLink} href={`/profile/${address}`} ml="20px">
              <Avatar src="https://bit.ly/broken-link" />
            </Link>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
