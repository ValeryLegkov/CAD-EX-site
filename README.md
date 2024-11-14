# Project

**CAD-EX-site**
This is a simple two-page website that includes a main page, a contact page with a form, and a basic backend that can respond based on the form data.

## Demo

[Project demo on Vercel](https://yourprojectname.vercel.app)

## STACK

- **Programming language** TypeScript
- **Frontend/Fullstack**: Next.js, React, Tailwind CSS
- **Libraries**: React Hook Form, React Spinners, Shadcn/ui, React Lite YouTube Embed, Lucide React
- **Deploy**: Vercel
- **Package manager**: Bun

## Functional

- **Feedback Form**: The user can send their contact details and message through the form.
- **Form State Management & Validation**: Uses React Hook Form (useForm) to manage state using register & setting up simple custom input field validation.
- **API for processing form data**: The form sends data to the `/api/contact` API, which processes the request and returns a message.
- **Global page "404 - Not Found"**: Handler for all invalid routes. If the user enters a non-existent page address, a custom page is displayed with an error message & a button that leads to the main page.

## API

### Endpoint

- `POST /api/contact` - accepts form data sent from the frontend and returns a successful submission message.

### Example request:

```

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello! I'd like to get in touch."
}
```

### Example response

```
{
  "message": "Thank you for your message, John Doe! Hello! I'd like to get in touch."
}
```

## Deploy

- This project is deployed on Vercel. With each push to the `main` branch, the deployment is automatically updated.

## Установка и запуск проекта

### Предварительные требования

- Make sure you have `Bun`, `Node.js` and `Git` installed.

### Локальный запуск

1. Clone repo:
   ```bash
   git clone https://github.com/yourusername/yourprojectname.git
   cd your project name
   ```
2. Install dependencies using Bun: `bun install`

3. Start project: `bun run dev`

## Additional information

- **_Contact Page_**: After submitting the form, the page refreshes to display the user's message.
- **_"Go Main Page"_** button: After submitting the form, the user sees a button to return to the home page.
