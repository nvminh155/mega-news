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
          Breadcrumb: {
            itemColor: "hsla(var(--black), 1)",
            lastItemColor: "hsla(var(--tertiary), 0.5)",
            linkColor: "hsla(var(--black), 1)",
            separatorMargin: 1,
          },
          Input: {
            activeShadow: "none",
          },
          Upload: {
            
          },
          Carousel: {
            marginXXS: 10
          }
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
