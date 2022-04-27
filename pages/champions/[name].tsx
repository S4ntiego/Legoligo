export const getStaticPaths = async () => {
  const res = await fetch(
    'http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json'
  )

  const data = await res.json()
  const champs = Object.values(data.data)

  const paths = champs.map((champion: any) => {
    return {
      params: { name: champion.name },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const res = await fetch(
    'http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json'
  )

  const champions = await res.json()
  const champs = Object.values(champions.data)

  return {
    props: {
      champs,
    },
  }
}

const Details = (champs) => {
  return <div>Details Page</div>
}

export default Details
