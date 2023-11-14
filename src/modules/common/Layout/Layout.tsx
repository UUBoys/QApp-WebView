import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

import Loader from "../components/Loader";
import NavBar from "../components/NavBar";
import { useApolloStatusStore } from "../stores/apollo-store";
import { useUserAdditionalDataStore } from "../stores/user-aditional-data-store";

import { GetEstablishmentsResponse, Query } from "@/generated/graphql";
import { GET_CREDIT } from "@/modules/GRAPHQL/queries/GetCreditQuery";
import { GET_ESTABLISHMENTS_FOR_USER } from "@/modules/GRAPHQL/queries/GetEstablishmentForUser";
import { IClub } from "@/modules/utils/schemas/club";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { data: session } = useSession();
  const { setCredits, setUserOwnedClubs } = useUserAdditionalDataStore(
    (set) => ({
      setCredits: set.setCredits,
      setUserOwnedClubs: set.setUserOwnedClubs,
    })
  );

  const { isLoading, isError, isSuccess, loadingType } = useApolloStatusStore(
    (set) => ({
      isLoading: set.isLoading,
      isError: set.isError,
      isSuccess: set.isSuccess,
      loadingType: set.loadingType,
    })
  );

  const { data: queryResult, refetch: refetchCredit } = useQuery<Query>(
    GET_CREDIT,
    {
      context: { shouldTrackStatus: true, withConfirmation: false },
    }
  );

  const { refetch: refetchClubs } = useQuery<Query>(
    GET_ESTABLISHMENTS_FOR_USER,
    {
      context: { shouldTrackStatus: true },
      onCompleted(data) {
        if (
          !data.getEstablishmentsForUser?.establishments ||
          data.getEstablishmentsForUser?.establishments?.length <= 0
        )
          return;
        if (data.getEstablishmentsForUser !== null)
          setUserOwnedClubs([
            ...((data.getEstablishmentsForUser as GetEstablishmentsResponse)
              .establishments as IClub[]),
          ]);
      },
    }
  );

  useEffect(() => {
    if (session?.user) {
      refetchCredit();
      refetchClubs();
    }
  }, [refetchClubs, refetchCredit, session?.user]);

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
        loadingType={loadingType}
      />
      <div className="grow">{children}</div>
    </div>
  );
};

export default Layout;
