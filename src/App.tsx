import React, { useCallback } from 'react';
import './styles/App.scss';
import { Badge, Box, Button, Card, CardBox, Checkbox, Column, Columns, Divider, FormFieldGroup, H1, Icon, Inline, Input, Link, Radio, SearchInput, SearchResult, Stack, Text, Toggle } from "@amboss/design-system";

export const App: React.FC = () => {

  const [value, setValue] = React.useState("");

  const onChange = useCallback((e: { target: { value: React.SetStateAction<string>; }; }) => setValue(e.target.value), [setValue]);
  const onClear = useCallback(() => setValue(""), [setValue]);

  return (
    <div className="app">
      <Box space="xxl">
      <Stack space="xl">
        <Stack space="l">
          <Inline vAlignItems="center">
          <H1>Welcome to design system at AMBOSS</H1>
          <Badge text="BETA" color="purple" />
          </Inline>
          <Columns gap="l">
            <Column size={[12, 6, 6]}>
              <Text size="m">
                Thank you for checking out AMBOSS Design System! This an
                overview of the design system in its full glory. Please address
                your feedback to the Design System team. Enjoy!
              </Text>
            </Column>
          </Columns>
        </Stack>

        <Columns gap="m">
          <Column size={[12, 6, 6]}>
            <Card title="Let's start with some Text">
              <CardBox>
                <Stack space="xs">
                  <Text weight="bold"> Text can be extra small : </Text>
                  <Text size="xs">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.
                  </Text>
                </Stack>
              </CardBox>
              <Divider />
              <CardBox>
                <Stack space="xs">
                  <Text weight="bold"> Or simply small : </Text>
                  <Text size="s">
                    Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus.
                  </Text>
                </Stack>
              </CardBox>
              <Divider />
              <CardBox>
                <Stack space="xs">
                  <Text weight="bold"> Or medium size : </Text>
                  <Text size="m">
                    Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                    ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
                    feugiat a, tellus. Phasellus viverra nulla ut metus varius
                    laoreet.
                  </Text>
                </Stack>
              </CardBox>
              <Divider />
              <CardBox>
                <Stack space="xs">
                  <Text weight="bold">
                    Also text as a span instead of paragraph:
                  </Text>
                  <div>
                    <Text size="m" as="span">
                      First line
                    </Text>
                    <Text size="m" as="span">
                      Second line
                    </Text>
                  </div>
                </Stack>
              </CardBox>
              <Divider />
              <CardBox>
                <Stack space="xs">
                  <Text weight="bold"> Or tertiary Text : </Text>
                  <Text size="m" color="tertiary">
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                    reiciendis voluptatibus maiores alias consequatur aut
                    perferendis doloribus asperiores repellat.
                  </Text>
                </Stack>
              </CardBox>
              <Divider />
              <CardBox>
                <Text size="m" weight="bold">
                  We&apos;re ending this text section with some bold statements.
                </Text>
              </CardBox>
            </Card>
          </Column>
          <Column size={[12, 6, 6]}>
            <Columns gap="m">
              <Column size={12}>
                <Card
                  title="Cards could have nice dropdown in header"
                  overflow="visible"
                  dropdown={{
                    menuItems: [{ label: "item1", onSelect: () => {} }],
                  }}
                >
                  <CardBox>
                    <Text>
                      We highly recommend to click on button in header
                    </Text>
                  </CardBox>
                </Card>
              </Column>
              <Column size={12}>
                <Card title="Lists are easy to create">
                  <CardBox>
                    <Inline space="m" vAlignItems="center">
                      <Text>
                        <Icon name="article" />
                      </Text>
                      <Text>Article</Text>
                    </Inline>
                  </CardBox>
                  <Divider />
                  <CardBox>
                    <Inline space="m" vAlignItems="center">
                      <Text>
                        <Icon name="auditor" />
                      </Text>
                      <Text>Auditor</Text>
                    </Inline>
                  </CardBox>
                  <Divider />
                  <CardBox>
                    <Inline space="m" vAlignItems="center">
                      <Text>
                        <Icon name="bulb" />
                      </Text>
                      <Text>Bulb</Text>
                    </Inline>
                  </CardBox>
                </Card>
              </Column>
              <Column size={12}>
                <Card title="We also have Links">
                  <CardBox>
                    <Stack>
                      <Link href="https://www.amboss.com/de" size="m">
                        Lonely Medium Link
                      </Link>
                      <Link href="https://www.amboss.com/de" size="s">
                        Lonely Small Link
                      </Link>
                      <Link href="https://www.amboss.com/de" size="xs">
                        Lonely Extra Small Link
                      </Link>
                      <Text size="m" color="tertiary">
                        This is
                        <Link href="https://www.amboss.com/de" color="tertiary">
                          {" a tertiary Link "}
                        </Link>
                        inside a tertiary Text.
                      </Text>
                    </Stack>
                  </CardBox>
                </Card>
              </Column>
            </Columns>
          </Column>
        </Columns>
      </Stack>
    </Box>
    <Box space="xxl">
      <Card title="Let's add a beautiful form">
        <CardBox>
          <Stack space="m">
            <Input
              name="username"
              label="Username"
              labelHint="username hint"
              value={undefined}
              placeholder="username"
            />
            <Input
              type="password"
              name="password"
              labelHint="password hint"
              label="Password"
              value={undefined}
              placeholder="password"
            />
            <FormFieldGroup label="Type" labelHint="OPTIONAL">
              <Radio label="Frontend" name="type" />
              <Radio label="Backend" name="type" />
              <Radio label="Fullstack" name="type" />
            </FormFieldGroup>

            <Checkbox name="remeberme" label="Remember me?" />

            <Toggle name="enable" label="Enable awesomeness" />
          </Stack>
        </CardBox>
      </Card>
    </Box>
    </div>
  );
};
