import Theme from "@/theme/Theme";
import Provider from "@/provider/provider";

export const metadata = {
  title: "Admin Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Theme>{children}</Theme>
        </Provider>
      </body>
    </html>
  );
}
