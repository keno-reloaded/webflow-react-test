import React, { useCallback } from 'react';
import './styles/App.scss';
import { Box, Card, H1, Inline, SearchInput, SearchResult } from "@amboss/design-system";

export const App: React.FC = () => {

  const [value, setValue] = React.useState("");

  const onChange = useCallback((e: { target: { value: React.SetStateAction<string>; }; }) => setValue(e.target.value), [setValue]);
  const onClear = useCallback(() => setValue(""), [setValue]);

  return (
    <div className="app">
      <Box>
        <Inline alignItems="center">
          <Card>
            <Box>
              <SearchInput
                name="search"
                placeholder="Placeholder text - long text will be truncated"
                value={value}
                onChange={onChange}
                onClear={onClear}
              />
            </Box>
          </Card>
        </Inline>
      </Box>
    </div>
  );
};
