import { type FragmentType, graphql, useFragment } from "@/gql";
import { UserIcon } from "@heroicons/react/20/solid";

const PilotFragmentDocument = graphql(`
  fragment PilotFragment on Person {
    id
    name
    birthYear
  }
`);

type PilotProps = {
  pilot: FragmentType<typeof PilotFragmentDocument>;
};


export default function Pilot(props: PilotProps) {
  const pilot = useFragment(PilotFragmentDocument, props.pilot);

  return (
    <li
      key={pilot.id}
      className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6"
    >
      <div className="flex w-0 flex-1 items-center">
        <UserIcon
          className="h-5 w-5 flex-shrink-0 text-gray-400"
          aria-hidden="true"
        />
        <div className="ml-4 flex min-w-0 flex-1 gap-2">
          <span className="truncate font-medium">{pilot.name}</span>
          <span className="flex-shrink-0 text-gray-400">{pilot.birthYear}</span>
        </div>
      </div>
      <div className="ml-4 flex-shrink-0">
        <a
          href="#"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          View
        </a>
      </div>
    </li>
  );
}
