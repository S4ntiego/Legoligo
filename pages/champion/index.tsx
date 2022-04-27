import type { NextPage } from 'next'
import Image from 'next/image'
import path from 'path'
import fs from 'fs'
import Link from 'next/link'

const Champion: NextPage = (data: any) => {
  // const champs = Object.values(champions.champions.data)
  // const dataFilePath = path
  const champs = Object.entries(data.data.data)

  const stats = champs.map((champ: any) => {
    return champ[1].stats
  })

  return (
    // Kontener na całą stronę, który dodaje marginesy i ustala szerokość
    <div className="container z-20 mx-auto text-white">
      {champs.map((champion: any) => (
        <Link href={`/champion/` + `${champion[1].name}`} key={champion[1].key}>
          <div className="cursor-pointer">
            <div>{champion[1].id}</div>
            <img
              src={`/dragontail-12.7.1/12.7.1/img/champion/${champion[1].image.full}`}
            />
          </div>
        </Link>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const dataFilePath = path.join(
    process.cwd(),
    'public',
    'dragontail-12.7.1',
    '12.7.1',
    'data',
    'en_US',
    'champion.json'
  )

  const fileContents = fs.readFileSync(dataFilePath, 'utf8')
  const data = JSON.parse(fileContents)

  return {
    props: {
      data,
    },
  }
}

export default Champion
