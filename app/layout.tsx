import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Quiz Difficulty Calibrator',
  description: 'Automatically adjust quiz difficulty based on student performance. Analyzes quiz results to suggest question difficulty adjustments for online educators.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="78e83665-e178-4a77-bd9c-db3d1d8a2205"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
