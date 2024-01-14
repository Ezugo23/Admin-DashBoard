// CustomAutocomplete.jsx
import React, { useEffect } from 'react';
import { usePlacesAutocomplete } from 'use-places-autocomplete';

const CustomAutocomplete = ({ onLoad }) => {
  const {
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      types: ['(regions)'],
    },
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = (suggestion) => {
    setValue(suggestion.description, false);
    clearSuggestions();
    onLoad(suggestion);
  };

  return (
    <div>
      <input value="" onChange={handleInput} placeholder="Enter location" />
      {status === 'OK' && (
        <ul>
          {data.map((suggestion) => (
            <li
              key={suggestion.place_id}
              onClick={() => handleSelect(suggestion)}
            >
              {suggestion.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomAutocomplete;
