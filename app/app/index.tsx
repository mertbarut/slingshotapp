import { useState } from "react";
import { Github } from "@tamagui/lucide-icons";
import { Link } from "expo-router";
import {
  Button,
  H1,
  Input,
  ListItem,
  Separator,
  YGroup,
  YStack
} from "tamagui";

import { Stack } from "../components/Stack";

export default function Home() {
  const [username, setUsername] = useState("");

  return (
    <Stack>
      <YStack
        space="$4"
        maxWidth={600}
      >
        <H1 textAlign="center">Welcome to Slingshot!</H1>
      </YStack>

      <YStack space="$2">
        <Input
          value={username}
          onChangeText={setUsername}
          placeholder="Enter a username"
        />
        <Link
          asChild
          href={`/users/${username}`}
        >
          <Button
            theme="green_Button"
            disabled={username.length === 0}
          >
            Go to user page
          </Button>
        </Link>
      </YStack>

      <YStack space="$5">
        <YGroup
          bordered
          separator={<Separator />}
          theme="green"
        >
          <YGroup.Item>
            <Link
              asChild
              href="https://github.com/mertbarut"
              target="_blank"
            >
              <ListItem
                hoverTheme
                pressTheme
                title="Github"
                icon={Github}
              />
            </Link>
          </YGroup.Item>
        </YGroup>
      </YStack>
    </Stack>
  );
}
