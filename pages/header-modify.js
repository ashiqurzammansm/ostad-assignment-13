import { NextResponse } from 'next/server';

export default function handler(req, res) {
  const incomingToken = req.headers.authorization;
  const modifiedToken = `Bearer ${incomingToken}`;

  const response = NextResponse.next(req, res);
  response.setHeader('Authorization', modifiedToken);

  return response;
}
