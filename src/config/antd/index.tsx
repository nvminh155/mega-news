import { ConfigProvider } from "antd";

export const ConfigAntd = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "hsl(350, 94%, 53%)",
          fontFamily: '"Roboto", sans-serif',
          fontSize: 16,
        },
        components: {
          Button: {},
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
