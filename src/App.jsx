import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";

import styles from "./App.module.css"

const { wrapper } = styles;

function App() {
  return (
    <>
      <Header />
      <div className={wrapper}>
        <Sidebar />
        <main>
          post 1
          post 2
        </main>
      </div>
    </>
  );
}

export default App;
