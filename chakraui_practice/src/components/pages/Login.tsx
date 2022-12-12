import { Flex, Heading, Divider, Box, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";

import { Header } from "../organism/layout/Header";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: VFC = memo(() => {
  const { login, loading } = useAuth();

  const [userId, setUserId] = useState("");
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);

  const onClickLogin = () => login(userId);

  return (
    <>
      <Header />
      <Flex align="center" justify="center" height="100vh">
        <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
          <Heading as="h1" size="lg" textAlign="center">
            ユーザ管理アプリ
          </Heading>
          <Divider my={4} />
          <Stack spacing={6} py={5} px={10}>
            <Input
              placeholder="ユーザID"
              value={userId}
              onChange={onChangeUserId}
            />
            <PrimaryButton onClick={onClickLogin} loading={loading} disabled={userId === ""}>ログイン</PrimaryButton>
          </Stack>
        </Box>
      </Flex>
    </>
  );
});
