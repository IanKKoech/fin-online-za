import { createContext, useState, useEffect } from "react";

interface MyContextData {
  count: number;
  incrementCount: () => void;
}

export const MyContext = createContext<MyContextData>({
  count: 0,
  incrementCount: () => {},
});

interface MyContextProviderProps {
  children: React.ReactNode;
}

export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Perform any initialization or fetch data here
    // This will run once when the context provider mounts

    return () => {
      // Perform any cleanup here
      // This will run once when the context provider unmounts
    };
  }, []);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <MyContext.Provider value={{ count, incrementCount }}>
      {children}
    </MyContext.Provider>
  );
};
