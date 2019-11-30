export const fetchGraphql = async (query, variables) => {
  const { data } = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables
    })
  }).then(res => res.json())
  return data;
}
