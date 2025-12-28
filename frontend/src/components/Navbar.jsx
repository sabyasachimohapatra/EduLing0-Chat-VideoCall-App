import { Link, useLocation } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import { UsersIcon, BellIcon, LogOutIcon, ShipWheelIcon } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const isChatPage = location.pathname?.startsWith("/chat");

  // const queryClient = useQueryClient();
  // const { mutate: logoutMutation } = useMutation({
  //   mutationFn: logout,
  //   onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
  // });

  const { logoutMutation } = useLogout();

  return (
    <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end w-full">
          {/* LOGO - ONLY IN THE CHAT PAGE */}
          {isChatPage && (
            <div className="pl-2">
              <Link to="/" className="flex items-center gap-2.5">
                <ShipWheelIcon className="size-5 text-primary" />
                <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary  tracking-wider">
                  EduLingo
                </span>
              </Link>
            </div>
          )}


          {!isChatPage && (
            <div className="pl-3 flex lg:hidden">
            <Link to="/" className="flex items-center gap-1.5">
              {/* <ShipWheelIcon className="size-9 text-primary" /> */}
              <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary  tracking-wider">
                EduLingo
              </span>
            </Link>
          </div>
          )}

          

        {/* Search Bar  */}
        {/* <input type="text" placeholder="Search" className="input input-bordered w-full mx-3 hidden sm:block" /> */}

          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            <Link to={"/notifications"}>
              <button className="btn btn-ghost btn-circle">
                <BellIcon className="h-6 w-6 text-base-content opacity-70" />
              </button>
            </Link>
          </div>

          
          <ThemeSelector />

          <div className="flex items-center gap-3 sm:gap-4">
            <Link to={"/profile"}>
              <button className="btn btn-ghost btn-circle">
                {/* <UsersIcon className="h-6 w-6 text-base-content opacity-70" /> */}
               <div className="w-7 rounded-full flex items-center gap-3 sm:gap-4">
                <img
                  // src="/ProfilePic.png"
                  src={authUser?.profilePic}
                  alt="User Avatar"
                  rel="noreferrer"
                />
              </div>
              </button>
            </Link>
          </div>


          {/* Logout button */}
          <button className="btn btn-ghost btn-circle" onClick={logoutMutation}>
            <LogOutIcon className="h-6 w-6 text-base-content opacity-70" />
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
