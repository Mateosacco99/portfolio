# Component Documentation

This document provides detailed information about all the generic, reusable components in this portfolio project.

## Table of Contents

1. [Button](#button)
2. [Card](#card)
3. [Input](#input)
4. [Textarea](#textarea)
5. [Table](#table)
6. [Modal](#modal)
7. [Navbar](#navbar)
8. [Footer](#footer)

---

## Button

A versatile button component supporting multiple variants, sizes, and states.

### Import
```jsx
import { Button } from './components';
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | Visual style of the button |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the button |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `fullWidth` | `boolean` | `false` | Whether the button should take full width |
| `onClick` | `function` | - | Click event handler |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `ReactNode` | - | Button content |

### Examples

```jsx
// Primary button
<Button variant="primary" onClick={handleClick}>
  Submit
</Button>

// Large outline button
<Button variant="outline" size="lg">
  Learn More
</Button>

// Full width disabled button
<Button disabled fullWidth>
  Processing...
</Button>

// Submit button for forms
<Button type="submit" variant="primary">
  Send Message
</Button>
```

### Variants Preview

- **Primary**: Blue background with white text
- **Secondary**: Gray background with white text
- **Outline**: Transparent background with colored border
- **Ghost**: Transparent background, colored text, subtle hover effect

---

## Card

A flexible card component for displaying grouped content with optional header and footer.

### Import
```jsx
import { Card } from './components';
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Card title in header |
| `subtitle` | `string` | - | Card subtitle in header |
| `footer` | `ReactNode` | - | Content for card footer |
| `hoverable` | `boolean` | `false` | Whether card should have hover effect |
| `onClick` | `function` | - | Click event handler |
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `ReactNode` | - | Card body content |

### Examples

```jsx
// Simple card
<Card>
  <p>This is card content</p>
</Card>

// Card with title and subtitle
<Card 
  title="Project Title" 
  subtitle="Project description"
  hoverable
>
  <p>Detailed project information</p>
</Card>

// Card with footer
<Card 
  title="Notification"
  footer={<Button size="sm">View Details</Button>}
>
  <p>You have a new message</p>
</Card>

// Clickable card
<Card hoverable onClick={() => navigate('/details')}>
  <h3>Click me!</h3>
</Card>
```

---

## Input

A form input component with label, validation, and error handling.

### Import
```jsx
import { Input } from './components';
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `string` | `'text'` | HTML input type |
| `label` | `string` | - | Input label text |
| `placeholder` | `string` | - | Placeholder text |
| `value` | `string` | - | Input value |
| `onChange` | `function` | - | Change event handler |
| `error` | `string` | - | Error message to display |
| `required` | `boolean` | `false` | Whether field is required |
| `disabled` | `boolean` | `false` | Whether input is disabled |
| `id` | `string` | auto-generated | HTML id attribute |
| `className` | `string` | `''` | Additional CSS classes |

### Examples

```jsx
// Text input
<Input
  label="Full Name"
  placeholder="Enter your name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  required
/>

// Email input with validation
<Input
  type="email"
  label="Email Address"
  placeholder="you@example.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={emailError}
  required
/>

// Password input
<Input
  type="password"
  label="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
/>

// Disabled input
<Input
  label="Username"
  value={username}
  disabled
/>
```

---

## Textarea

A textarea component with label, validation, and error handling.

### Import
```jsx
import { Textarea } from './components';
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Textarea label text |
| `placeholder` | `string` | - | Placeholder text |
| `value` | `string` | - | Textarea value |
| `onChange` | `function` | - | Change event handler |
| `error` | `string` | - | Error message to display |
| `rows` | `number` | `4` | Number of visible rows |
| `required` | `boolean` | `false` | Whether field is required |
| `disabled` | `boolean` | `false` | Whether textarea is disabled |
| `id` | `string` | auto-generated | HTML id attribute |
| `className` | `string` | `''` | Additional CSS classes |

### Examples

```jsx
// Basic textarea
<Textarea
  label="Message"
  placeholder="Enter your message"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
/>

// Textarea with validation
<Textarea
  label="Description"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  error={descError}
  rows={6}
  required
/>

// Read-only textarea
<Textarea
  label="Terms and Conditions"
  value={terms}
  disabled
  rows={10}
/>
```

---

## Table

A responsive table component with customizable columns and rendering.

### Import
```jsx
import { Table } from './components';
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `Array<Column>` | `[]` | Array of column definitions |
| `data` | `Array<Object>` | `[]` | Array of data objects |
| `striped` | `boolean` | `false` | Whether to show striped rows |
| `hoverable` | `boolean` | `false` | Whether rows should have hover effect |
| `className` | `string` | `''` | Additional CSS classes |

### Column Object Structure

```typescript
{
  key: string;          // Property key in data object
  label: string;        // Column header text
  render?: (value, row) => ReactNode; // Optional custom renderer
}
```

### Examples

```jsx
// Basic table
const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' }
];

const data = [
  { name: 'John Doe', email: 'john@example.com', role: 'Developer' },
  { name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' }
];

<Table columns={columns} data={data} />

// Table with custom rendering
const columns = [
  { key: 'name', label: 'Name' },
  { 
    key: 'status', 
    label: 'Status',
    render: (value) => (
      <span className={value === 'active' ? 'text-green-600' : 'text-red-600'}>
        {value}
      </span>
    )
  },
  {
    key: 'actions',
    label: 'Actions',
    render: (_, row) => (
      <Button size="sm" onClick={() => handleEdit(row)}>Edit</Button>
    )
  }
];

<Table columns={columns} data={data} striped hoverable />
```

---

## Modal

A modal dialog component with header, body, and footer sections.

### Import
```jsx
import { Modal } from './components';
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | - | Whether modal is visible |
| `onClose` | `function` | - | Function to call when closing |
| `title` | `string` | - | Modal title in header |
| `footer` | `ReactNode` | - | Content for modal footer |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of modal |
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `ReactNode` | - | Modal body content |

### Examples

```jsx
// Simple modal
const [isOpen, setIsOpen] = useState(false);

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirmation"
>
  <p>Are you sure you want to proceed?</p>
</Modal>

// Modal with footer actions
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Delete Item"
  footer={
    <>
      <Button variant="ghost" onClick={() => setIsOpen(false)}>
        Cancel
      </Button>
      <Button variant="primary" onClick={handleDelete}>
        Delete
      </Button>
    </>
  }
>
  <p>This action cannot be undone.</p>
</Modal>

// Large modal
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Details"
  size="lg"
>
  <div>Detailed content here...</div>
</Modal>
```

---

## Navbar

A responsive navigation bar with mobile menu support.

### Import
```jsx
import { Navbar } from './components';
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logo` | `string \| ReactNode` | `'Portfolio'` | Logo text or component |
| `links` | `Array<Link>` | `[]` | Navigation links |
| `actions` | `ReactNode` | - | Additional actions (e.g., buttons) |
| `className` | `string` | `''` | Additional CSS classes |

### Link Object Structure

```typescript
{
  label: string;  // Link text
  href: string;   // Link URL
}
```

### Examples

```jsx
// Basic navbar
const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
];

<Navbar logo="My Site" links={links} />

// Navbar with actions
<Navbar
  logo="My App"
  links={links}
  actions={
    <Button variant="primary" size="sm">
      Sign In
    </Button>
  }
/>

// Navbar with custom logo
<Navbar
  logo={<img src="/logo.png" alt="Logo" />}
  links={links}
/>
```

---

## Footer

A footer component with copyright, links, and social media icons.

### Import
```jsx
import { Footer } from './components';
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `copyright` | `string` | `'© 2024 Portfolio. All rights reserved.'` | Copyright text |
| `links` | `Array<Link>` | `[]` | Footer links |
| `socialLinks` | `Array<SocialLink>` | `[]` | Social media links |
| `className` | `string` | `''` | Additional CSS classes |

### Link Object Structure

```typescript
{
  label: string;  // Link text
  href: string;   // Link URL
}
```

### SocialLink Object Structure

```typescript
{
  label: string;     // Accessible label
  href: string;      // Link URL
  icon: ReactNode;   // Icon component/element
}
```

### Examples

```jsx
// Basic footer
<Footer copyright="© 2024 My Company" />

// Footer with links
const footerLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' }
];

<Footer
  copyright="© 2024 My Company"
  links={footerLinks}
/>

// Footer with social links
const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/username',
    icon: <GitHubIcon />
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/username',
    icon: <LinkedInIcon />
  }
];

<Footer
  copyright="© 2024 My Company"
  links={footerLinks}
  socialLinks={socialLinks}
/>
```

---

## Best Practices

1. **Always import from the index file**: Use `import { Button, Card } from './components'` rather than importing individual files.

2. **Consistent styling**: All components use Tailwind CSS utilities. Extend styling using the `className` prop when needed.

3. **Accessibility**: Components include proper ARIA labels and semantic HTML. Always provide meaningful labels and alt text.

4. **Responsive by default**: All components are mobile-first and responsive. Test on different screen sizes.

5. **Type safety**: Consider adding PropTypes or TypeScript for better type safety in production applications.

6. **Form validation**: Use the `error` prop on Input and Textarea components to display validation messages.

7. **Event handlers**: Always handle errors in onClick and onChange handlers to prevent crashes.

8. **Performance**: Use React.memo() for components that receive complex props and don't need to re-render often.

## Need Help?

For questions or issues with components, please:
1. Check the examples in this documentation
2. Review the component source code in `src/components/`
3. Open an issue on the GitHub repository
