import { Box, Text, Divider, Avatar, Button, Icon, Image } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { revokeAsync } from "expo-auth-session";

export const Sidebar = ({ user, accessToken, setIsAuth }) => {
  const signout = async () => {
    try {
      const response = await revokeAsync(
        { token: accessToken },
        { revocationEndpoint: "https://oauth2.googleapis.com/revoke" }
      );
      if (response) {
        setIsAuth(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Box
      backgroundColor={"darkBlue.900"}
      height={"full"}
      padding="10"
      alignItems="center"
      justifyItems="center"
      justifyContent={"center"}
    >
      <Box alignItems={"center"} justifyItems="center" marginTop={20}>
        <Avatar
          size="2xl"
          source={{
            uri:
              user ? user.picture : 
              "https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk",
          }}
        />
        <Text color={"white"} fontWeight={"semibold"} fontSize="md" my={5}>
          {user ? user.name : "Name"}
        </Text>
      </Box>
      <Divider />
      <Box>
        <Button
          startIcon={<Icon as={MaterialIcons} name="logout" size={"md"} />}
          backgroundColor="transparent"
          onPress={signout}
        >
          <Text color="white" fontSize={"lg"}>
            Logout
          </Text>
        </Button>
      </Box>
      <Box mt={"48"}>
        <Image
          source={{
            uri: "https://links.papareact.com/ua6",
          }}
          alt=""
          width={32}
          height={20}
        />
        <Text color="white" fontWeight={"semibold"} fontSize={"md"}>
          by @kartikreddy18
        </Text>
      </Box>
    </Box>
  );
};
