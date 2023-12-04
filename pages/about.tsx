import React from 'react'
import { Box, Flex, Heading, Text, VStack, Link, Image } from '@chakra-ui/react'

interface TeamMember {
  name: string
  role: string
  github: string
  vercel: string
  Major: string
  Student_ID: number
  image: string
}

const TeamMemberCard: React.FC<TeamMember> = ({
  name,
  role,
  github,
  Major,
  Student_ID,
  image,
  vercel,
}) => {
  return (
    <Box
      p={6}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      width="300px"
      margin={4}
      textAlign="center"
    >
      <Image
        src={image}
        alt={`${name}'s image`}
        boxSize="150px"
        mx="auto"
        mb={4}
        borderRadius="full"
      />
      <Heading fontSize="xl" mb={2}>
        {name}
      </Heading>
      <Text fontSize="md">
        {Major} {Student_ID}
      </Text>

      <Text fontSize="md">{role}</Text>
      <Link href={github} isExternal color="blue.500" fontSize="md">
        GitHub
      </Link>
      <br />
      <Link href={vercel} isExternal color="blue.500" fontSize="md">
        Vercel
      </Link>
    </Box>
  )
}

const TeamPage: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      image: '/images/princess.jpg',
      name: '양유나',
      Major: '정보보호학전공',
      Student_ID: 92113712,
      role: 'NFT마켓 개발 및 발표자료 제작',
      github: 'https://github.com/una3325',
      vercel: 'https://vercel.com/dashboard',
    },
    {
      image: '/images/bmo.jpg',
      name: '이규한',
      Major: '정보보호학전공',
      Student_ID: 91812799,
      role: 'Backend Developer',
      github: 'https://github.com/gyuholee',
      vercel: 'nn',
    },
  ]

  return (
    <Flex justify="center" align="center" h="100vh">
      <VStack spacing={8} align="center">
        <Heading mb={4} fontSize="3xl" fontWeight="bold">
          YL2_Marketplace 프로젝트 소개
        </Heading>
        <Text fontSize="xl" color="gray.700" mb={6} alignItems={'center'}>
          <strong>프로젝트 주제</strong>: NFT Marketplace 제작
          <br />
          <br />
          <strong>프로젝트 소개</strong>: NFT는 Non-Fungible Token의 약어로,
          대체 불가능한 토큰을 나타냅니다.
          <br />
          NFT 마켓은 디지털 자산 및 컬렉터 아이템을 거래하는 온라인
          플랫폼입니다.
        </Text>

        <Heading mb={4} fontSize="3xl" fontWeight="bold">
          YL2_팀원 소개
        </Heading>

        <Flex>
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </Flex>
      </VStack>
    </Flex>
  )
}

export default TeamPage
