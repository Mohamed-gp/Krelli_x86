import { Link } from "react-router-dom";

interface AdminCardLinkProps {
  count: number;
  link: string;
}

const AdminCardLink = ({ count, link }: AdminCardLinkProps) => {
  return (
    <div className="flex w-[100%] flex-col flex-wrap rounded-xl border-2 border-black p-2 sm:w-[47%] lg:w-[23%]">
      <p className="text-xl font-bold capitalize">{link}</p>
      <p className="mb-2 text-xl font-bold text-red-500">{count}</p>
      <div className="flex items-center justify-end">
        <Link
          className="rounded-lg bg-buttonColor px-2 py-1 text-sm text-white"
          to={`/admin-dashboard/${link}-table`}
        >
          see All {link}
        </Link>
      </div>
    </div>
  );
};
export default AdminCardLink;
