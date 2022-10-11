import { Box, Text, Image, Button, Icon, Pressable } from "native-base";
import { FontAwesome5, Entypo } from "@expo/vector-icons";
import { PureComponent } from "react";

export default class Movie extends PureComponent {
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
    } = this.props.movie;
    return (
      <Pressable
        onPress={() => {
          this.props.navigation.navigate("Details", {
            movie: this.props.movie,
          });
        }}
      >
        <Box
          alignItems={"center"}
          justifyItems="center"
          mx={7}
          my={5}
          pb={4}
          borderRadius="md"
          backgroundColor="blueGray.900"
        >
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/original${
                backdrop_path ? backdrop_path : poster_path
              }`,
            }}
            alt={title}
            width={"xs"}
            height={"xs"}
            borderTopRadius="md"
          />
          <Box mx={"1"} mt={5}>
            <Text color="primary.50" noOfLines={1}>
              {overview}
            </Text>
            <Text
              color="primary.50"
              fontSize={"lg"}
              fontWeight={"semibold"}
              py={2}
            >
              {title}
            </Text>
          </Box>
          <Box
            mx="1"
            alignItems={"center"}
            justifyItems="center"
            flexDirection={"row"}
            px={2}
          >
            <Text color="primary.100">{release_date}</Text>
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
      </Pressable>
    );
  }
}
