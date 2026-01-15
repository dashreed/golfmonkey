# Golf Monkey - Premium Golf Apparel

## Project Overview
- **Name**: Golf Monkey
- **Goal**: E-commerce website for premium golf apparel
- **Features**: Product catalog with 7 items, responsive design, API endpoints

## URLs
- **Preview**: https://3000-iohb4k3bwzw3c24b7salv-02b9cc79.sandbox.novita.ai
- **GitHub**: https://github.com/dashreed/golfmonkey

## Products
| Product | Price | Category |
|---------|-------|----------|
| Navy Pinstripe Performance Polo | $89 | Polos |
| Light Blue Argyle Polo | $94 | Polos |
| Cream Argyle Polo | $94 | Polos |
| Navy Puffer Vest | $149 | Outerwear |
| White Pinstripe Polo | $89 | Polos |
| Pink Grid Performance Polo | $94 | Polos |
| Navy Quarter-Zip Pullover | $119 | Outerwear |

## API Endpoints
- `GET /api/products` - List all products
- `GET /api/products/:id` - Get single product by ID

## Tech Stack
- **Framework**: Hono (TypeScript)
- **Styling**: TailwindCSS (CDN)
- **Icons**: Font Awesome
- **Fonts**: Playfair Display, Inter
- **Deployment**: Cloudflare Pages

## Development
```bash
# Install dependencies
npm install

# Build
npm run build

# Start development server
npm run dev

# Deploy to Cloudflare
npm run deploy
```

## Project Structure
```
webapp/
├── src/
│   ├── index.tsx      # Main app with routes and products
│   └── renderer.tsx   # HTML template with styling
├── public/
│   └── images/        # Product images
├── ecosystem.config.cjs
├── package.json
└── wrangler.jsonc
```

## Brand Colors
- **Navy**: #1e3a5f
- **Cream**: #f5f0e8
- **Gold**: #c9a962

## Next Steps
- [ ] Add shopping cart functionality
- [ ] Implement checkout flow
- [ ] Add product detail pages
- [ ] Connect to payment gateway (Stripe)
- [ ] Add user authentication
- [ ] Add inventory management

---
*Play Well. Look Better.* - Golf Monkey
