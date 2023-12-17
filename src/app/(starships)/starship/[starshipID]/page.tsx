import Starship from '@/app/(starships)/starship/[starshipID]/Starship';

type StarshipPageProps = {
  params: {
    starshipID: string;
  }
}

export default function StarshipPage({ params }: StarshipPageProps) {
  return <Starship starshipID={decodeURIComponent(params.starshipID)} />
}
