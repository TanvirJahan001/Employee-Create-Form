import '../styles/globals.css';

export const metadata = {
  title: 'Employee Create Form',
  description: 'Create and manage employees with this form.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      <body>{children}</body>
    </html>
  );
}