import { PureComponent, useRef, useState } from "react";
import { Box, Text, IconButton, Icon, Button } from "native-base";
import { Ionicons, FontAwesome5, Entypo } from "@expo/vector-icons";
import { Video } from "expo-av";
import { StyleSheet } from "react-native";

export const VideoPlayerComponent = ({ poster }) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  return (
    <Video
      ref={video}
      style={styles.video}
      source={{
        uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      }}
      useNativeControls
      resizeMode="contain"
      isLooping
      onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      posterSource={{
        uri: poster,
      }}
    />
  );
};

const styles = StyleSheet.create({
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
    marginTop: 24,
  },
});

export const Nav = ({ navigation }) => {
  return (
    <IconButton
      icon={<Icon as={Ionicons} name="md-chevron-back-outline" color="white" />}
      width={10}
      variant="outline"
      borderColor={"white"}
      ml={2}
      mt={2}
      backgroundColor="transparent"
      onPress={() => navigation.goBack()}
    />
  );
};

export default class Details extends PureComponent {
  render() {
    const {
      id,
      backdrop_path,
      title,
      overview,
      popularity,
      poster_path,
      release_date,
      vote_average,
      vote_count,
    } = this.props.route.params.movie;
    return (
      <Box backgroundColor={"darkBlue.900"} padding={2} height={"full"}>
        <Nav navigation={this.props.navigation} />
        <VideoPlayerComponent poster={backdrop_path || poster_path} />
        <Box mx={8} my={5}>
          <Box
            flexDirection={"row"}
            alignItems="center"
            justifyItems={"center"}
            justifyContent="space-between"
            px={2}
          >
            <Text color="white" fontWeight="semibold" fontSize={"lg"}>
              {title}
            </Text>
            <Text color="white" fontWeight="semibold" fontSize={"lg"}>
              {id}
            </Text>
          </Box>
          <Text color="primary.50" py={2}>
            {overview}
          </Text>
          <Text color="primary.100">{release_date}</Text>
          <Box
            alignItems={"center"}
            justifyItems="center"
            justifyContent={"space-between"}
            flexDirection="row"
          >
            <Button
              backgroundColor="transparent"
              startIcon={<Icon as={Entypo} name="heart" color="danger.400" />}
              _text={{
                color: "white",
              }}
            >
              {popularity}
            </Button>
            <Box
              alignItems={"center"}
              justifyItems="center"
              flexDirection={"row"}
            >
              <Button
                backgroundColor="transparent"
                endIcon={
                  <Icon as={FontAwesome5} name="thumbs-up" color="white" />
                }
                _text={{
                  color: "white",
                }}
              >
                {vote_average}
              </Button>
              <Text color="white" fontWeight={"semibold"}>
                .{vote_count}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
