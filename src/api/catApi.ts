export const fetchCats = async (pageNumber: number) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
    'x-api-key': 'DEMO-API-KEY',
  })

  const requestOptions: RequestInit = {
    method: 'GET',
    headers: headers,
    redirect: 'follow',
  }

  try {
    const responses = await Promise.all(
      Array.from({ length: 30 }).map(() =>
        fetch(
          `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=${pageNumber}&limit=1`,
          requestOptions
        ).then(response => response.json())
      )
    )

    return responses.length === 0 ? [] : responses.map((data: any) => data[0])
  } catch (error) {
    console.log('Error fetching cats:', error)
    return []
  }
}
