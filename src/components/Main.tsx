import { useState } from 'react';
import { DiagResult } from './DiagResult';
import { HeaderMenu } from './HeaderMenu';
import { StarterScreen } from './StarterScreen';

export default function Main() {
  const [displayStart, setDisplayStart] = useState(true);

  return (
    <>
      <HeaderMenu />
      {displayStart ? (
        <StarterScreen start={setDisplayStart} />
      ) : (
        <DiagResult start={setDisplayStart} />
      )}
    </>
  );
}
