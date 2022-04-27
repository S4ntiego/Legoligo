import Image from 'next/image'
import path from 'path'
import fs from 'fs'

export const getStaticPaths = async () => {
  const dataFilePath = path.join(
    process.cwd(),
    'public',
    'dragontail-12.7.1',
    '12.7.1',
    'data',
    'en_US',
    'champion.json'
  )

  const fileContents = await fs.readFileSync(dataFilePath, 'utf8')
  const data = await JSON.parse(fileContents)
  const champs = Object.values(data.data)

  const arr = champs.map((champion: any) => {
    return {
      maxHp: champion.stats.hp,
      hpPerLevel: champion.stats.hpperlevel,
      hpRegen: champion.stats.hpperlevel,
      resource: champion.stats.mp,
      resourcePerLevel: champion.stats.mpperlevel,
      armor: champion.stats.armor,
      armorPerLevel: champion.stats.armorpelevel,
      attackDamage: champion.stats.attackdamage,
      attackDamagePerLevel: champion.stats.attackdamageperlevel,
      magicResist: champion.stats.spellblock,
      magicResistPerLevel: champion.stats.spellblockperlevel,
    }
  })

  const maxHp = Math.max(...arr.map((a) => a.maxHp))
  const hpRegen = Math.max(...arr.map((a) => a.hpRegen))

  const paths = champs.map((champion: any) => {
    return {
      params: { name: champion.id },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const dataChampionsFilePath = path.join(
    process.cwd(),
    'public',
    'dragontail-12.7.1',
    '12.7.1',
    'data',
    'en_US',
    'champion.json'
  )

  const fileChampionsContents = await fs.readFileSync(
    dataChampionsFilePath,
    'utf8'
  )
  const championsData = await JSON.parse(fileChampionsContents)
  const champsChampions = Object.values(championsData.data)

  const arr = champsChampions.map((champion: any) => {
    return {
      maxHp: champion.stats.hp,
      hpPerLevel: champion.stats.hpperlevel,
      hpRegen: champion.stats.hpperlevel,
      resource: champion.stats.mp,
      resourcePerLevel: champion.stats.mpperlevel,
      armor: champion.stats.armor,
      armorPerLevel: champion.stats.armorpelevel,
      attackDamage: champion.stats.attackdamage,
      attackDamagePerLevel: champion.stats.attackdamageperlevel,
      magicResist: champion.stats.spellblock,
      magicResistPerLevel: champion.stats.spellblockperlevel,
    }
  })

  const maxHp = Math.max(...arr.map((a) => a.maxHp))
  const hpRegen = Math.max(...arr.map((a) => a.hpRegen))

  const dataFilePath = path.join(
    process.cwd(),
    'public',
    'dragontail-12.7.1',
    '12.7.1',
    'data',
    'en_US',
    'champion',
    `${context.params.name}.json`
  )

  const fileContents = await fs.readFileSync(dataFilePath, 'utf8')
  const data = await JSON.parse(fileContents)

  console.log(maxHp)

  return {
    props: {
      data,
      maxHp,
      hpRegen,
    },
  }
}

const Details = (data, maxHp, hpRegen) => {
  const championData: any = Object.values(data.data.data)[0]
  console.log(hpRegen)

  return (
    // Kontener ograniczajacy szerokosc konktentu i rownajacy inne kontenery
    <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center p-4">
      {/* HERO */}
      <div className="relative w-full">
        {/* Kontener na aspekt obrazu */}
        <div className="aspect-w-[1.7] aspect-h-1">
          {/* Obraz */}
          <Image
            className="-z-10"
            layout="fill"
            objectFit="cover"
            src={require(`../../public/dragontail-12.7.1/img/champion/splash/${championData.id}_0.jpg`)}
            priority
          />
        </div>
        {/* Cień górny */}
        <div className="absolute top-0 h-1/6 w-full bg-gradient-to-b from-antracite" />
        {/* Cień prawy */}
        <div className="absolute bottom-0 right-0 h-full w-1/6 bg-gradient-to-l from-antracite" />
        {/* Cień lewy */}
        <div className="absolute bottom-0 h-full w-1/6 bg-gradient-to-r from-antracite" />
        {/* Cień dolny i odniesienie dla kontenera */}
        <div className="absolute bottom-0 flex h-1/3 w-full justify-center bg-gradient-to-t from-antracite">
          {/* Kontener na postać i jej opis */}
          <div className="flex translate-y-[70%] flex-col bg-transparent text-center">
            {/* Postać */}
            <p className="bg-gradient-to-r from-peri to-purple-500 bg-clip-text font-Roboto text-9xl font-black uppercase text-transparent text-white">
              {championData.name}
            </p>
            {/* Opis postaci */}
            <p className="font font-Roboto text-3xl font-normal uppercase text-white">
              {championData.title}
            </p>
          </div>
        </div>
      </div>
      {/* OPIS POSTACI */}
      <div className="flex flex-col items-center justify-center">
        {/* Kontener na opis */}
        <div className="mt-32 max-w-5xl rounded-3xl p-16 text-center font-Roboto text-xl font-light italic text-white outline outline-2 outline-peri">
          <p>{championData.lore}</p>
        </div>
      </div>
    </div>
  )
}

export default Details
