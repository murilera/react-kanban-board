import { MockHandler } from 'vite-plugin-mock-server';

export default (): MockHandler[] => [
  {
    pattern: '/api/persons',
    method: 'GET',
    handle: (req, res) => {
      const data = [
        {
          id: 1,
          name: 'Albert Einstein',
        },
        {
          id: 2,
          name: 'Caroline Herschel',
        },
        {
          id: 3,
          name: 'Enrico Fermi',
        }
      ];
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
    }
  }
];