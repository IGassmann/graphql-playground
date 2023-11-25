"use client";

import { graphql } from '@/gql';
import { useQuery } from '@urql/next';
import { Fragment, useMemo, useState } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { twMerge } from 'tailwind-merge';

const GetMyProjectsDocument = graphql( `
    query GetMyProjects($first: Int!, $after: String) {
        me {
            id
            projects(first: $first, after: $after) {
                edges {
                    node {
                        id
                        name
                        description
                        isPublic
                    }
                }
                pageInfo {
                    hasPreviousPage
                    hasNextPage
                    endCursor
                    startCursor
                }
            }
        }
    }
`)


export default function ProjectList() {
  const [after, setAfter] = useState<string>();
  const [{ data, error, stale: isStale }] =
    useQuery({
      query: GetMyProjectsDocument,
      variables: { first: 3, after },
      context: useMemo(
        () => ({
          suspense: true
        }),
        []
      )
    });

  if (error) {
     return <p>Oh no... {error.message}</p>
  }

  const projects = data?.me.projects;

  return (
    <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
      <ul
        className={twMerge('divide-y divide-gray-100', isStale ? 'opacity-25' : '')}
      >
        {projects?.edges.map((projectEdege) => (
          <li key={projectEdege.node.id} className="flex items-center justify-between gap-x-6 px-4 py-5 sm:px-6">
            <div className="min-w-0">
              <div className="flex items-start gap-x-3">
                <p className="text-sm font-semibold leading-6 text-gray-900">{projectEdege.node.name}</p>
                {projectEdege.node.isPublic && (<p
                  className="text-gray-600 bg-gray-50 ring-gray-500/10 rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"
                >
                  Public
                </p>)}
              </div>
              <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                <p className="truncate">{projectEdege.node.description}</p>
              </div>
            </div>
            <div className="flex flex-none items-center gap-x-4">
              <a
                href={`https://railway.app/project/${projectEdege.node.id}`}
                className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
              >
                View project<span className="sr-only">, {projectEdege.node.name}</span>
              </a>
              <Menu as="div" className="relative flex-none">
                <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={twMerge(
                            active ? 'bg-gray-50' : '',
                            'block px-3 py-1 text-sm leading-6 text-gray-900'
                          )}
                        >
                          Edit<span className="sr-only">, {projectEdege.node.name}</span>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={twMerge(
                            active ? 'bg-gray-50' : '',
                            'block px-3 py-1 text-sm leading-6 text-gray-900'
                          )}
                        >
                          Move<span className="sr-only">, {projectEdege.node.name}</span>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={twMerge(
                            active ? 'bg-gray-50' : '',
                            'block px-3 py-1 text-sm leading-6 text-gray-900'
                          )}
                        >
                          Delete<span className="sr-only">, {projectEdege.node.name}</span>
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </li>
        ))}
      </ul>
      <nav
        className="flex items-center justify-center border-t border-gray-200 px-4 py-3 sm:px-6"
        aria-label="Pagination"
      >
        <button
          disabled={!projects?.pageInfo.hasNextPage}
          onClick={() => {
            if (!projects?.pageInfo.endCursor) {
              throw new Error('Missing pagination cursor');
            }
            setAfter(projects.pageInfo.endCursor);
          }}
          className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:focus-visible:ring-white disabled:focus-visible:ring-opacity-50 disabled:focus-visible:ring"
        >
          Load More
        </button>
      </nav>
    </div>
  )
}
