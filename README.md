# Little Einstein Studio - Creative Tech Agency Website

A modern, production-ready website built with Next.js 14, TypeScript, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **TailwindCSS** for styling
- **Framer Motion** for smooth animations
- **Lucide Icons** for iconography
- **Fully Responsive** design
- **SEO Optimized** with metadata
- **Performance Optimized** with Next.js Image component
- **Accessibility** best practices

## 📁 Project Structure

```
little-einstein-studio/
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── portfolio/         # Portfolio listing
│   │   └── [id]/         # Portfolio detail pages
│   ├── insights/          # Blog listing
│   │   └── [id]/         # Blog detail pages
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── Navigation.tsx    # Navigation bar
│   └── Footer.tsx        # Footer component
├── sections/             # Page sections
├── data/                 # Mock data and content
├── lib/                  # Utility functions
└── public/               # Static assets
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Adding Real Content

### Update Content Data

Edit the content in `/data/content.ts`:

- **Site Content**: Hero, services, projects, testimonials
- **About Content**: Mission, values, workflow
- **Services Content**: Service details, deliverables, tools
- **Portfolio Content**: Case studies with images, tech stack
- **Blog Content**: Articles and insights

### Replace Placeholder Images

1. Add your images to `/public/images/`
2. Update image paths in content files
3. Use Next.js Image component for optimization

### Update Metadata

Each page has metadata in its `page.tsx` file. Update:
- Title
- Description
- Open Graph tags
- Keywords

### Customize Branding

1. **Colors**: Edit `tailwind.config.ts`
   - Primary colors: Purple, Blue Electric
   - Text: Charcoal

2. **Fonts**: Already configured (Inter, Sora)
   - Change in `app/layout.tsx` if needed

3. **Logo**: Update in `components/Navigation.tsx` and `components/Footer.tsx`

## 🎨 Design System

### Colors
- **Charcoal**: `#1a1a1a` - Primary text
- **Purple**: `#7c3aed` - Primary brand color
- **Blue Electric**: `#00d4ff` - Accent color
- **White**: `#ffffff` - Background

### Typography
- **Display Font**: Sora (headings)
- **Body Font**: Inter (body text)

### Components

All reusable components are in `/components/ui/`:
- `Button` - Various button variants
- `SectionHeader` - Section titles with tags
- `AnimatedReveal` - Scroll animations
- `TestimonialCard` - Testimonial display
- `CaseStudyCard` - Portfolio item cards
- `BlogCard` - Blog post cards

## 📧 Contact Form

The contact form currently logs to console. To connect to a backend:

1. Create an API route: `/app/api/contact/route.ts`
2. Update form handler in `/app/contact/page.tsx`
3. Add environment variables for email service (SendGrid, Resend, etc.)

Example API route structure:
```typescript
export async function POST(request: Request) {
  const data = await request.json();
  // Send email or save to database
  return Response.json({ success: true });
}
```

## 🔍 SEO Optimization

- All pages include proper metadata
- Open Graph tags for social sharing
- Semantic HTML structure
- Image optimization with Next.js Image
- Fast loading times

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
# Deploy the .next folder
```

## 📚 Next Steps

1. **Add Real Images**: Replace placeholder images
2. **Connect Contact Form**: Set up email service
3. **Add Analytics**: Google Analytics or similar
4. **Content Management**: Consider adding a CMS (Sanity, Contentful)
5. **Performance**: Add caching strategies
6. **Testing**: Add unit and integration tests

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is private and proprietary.

## 📞 Support

For questions or support, contact hello@littleeinstein.studio

---

Built with ❤️ by Little Einstein Studio

