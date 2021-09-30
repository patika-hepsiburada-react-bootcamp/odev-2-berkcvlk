import GameProvider from "./gameContext";

const ContextProvider = ({ children }) => {
  return <GameProvider>{children}</GameProvider>;
};

export default ContextProvider;
