import { UserView } from "./components/UserView";

function App() {
  return (
    <>
      <main className="container mx-auto flex md:flex-row flex-col items-center justify-center gap-10 h-screen py-20">
        <UserView />
      </main>
    </>
  );
}

export default App;
