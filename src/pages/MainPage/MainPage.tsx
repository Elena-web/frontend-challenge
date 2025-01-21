import './MainPage.css'
import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Container from '../../components/Container/Container'
import { CardsWrapper, LoadWrap } from '../../components/Container/Container.styles'
import Card from '../../components/Card/Card'
import { fetchCats } from '../../api/catApi'
import { CatImage } from '../../app/styles/interfaces'

const SCROLL_THRESHOLD = 50

function App() {
  const [cats, setCats] = useState<CatImage[]>([])
  const [likedCats, setLikedCats] = useState<CatImage[]>([])
  const [showLiked, setShowLiked] = useState(false)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)

  const toggleLike = (cat: CatImage) => {
    if (likedCats.includes(cat)) {
      setLikedCats(likedCats.filter(likedCat => likedCat.id !== cat.id))
    } else {
      setLikedCats([...likedCats, cat])
    }
  }

  const handleShowLiked = (showFavorite: boolean) => {
    setShowLiked(showFavorite)
  }

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget

    if (scrollHeight - scrollTop <= clientHeight + SCROLL_THRESHOLD && !loading) {
      setPage(prevPage => prevPage + 1)
    }
  }

  useEffect(() => {
    const savedLikedCats = localStorage.getItem('likedCats')

    if (savedLikedCats) {
      setLikedCats(JSON.parse(savedLikedCats))
    }

    const loadCats = async (pageNumber: number) => {
      setLoading(true)
      const catsData = await fetchCats(pageNumber)
      setCats(prevCats => prevCats.concat(catsData))
      setLoading(false)
    }

    loadCats(page)
  }, [page])

  useEffect(() => {
    localStorage.setItem('likedCats', JSON.stringify(likedCats))
  }, [likedCats])

  return (
    <>
      <Header
        onShowLiked={handleShowLiked}
        showLiked={showLiked}
      />
      <Container onScroll={handleScroll}>
        <CardsWrapper>
          {(showLiked ? likedCats : cats).map(cat => (
            <Card
              key={cat.id}
              cat={cat}
              onToggleLike={toggleLike}
              likedCats={likedCats}
            />
          ))}
        </CardsWrapper>
		{loading && <LoadWrap>... загружаем еще котиков ...</LoadWrap>}
      </Container>
    </>
  )
}

export default App
