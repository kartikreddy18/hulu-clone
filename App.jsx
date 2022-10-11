import "react-native-gesture-handler";
import Container from "./components/app-container";
import Drawer from "./drawer";
import { useEffect, useState } from "react";
import { maybeCompleteAuthSession } from "expo-web-browser";
import { useAuthRequest } from "expo-auth-session/providers/google";
import { CLIENT_ID, IOS_CLIENT_ID, ANDROID_CLIENT_ID } from "@env";
import { Signin } from "./components/login";

maybeCompleteAuthSession();

export default function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [request, response, promptAsync] = useAuthRequest({
    expoClientId: CLIENT_ID,
    IOS_CLIENT_ID,
    ANDROID_CLIENT_ID,
  });
  useEffect(() => {
    if (isAuth && response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
      setRefreshToken(response.authentication.refreshToken);
      accessToken && fetchUserInfo();
    }
    if (!isAuth) {
      setAccessToken(null);
      setUser(null);
    }
  }, [response, accessToken, isAuth]);

  const fetchUserInfo = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/oauth2/v2/userinfo",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const user = await response.json();
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container>
      {isAuth ? (
        <Drawer user={user} setIsAuth={setIsAuth} accessToken={accessToken} />
      ) : (
        <Signin signin={promptAsync} setIsAuth={setIsAuth} request={request} />
      )}
    </Container>
  );
}
