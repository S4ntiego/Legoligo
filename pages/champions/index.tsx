import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Champions: NextPage = (champions: any) => {
  const champs = Object.values(champions.champions.data)

  return (
    <div className="relative mx-auto grid max-w-screen-2xl grid-cols-1 gap-10 bg-antracite p-10 sm:grid-cols-1 md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {champs.map((champion: any) => (
        <Link href={`/champion/` + `${champion.name}`} key={champion.name}>
          <div className="flex items-center justify-center">
            <div className="group relative cursor-pointer hover:-translate-y-2">
              <div className="absolute bottom-[6px] h-[88.7%] w-full rounded-b rounded-t bg-gray-700 outline outline-4 outline-offset-[6px] outline-gray-700 group-hover:bg-gray-900 group-hover:outline group-hover:outline-[4px] group-hover:outline-peri"></div>
              <Image
                className="rounded-b"
                src={require(`../../public/images/${champion.name}.png`)}
                alt="Mountain"
              />
              <div className="absolute bottom-1.5 flex h-1/3 w-full items-center justify-center rounded-xl rounded-b bg-gradient-to-t from-antracite group-hover:bottom-[6px] group-hover:bg-gradient-to-t group-hover:from-peri">
                <p
                  className={`relative z-10 translate-y-5 text-center font-exo font-extrabold uppercase text-sand ${
                    champion.name === 'Nunu & Willump'
                      ? 'whitespace-normal text-3xl'
                      : champion.name.length > 10
                      ? 'text-[2.0rem]'
                      : 'text-[2.2rem]'
                  }`}
                >
                  {champion.name}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json'
  )

  const champions = await res.json()

  return {
    props: {
      champions,
    },
  }
}

export default Champions
