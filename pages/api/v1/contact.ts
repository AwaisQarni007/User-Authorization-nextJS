// pages/api/v1/contact.ts
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const formData = req.body // Access form data here
    // Perform any necessary processing and validation
    return res.status(200).json(formData)
  } else {
    return res.status(405).end() // Method Not Allowed
  }
}
