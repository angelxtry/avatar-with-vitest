import {useState} from "react";

export const Constants = {
  FALLBACK_AVATAR_URL: "https://cataas.com/cat/says/hello%20world!",
  FALLBACK_AVATAR_ALT: "hello-cat",
}

interface AvatarProps {
  url?: string;
  alt?: string;
}
const Avatar = ({url = Constants.FALLBACK_AVATAR_URL, alt = Constants.FALLBACK_AVATAR_ALT}: AvatarProps) => {
  const [srcToRender, setSrcToRender] = useState(url);
  return <img src={srcToRender} alt={alt} onError={() => setSrcToRender(Constants.FALLBACK_AVATAR_URL)}/>;
}

export default Avatar;
