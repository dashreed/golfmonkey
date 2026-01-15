import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Golf Monkey - Premium Golf Apparel</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'gm-navy': '#1e3a5f',
                    'gm-cream': '#f5f0e8',
                    'gm-gold': '#c9a962'
                  }
                }
              }
            }
          `
        }} />
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');
            .font-display { font-family: 'Playfair Display', serif; }
            .font-body { font-family: 'Inter', sans-serif; }
            .product-card:hover { transform: translateY(-8px); }
            .product-card { transition: all 0.3s ease; }
            .product-image { transition: transform 0.5s ease; }
            .product-card:hover .product-image { transform: scale(1.05); }
          `
        }} />
      </head>
      <body class="font-body bg-gm-cream">{children}</body>
    </html>
  )
})
