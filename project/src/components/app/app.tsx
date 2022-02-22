import Main from '../main/main';

type AppScreenProps = {
  rentCount: number;
}

function App({rentCount}: AppScreenProps): JSX.Element {
  return (
    <Main rentCount = {rentCount} />
  );
}

export default App;
