import { Box, Flex, Heading, Link, Text, Avatar } from '@chakra-ui/react'
import { ConnectWallet, useAddress } from '@thirdweb-dev/react'
import NextLink from 'next/link'

const Navbar = () => {
  const address = useAddress()
  return (
    <Box
      bg="linear-gradient(to right,  #ffb6c1, #afeeee,	#7b68ee)"
      m="auto"
      py="10px"
      px="40px"
    >
      <Flex justifyContent="space-between" alignItems="center" color="white">
        <Link as={NextLink} href="/">
          <Heading fontSize="3xl">YL2_Marketplace</Heading>
        </Link>

        <Flex direction="row" fontSize="xl">
          <Link as={NextLink} href="/buy" mx={3}>
            Buy
          </Link>
          <Link as={NextLink} href="/sell" mx={3}>
            Sell
          </Link>
          <Link as={NextLink} href="/about" mx={3}>
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
