export const metadata = {
  title: 'Video Player',
  description: 'Modern video player application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', background: '#0f0f0f' }}>
        {children}
      </body>
    </html>
  )
}
