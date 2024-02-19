import { MockHandler } from 'vite-plugin-mock-server';

export default (): MockHandler[] => [
  {
    pattern: '/api/swimlanes',
    method: 'GET',
    handle: (req, res) => {
      const data = [
        {
          id: 1,
          title: 'Todo',
        },
        {
          id: 2,
          title: 'In Progress',
        },
        {
          id: 3,
          title: 'Done',
        }
      ];
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
    }
  }
];