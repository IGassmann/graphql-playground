'use client';

import { notFound } from 'next/navigation';
import { useQuery } from '@urql/next';

import Pilot from '@/app/(starships)/starship/[starshipID]/Pilot';
import { graphql } from '@/gql';

type StarshipProps = {
  starshipID: string;
};

const GetStarshipDocument = graphql(`
  query GetStarship($starshipID: ID!) {
    starship(id: $starshipID) {
      id
      name
      model
      starshipClass
      length
      cargoCapacity
      hyperdriveRating
      pilots {
        nodes {
          id
          ...PilotFragment
        }
      }
    }
  }
`);

export default function Starship({ starshipID }: StarshipProps) {
  const [{ data, error, stale: isStale }] = useQuery({
    query: GetStarshipDocument,
    variables: { starshipID },
  });

  if (error) throw new Error('Failed to load starship', { cause: error });

  const starship = data?.starship;

  if (!starship) notFound();

  const pilots = starship.pilots?.nodes;

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-6 sm:px-6">
        <h3 className="text-base font-semibold leading-7 text-gray-900">{starship.name}</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Starship details and specifications
        </p>
      </div>
      <div className="border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900">Model</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {starship.model}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900">Class</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {starship.starshipClass}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900">Length</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {starship.length}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900">Cargo Capacity</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {starship.cargoCapacity}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900">Hyperdrive Rating</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {starship.hyperdriveRating}
            </dd>
          </div>
          {pilots && pilots.length > 0 ? (
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium leading-6 text-gray-900">Pilots</dt>
              <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul
                  role="list"
                  className="divide-y divide-gray-100 rounded-md border border-gray-200"
                >
                  {pilots.map((pilot, index) => {
                    if (!pilot) {
                      return (
                        <li
                          key={`failed-to-load-pilot-${index}`}
                          className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6"
                        >
                          <p className="font-medium">Failed to load pilot</p>
                        </li>
                      );
                    }

                    return <Pilot pilot={pilot} key={pilot.id} />;
                  })}
                </ul>
              </dd>
            </div>
          ) : null}
        </dl>
      </div>
    </div>
  );
}
