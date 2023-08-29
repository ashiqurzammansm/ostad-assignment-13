import { useState } from 'react';
import { NextResponse } from 'next/server';

export default function SetCookiePage() {
  const [userPreference, setUserPreference] = useState('');

  const handleSetPreference = (preference) => {
    document.cookie = `user-preference=${preference}`;
    setUserPreference(preference);
  };

  return (
    <div>
      <h1>Set User Preference</h1>
      <button onClick={() => handleSetPreference('theme: dark')}>Set Dark Theme</button>
      <button onClick={() => handleSetPreference('language: en')}>Set English Language</button>
      <p>User Preference: {userPreference}</p>
    </div>
  );
}
