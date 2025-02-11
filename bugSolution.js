```javascript
// pages/index.js
import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/data');
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
```

```javascript
// pages/api/data.js
export default async function handler(req, res) {
  res.status(200).json({ items: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }] });
}
```