import { effect, signal } from '@preact/signals-react';

function App() {
  const name = signal('Watch Tower');
  effect(() => console.log(name.value));

  return (
    <>
      <h1 className='text-center'>{name}</h1>
    </>
  );
}

export default App;
