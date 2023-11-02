import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

import Loader from "../components/Loader";
import NavBar from "../components/NavBar";
import { useApolloStatusStore } from "../stores/apollo-store";
import { useUserAdditionalDataStore } from "../stores/user-aditional-data-store";

import { Query } from "@/generated/graphql";
import { GET_CREDIT } from "@/modules/GRAPHQL/queries/GetCreditQuery";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { data: session } = useSession();
  const { setCredits } = useUserAdditionalDataStore((set) => ({
    setCredits: set.setCredits,
  }));

  const { isLoading, isError, isSuccess } = useApolloStatusStore((set) => ({
    isLoading: set.isLoading,
    isError: set.isError,
    isSuccess: set.isSuccess,
  }));

  const { data: queryResult, refetch: refetchCredit } =
    useQuery<Query>(GET_CREDIT);

  useEffect(() => {
    if (session?.user) refetchCredit();
  }, [refetchCredit, session?.user]);

  useEffect(() => {
    if (queryResult?.getCredit?.balance)
      setCredits(queryResult?.getCredit?.balance as number);
  }, [queryResult, setCredits]);
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <Loader
        isCustom={false}
        isError={isError}
        isLoading={isLoading}
        isSuccess={isSuccess}
      />
      <div className="grow">{children}</div>
    </div>
  );
};

export default Layout;
