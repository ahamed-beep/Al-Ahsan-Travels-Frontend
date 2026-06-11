"use client";
import { useEffect, useRef, useState } from "react";

export default function AirportSearch({ name = "airport", value, onChange, placeholder = "e.g. Heathrow" }) {
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);
  const [inputValue, setInputValue] = useState(value || "");

  useEffect(() => {
    const init = () => {
      if (!window.google || !inputRef.current) return;

      autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
        types: ["airport"],
        fields: ["name", "formatted_address"],
      });

      autocompleteRef.current.addListener("place_changed", () => {
        const place = autocompleteRef.current.getPlace();
        if (!place?.name) return;
        setInputValue(place.name);
        onChange({ target: { name, value: place.name } });
      });
    };

    if (window.google) {
      init();
    } else {
      const interval = setInterval(() => {
        if (window.google) {
          clearInterval(interval);
          init();
        }
      }, 200);
      return () => clearInterval(interval);
    }

    return () => {
      if (autocompleteRef.current) {
        window.google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onChange({ target: { name, value: e.target.value } });
  };

  return (
    <input
      ref={inputRef}
      type="text"
      name={name}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
      autoComplete="off"
      className="w-full px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] border border-gray-200 rounded-lg focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition placeholder-gray-400"
    />
  );
}