/**
 * Code inspired/informed from Material UI examples at:
 * https://mui.com/components/toggle-button/#exclusive-selection
 */

import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState('high');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="low" aria-label="low">Low</ToggleButton>
      <ToggleButton value="med" aria-label="med">Medium</ToggleButton>
      <ToggleButton value="high" aria-label="high">High</ToggleButton>
    </ToggleButtonGroup>
  );
}