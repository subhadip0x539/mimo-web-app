import { ThemeProvider } from "./components/feature/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-secondary h-screen w-screen"></div>
    </ThemeProvider>
  );
}

export default App;
