import { Box, Text, Image, Icon, Button } from "native-base";
import { Entypo } from "@expo/vector-icons";

export const Signin = ({ request, signin, setIsAuth }) => {
  return (
    <Box
      backgroundColor={"darkBlue.900"}
      height="full"
      padding={10}
      alignItems="center"
      justifyItems="center"
      justifyContent="center"
    >
      <Image
        source={{
          uri: "https://links.papareact.com/ua6",
        }}
        alt=""
        width={32}
        height={20}
      />
      <Text color="white" fontSize={"lg"}>
        Welcome To Hulu Clone!
      </Text>
      <Button
        backgroundColor={"transparent"}
        variant="outline"
        borderColor={"tertiary.500"}
        startIcon={
          <Icon
            as={Entypo}
            name="google--with-circle"
            size={"2xl"}
            color="tertiary.500"
          />
        }
        marginTop={4}
        onPress={() => {
          setIsAuth(true);
          signin();
        }}
        disabled={!request}
      >
        <Text color="white" fontSize={"lg"}>
          Sign in with google
        </Text>
      </Button>
    </Box>
  );
};
