# Finance App

A modern personal finance management application built with Next.js 14 and Supabase.

## 🚀 Live Demo

**[View Live Application](https://finance-app-qbz6.vercel.app/)** {visit :https://finance-app-qbz6.vercel.app/dashboard (for the actual working model) }

## ✨ Features

- **Authentication**: Secure email-based authentication with magic links
- **Transaction Management**: Add, edit, and delete income/expense transactions
- **Financial Insights**: View spending trends and financial summaries
- **User Profiles**: Customizable user profiles with avatar uploads
- **Responsive Design**: Optimized for desktop and mobile devices
- **Dark Mode**: Toggle between light and dark themes

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Supabase (Database, Authentication, Storage)
- **Deployment**: Vercel
- **UI Components**: Custom components with Lucide React icons

## 🏃‍♂️ Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up your environment variables in `.env.local`
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

## � Project Structure

```
app/
├── (auth)/                 # Authentication routes
│   ├── auth/
│   │   ├── confirm/        # Email confirmation handler
│   │   └── magiclink/      # Magic link handler
│   └── login/              # Login page
├── dashboard/              # Protected dashboard routes
│   ├── settings/           # User settings & profile
│   │   ├── avatar/         # Avatar upload
│   │   └── profile/        # Profile management
│   ├── transaction/        # Transaction management
│   │   ├── add/            # Add new transaction
│   │   └── [id]/edit/      # Edit existing transaction
│   └── page.tsx            # Dashboard home
├── playground/             # UI component showcase
└── layout.tsx              # Root layout

components/                 # Reusable UI components
├── ui/                     # Basic UI elements (Button, Input, etc.)
├── transaction-*.tsx       # Transaction-related components
├── avatar.tsx              # User avatar component
└── dark-mode-toggle.tsx    # Theme switcher

lib/
├── actions.ts              # Server actions for CRUD operations
├── supabase/               # Supabase client configuration
├── validation.ts           # Zod schemas for form validation
└── utils.ts                # Utility functions

hooks/                      # Custom React hooks
├── use-format-currency.ts  # Currency formatting
└── use-dark-mode.ts        # Dark mode management
```

## 🔧 Key Implementation Details

- **Server Actions**: Uses Next.js 14 server actions for secure database operations
- **Row Level Security**: Implements Supabase RLS policies for data protection
- **Real-time Updates**: Automatic UI updates after data mutations
- **Form Validation**: Zod schemas for type-safe form handling
- **Image Upload**: Supabase Storage integration for avatar uploads
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## �📱 Pages

- `/login` - Authentication
- `/dashboard` - Main dashboard with financial overview
- `/dashboard/transaction/add` - Add new transactions
- `/dashboard/settings` - User profile and settings
- `/playground` - UI component showcase
