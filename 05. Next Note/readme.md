## Start Project
```sh
npx create-next-app@latest appname
```
```sh
npm run build
npm run start
```
```sh
npm run dev
```
### Project Structure
```
blog-app/
├── app/                       # The root of the App Router
│   ├── (blog)/                # A route group for organizing blog-related routes
│   │   ├── blog/
│   │   │   ├── page.tsx          # The main blog page showing a list of posts
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # A dynamic page for a single blog post
│   │   └── layout.tsx         # A shared layout for all blog-related pages
│   ├── about/                 # Route for the "About" page
│   │   └── page.tsx
│   ├── page.tsx               # The homepage of the site
│   ├── layout.tsx             # The root layout, wrapping the entire application
│   └── globals.css            # Global CSS styles
├── public/                    # Static assets like images and fonts
│   ├── images/
│   │   └── post-image.jpg
├── components/                # Reusable UI components
│   ├── blog/
│   │   ├── PostCard.tsx          # A component for displaying a post preview
│   │   └── PostContent.tsx       # A component for rendering the full post content
│   ├── ui/
│   │   ├── Header.tsx            # Global header component
│   │   └── Footer.tsx            # Global footer component
├── posts/                     # Directory for your Markdown blog posts
│   ├── post-one.md
│   ├── post-two.md
│   └── post-three.md
├── lib/                       # Utility functions and data fetching logic
│   └── posts.ts               # Functions for reading and parsing Markdown files
├── .env.local                 # Environment variables
├── next.config.mjs            # Next.js configuration
└── package.json               # Project dependencies and scripts
```
