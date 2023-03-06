// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Hike } from '../../../types'



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Hike[]>
) {
  res.status(200).json([
    { 
        id: 1,
        name: "Big Mountain",
        description: "Hike a big mountain with me!",
        hikeImageUrl: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNDY0NjI2NTgvMDY0NDE4ZjQ3Y2ViN2UxYzhjNzExMjRhMDk1YTczZDguanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
        hikeLink: "https://www.alltrails.com/explore/trail/france/alpes-maritimes/tour-du-mont-alban?u=i",
        startDatetime: "2023-03-09T13:00",
        endDatetime: "2023-03-09T14:00" 
    }
])
}
