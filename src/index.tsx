import { Hono } from 'hono'
import { renderer } from './renderer'
import { serveStatic } from 'hono/cloudflare-pages'

const app = new Hono()

// Serve static files (images, etc.)
app.use('/images/*', serveStatic())

app.use(renderer)

// Product data
const products = [
  {
    id: 1,
    name: 'Navy Pinstripe Performance Polo',
    description: 'Classic navy polo with elegant vertical pinstripes. Features our signature Golf Monkey emblem on the chest.',
    price: 89,
    image: '/images/navy-pinstripe-polo.jpg',
    category: 'Polos',
    colors: ['Navy/White'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 2,
    name: 'Light Blue Argyle Polo',
    description: 'Sophisticated light blue polo with subtle argyle texture. Navy contrast trim on collar and sleeves.',
    price: 94,
    image: '/images/light-blue-argyle-polo.jpg',
    category: 'Polos',
    colors: ['Light Blue/Navy'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 3,
    name: 'Cream Argyle Polo',
    description: 'Timeless cream polo with refined argyle pattern. Perfect for the clubhouse or the course.',
    price: 94,
    image: '/images/cream-argyle-polo.jpg',
    category: 'Polos',
    colors: ['Cream/Navy'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 4,
    name: 'Navy Puffer Vest',
    description: 'Premium down-fill puffer vest in deep navy. Features contrast cream arm panels and embroidered logo.',
    price: 149,
    image: '/images/navy-puffer-vest.jpg',
    category: 'Outerwear',
    colors: ['Navy/Cream'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 5,
    name: 'White Pinstripe Polo',
    description: 'Crisp white polo with delicate navy pinstripes. Clean, classic, and ready for any round.',
    price: 89,
    image: '/images/white-pinstripe-polo.jpg',
    category: 'Polos',
    colors: ['White/Navy'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 6,
    name: 'Pink Grid Performance Polo',
    description: 'Distinctive dusty pink polo with micro-grid texture. Navy trim adds a refined finishing touch.',
    price: 94,
    image: '/images/pink-grid-polo.jpg',
    category: 'Polos',
    colors: ['Pink/Navy'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 7,
    name: 'Navy Quarter-Zip Pullover',
    description: 'The essential layering piece. Navy with cream embroidered GM logo on cuff and chest.',
    price: 119,
    image: '/images/navy-quarter-zip.jpg',
    category: 'Outerwear',
    colors: ['Navy/Cream'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 8,
    name: 'Navy Performance Windbreaker',
    description: 'Lightweight wind-resistant jacket with cream piping details. Features the iconic Golf Monkey logo on chest.',
    price: 139,
    image: '/images/navy-windbreaker.jpg',
    category: 'Outerwear',
    colors: ['Navy/Cream'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 9,
    name: 'Navy Sweater Vest',
    description: 'Classic diamond-knit sweater vest with cream trim. Perfect layering piece for cooler rounds.',
    price: 109,
    image: '/images/navy-sweater-vest.jpg',
    category: 'Outerwear',
    colors: ['Navy/Cream'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 10,
    name: 'Banana Leaf Performance Polo',
    description: 'Bold tropical print polo with navy and green banana leaf pattern. Stand out on the course.',
    price: 99,
    image: '/images/banana-leaf-polo.jpg',
    category: 'Polos',
    colors: ['Navy/Green/White'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 11,
    name: 'Sage Herringbone Polo',
    description: 'Refined sage green polo with subtle herringbone texture and navy contrast trim.',
    price: 94,
    image: '/images/sage-herringbone-polo.jpg',
    category: 'Polos',
    colors: ['Sage/Navy'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 12,
    name: 'Classic Navy Cap',
    description: 'Structured performance cap with embroidered Golf Monkey logo. Adjustable fit.',
    price: 39,
    image: '/images/navy-cap.jpg',
    category: 'Headwear',
    colors: ['Navy/Cream'],
    sizes: ['One Size']
  },
  {
    id: 13,
    name: 'Signature Leather Belt',
    description: 'Premium brown leather belt with antique brass Golf Monkey buckle. A statement piece.',
    price: 79,
    image: '/images/leather-belt.jpg',
    category: 'Accessories',
    colors: ['Brown/Brass'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 14,
    name: 'Knit Headcover Set',
    description: 'Set of 4 premium knit headcovers (Driver, 3W, 5W, Hybrid) with pom-pom tops and leather accents.',
    price: 129,
    image: '/images/headcovers-set.jpg',
    category: 'Accessories',
    colors: ['Navy/Cream'],
    sizes: ['One Size']
  },
  {
    id: 15,
    name: 'Monkey Driver Headcover',
    description: 'Plush monkey character headcover for your driver. The ultimate conversation starter.',
    price: 49,
    image: '/images/monkey-driver-cover.jpg',
    category: 'Accessories',
    colors: ['Navy/Cream'],
    sizes: ['One Size']
  },
  {
    id: 16,
    name: 'Waffle Golf Towel Set',
    description: 'Set of 2 premium waffle-weave golf towels with carabiner clip. Navy and cream options.',
    price: 44,
    image: '/images/golf-towels.jpg',
    category: 'Accessories',
    colors: ['Navy/Cream'],
    sizes: ['One Size']
  },
  {
    id: 17,
    name: 'Classic White Visor',
    description: 'Crisp white performance visor with navy trim and embroidered Golf Monkey logo. Perfect for sunny rounds.',
    price: 34,
    image: '/images/white-visor.jpg',
    category: 'Headwear',
    colors: ['White/Navy'],
    sizes: ['One Size']
  },
  {
    id: 18,
    name: 'Cream Bucket Hat',
    description: 'Relaxed-fit bucket hat in cream with navy stripe detail. Full sun protection with signature style.',
    price: 44,
    image: '/images/cream-bucket-hat.jpg',
    category: 'Headwear',
    colors: ['Cream/Navy'],
    sizes: ['S/M', 'L/XL']
  },
  {
    id: 19,
    name: 'Navy Pom Beanie',
    description: 'Cozy ribbed knit beanie with cream pom-pom and embroidered logo. Essential for cold weather rounds.',
    price: 38,
    image: '/images/navy-pom-beanie.jpg',
    category: 'Headwear',
    colors: ['Navy/Cream'],
    sizes: ['One Size']
  }
]

// API Routes
app.get('/api/products', (c) => {
  return c.json(products)
})

app.get('/api/products/:id', (c) => {
  const id = parseInt(c.req.param('id'))
  const product = products.find(p => p.id === id)
  if (!product) {
    return c.json({ error: 'Product not found' }, 404)
  }
  return c.json(product)
})

// Home page
app.get('/', (c) => {
  return c.render(
    <div class="min-h-screen">
      {/* Navigation */}
      <nav class="bg-gm-navy text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-20">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden p-1">
                <img src="/images/gm-logo.png" alt="Golf Monkey Logo" class="w-full h-full object-contain" />
              </div>
              <span class="font-display text-2xl font-semibold tracking-wide">GOLF MONKEY</span>
            </div>
            <div class="hidden md:flex items-center space-x-8">
              <a href="/" class="hover:text-gm-gold transition-colors font-medium">Shop All</a>
              <a href="#polos" class="hover:text-gm-gold transition-colors font-medium">Polos</a>
              <a href="#outerwear" class="hover:text-gm-gold transition-colors font-medium">Outerwear</a>
              <a href="#headwear" class="hover:text-gm-gold transition-colors font-medium">Headwear</a>
              <a href="#accessories" class="hover:text-gm-gold transition-colors font-medium">Accessories</a>
              <a href="#about" class="hover:text-gm-gold transition-colors font-medium">About</a>
            </div>
            <div class="flex items-center space-x-4">
              <button class="hover:text-gm-gold transition-colors">
                <i class="fas fa-search text-lg"></i>
              </button>
              <button class="hover:text-gm-gold transition-colors relative">
                <i class="fas fa-shopping-bag text-lg"></i>
                <span class="absolute -top-2 -right-2 bg-gm-gold text-gm-navy text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">0</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section class="relative text-white overflow-hidden">
        <div class="absolute inset-0">
          <img 
            src="/images/hero-golfer.jpg" 
            alt="Golfer wearing Golf Monkey apparel"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-gm-navy/90 via-gm-navy/70 to-transparent"></div>
        </div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div class="max-w-2xl">
            <h1 class="font-display text-5xl md:text-6xl font-bold mb-6">Elevate Your Game</h1>
            <p class="text-xl md:text-2xl text-gray-200 mb-10 font-light">
              Premium golf apparel crafted for players who demand style and performance on every hole.
            </p>
            <a href="#products" class="inline-block bg-gm-gold text-gm-navy px-10 py-4 font-semibold text-lg hover:bg-white transition-colors rounded">
              Shop Collection
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-10">
            <h2 class="font-display text-4xl font-bold text-gm-navy mb-4">Our Collection</h2>
            <p class="text-gray-600 max-w-xl mx-auto">
              Each piece is designed with the discerning golfer in mind. Quality fabrics, timeless designs, and the iconic Golf Monkey emblem.
            </p>
          </div>
          
          {/* Category Filter Tabs */}
          <div class="flex flex-wrap justify-center gap-2 mb-12">
            <button 
              onclick="filterProducts('all')" 
              id="filter-all"
              class="filter-btn active px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 bg-gm-navy text-white"
            >
              All Products
            </button>
            <button 
              onclick="filterProducts('Polos')" 
              id="filter-Polos"
              class="filter-btn px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 bg-gray-200 text-gm-navy hover:bg-gm-gold hover:text-gm-navy"
            >
              Polos
            </button>
            <button 
              onclick="filterProducts('Outerwear')" 
              id="filter-Outerwear"
              class="filter-btn px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 bg-gray-200 text-gm-navy hover:bg-gm-gold hover:text-gm-navy"
            >
              Outerwear
            </button>
            <button 
              onclick="filterProducts('Headwear')" 
              id="filter-Headwear"
              class="filter-btn px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 bg-gray-200 text-gm-navy hover:bg-gm-gold hover:text-gm-navy"
            >
              Headwear
            </button>
            <button 
              onclick="filterProducts('Accessories')" 
              id="filter-Accessories"
              class="filter-btn px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 bg-gray-200 text-gm-navy hover:bg-gm-gold hover:text-gm-navy"
            >
              Accessories
            </button>
          </div>
          
          <div id="products-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} data-category={product.category} class="product-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl cursor-pointer transition-all duration-300">
                <div class="aspect-square overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    class="product-image w-full h-full object-cover"
                  />
                </div>
                <div class="p-6">
                  <span class="text-xs font-semibold text-gm-gold uppercase tracking-wider">{product.category}</span>
                  <h3 class="font-display text-lg font-semibold text-gm-navy mt-1 mb-2">{product.name}</h3>
                  <p class="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div class="flex justify-between items-center">
                    <span class="text-xl font-bold text-gm-navy">${product.price}</span>
                    <button class="bg-gm-navy text-white px-4 py-2 text-sm font-medium hover:bg-gm-gold hover:text-gm-navy transition-colors rounded">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Filter Script */}
      <script dangerouslySetInnerHTML={{__html: `
        function filterProducts(category) {
          const cards = document.querySelectorAll('#products-grid .product-card');
          const buttons = document.querySelectorAll('.filter-btn');
          
          // Update button styles
          buttons.forEach(btn => {
            btn.classList.remove('bg-gm-navy', 'text-white');
            btn.classList.add('bg-gray-200', 'text-gm-navy');
          });
          
          const activeBtn = document.getElementById('filter-' + category);
          if (activeBtn) {
            activeBtn.classList.remove('bg-gray-200', 'text-gm-navy');
            activeBtn.classList.add('bg-gm-navy', 'text-white');
          }
          
          // Filter products with animation
          cards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (category === 'all' || cardCategory === category) {
              card.style.display = 'block';
              card.style.opacity = '0';
              card.style.transform = 'translateY(20px)';
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }, 50);
            } else {
              card.style.opacity = '0';
              card.style.transform = 'translateY(20px)';
              setTimeout(() => {
                card.style.display = 'none';
              }, 300);
            }
          });
        }
      `}} />

      {/* Features Section */}
      <section class="bg-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div class="w-16 h-16 bg-gm-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-leaf text-gm-gold text-2xl"></i>
              </div>
              <h3 class="font-display text-xl font-semibold text-gm-navy mb-3">Premium Materials</h3>
              <p class="text-gray-600">Performance fabrics that breathe, stretch, and keep you comfortable through 18 holes.</p>
            </div>
            <div>
              <div class="w-16 h-16 bg-gm-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-shipping-fast text-gm-gold text-2xl"></i>
              </div>
              <h3 class="font-display text-xl font-semibold text-gm-navy mb-3">Free Shipping</h3>
              <p class="text-gray-600">Complimentary shipping on all orders over $100. Delivered right to your door.</p>
            </div>
            <div>
              <div class="w-16 h-16 bg-gm-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-undo text-gm-gold text-2xl"></i>
              </div>
              <h3 class="font-display text-xl font-semibold text-gm-navy mb-3">Easy Returns</h3>
              <p class="text-gray-600">30-day hassle-free returns. If it doesn't fit your game, send it back.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" class="py-20 bg-gm-navy text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 class="font-display text-4xl font-bold mb-6">The Golf Monkey Story</h2>
              <p class="text-gray-300 mb-4 leading-relaxed">
                Born from a love of the game and a desire to bring something fresh to the fairway, Golf Monkey represents the perfect blend of tradition and personality.
              </p>
              <p class="text-gray-300 mb-6 leading-relaxed">
                Our signature monkey emblem—complete with golf club—reminds us not to take ourselves too seriously while still demanding excellence in everything we create.
              </p>
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-gm-cream rounded-full flex items-center justify-center">
                  <span class="text-gm-navy font-display font-bold">GM</span>
                </div>
                <span class="font-display text-xl">Play Well. Look Better.</span>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="relative">
                <div class="w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-gm-gold">
                  <img 
                    src="/images/golfer-portrait.jpg" 
                    alt="Golfer wearing Golf Monkey apparel"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="absolute -bottom-4 -left-4 bg-gm-gold text-gm-navy px-4 py-2 rounded-lg font-display font-bold shadow-lg">
                  #PlayWell
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="bg-gm-navy text-white py-16 border-t border-gray-700">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div class="flex items-center space-x-3 mb-6">
                <div class="w-10 h-10 bg-gm-cream rounded-full flex items-center justify-center">
                  <span class="text-gm-navy font-display font-bold">GM</span>
                </div>
                <span class="font-display text-xl font-semibold">GOLF MONKEY</span>
              </div>
              <p class="text-gray-400 text-sm">Premium golf apparel for the modern player.</p>
            </div>
            <div>
              <h4 class="font-semibold mb-4">Shop</h4>
              <ul class="space-y-2 text-gray-400">
                <li><a href="#" class="hover:text-gm-gold transition-colors">All Products</a></li>
                <li><a href="#" class="hover:text-gm-gold transition-colors">Polos</a></li>
                <li><a href="#" class="hover:text-gm-gold transition-colors">Outerwear</a></li>
                <li><a href="#" class="hover:text-gm-gold transition-colors">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-4">Company</h4>
              <ul class="space-y-2 text-gray-400">
                <li><a href="#" class="hover:text-gm-gold transition-colors">About Us</a></li>
                <li><a href="#" class="hover:text-gm-gold transition-colors">Contact</a></li>
                <li><a href="#" class="hover:text-gm-gold transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-4">Connect</h4>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-400 hover:text-gm-gold transition-colors">
                  <i class="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-gm-gold transition-colors">
                  <i class="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-gm-gold transition-colors">
                  <i class="fab fa-facebook text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2025 Golf Monkey. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
})

export default app
