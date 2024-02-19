import { MockHandler } from 'vite-plugin-mock-server';

export default (): MockHandler[] => [
  {
    pattern: '/api/tickets',
    method: 'GET',
    handle: (req, res) => {
      const data = [
        {
          id: 1,
          title: 'Ticket 1 title',
          description: 'Ticket 1 description',
          assignedTo: null,
        },
        {
          id: 2,
          title: 'Ticket 2 title',
          description: 'Ticket 2 description',
          assignedTo: null,
        },
        {
          id: 3,
          title: 'Ticket 3 title',
          description: 'Ticket 3 description',
          assignedTo: null,
        }
      ];
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
    }
  }
];