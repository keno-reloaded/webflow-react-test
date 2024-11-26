import React, { useCallback } from 'react';
import './styles/App.scss';
import { Box, H1, Inline, SearchInput, SearchResult } from "@amboss/design-system";

const App: React.FC = () => {

  const [value, setValue] = React.useState("");

  const onChange = useCallback((e: { target: { value: React.SetStateAction<string>; }; }) => setValue(e.target.value), [setValue]);
  const onClear = useCallback(() => setValue(""), [setValue]);

  return (
    <Inline alignItems="center">
      <Box>
        <SearchInput
          name="search"
          placeholder="Placeholder text - long text will be truncated"
          value={value}
          onChange={onChange}
          onClear={onClear}
        />
      </Box>
    </Inline>
  );
};

export default App;
