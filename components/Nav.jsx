import { FlatList, Box, Button } from "native-base";
import { genre } from "../utils/genres";

export const Navbar = ({ setGenre }) => {
  return (
    <Box position={"relative"}>
      <FlatList
        data={genre}
        renderItem={({ item }) => (
          <Button
            _pressed={{
              _text: {
                color: "danger.400",
              },
            }}
            backgroundColor="transparent"
            _text={{
              color: "primary.50",
              fontWeight: "semibold",
            }}
            onPress={() => setGenre(item.id)}
          >
            {item.name}
          </Button>
        )}
        horizontal={true}
      />
    </Box>
  );
};
