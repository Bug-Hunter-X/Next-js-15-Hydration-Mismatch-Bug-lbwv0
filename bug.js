```javascript
// pages/index.js

export default function Home() {
  return (
    <div>Hello, world!</div>
  );
}
```

This code seems simple, but it can cause unexpected behavior in Next.js 15 due to **hydration mismatches** if the component's structure or content changes during client-side rendering.  Let's say you fetch some data on the client-side and update the UI based on that data. If the structure or content differs between what the server renders (in `getStaticProps` or `getServerSideProps`) and what the client renders, you'll see a hydration mismatch error.