import { Box, IconButton, Icon, Image } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export const Header = ({ navigation }) => {
  return (
    <Box
      height={"20"}
      backgroundColor="darkBlue.900"
      flexDirection={"row"}
      alignItems={"center"}
      justifyItems="center"
      justifyContent={"space-between"}
      paddingLeft="10"
      paddingRight={"10"}
      paddingTop="10"
    >
      <IconButton
        icon={<Icon as={MaterialIcons} name="menu" />}
        _icon={{
          color: "primary.50",
          size: "lg",
        }}
        backgroundColor={"None"}
        borderRadius="md"
        onPress={() => navigation.toggleDrawer()}
      />
      <Image
        source={{
          uri: "https://links.papareact.com/ua6",
        }}
        alt=""
        width={32}
        height={20}
      />
    </Box>
  );
};
