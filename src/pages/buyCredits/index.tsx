/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import { useMutation } from "@apollo/client";
import { NextPage } from "next";

import { Mutation, MutationTopupCreditsArgs } from "@/generated/graphql";
import CreditPackage, {
  CreditPackageProps,
} from "@/modules/common/components/CreditPackage";
import Loader from "@/modules/common/components/Loader";
import { useUserAdditionalDataStore } from "@/modules/common/stores/user-aditional-data-store";
import { TOPUPCREDITSMUTATION } from "@/modules/GRAPHQL/mutations/TopupCreditsMutation";

const creditPackages: CreditPackageProps[] = [
  {
    description:
      "Je to základní balíček, který obsahuje 100 kreditů. Výborný pro začátek.",
    imageSrc: "/packages-images/100-coins.png",
    name: "Balíček 1",
    price: "100 Kč",
    volume: 100,
  },
  {
    description:
      "Je to základní balíček, který obsahuje 100 kreditů. Výborný pro začátek.",
    imageSrc: "/packages-images/500-coins.png",
    name: "Balíček 2",
    price: "500 Kč",
    volume: 500,
  },
  {
    description:
      "Je to základní balíček, který obsahuje 100 kreditů. Výborný pro začátek.",
    imageSrc: "/packages-images/1000-coins.png",
    name: "Balíček 3",
    price: "1000 Kč",
    volume: 1000,
  },
  {
    description:
      "Je to základní balíček, který obsahuje 100 kreditů. Výborný pro začátek.",
    imageSrc: "/packages-images/custom-coins.png",
    name: "Balíček 4",
    price: "??? Kč",
    isCustom: true,
  },
];

const BuyCredits: NextPage = () => {
  const [mutateTopUpCreditsMutation, { loading, error, data }] =
    useMutation<Mutation>(TOPUPCREDITSMUTATION);
  const { credits, setCredits } = useUserAdditionalDataStore((set) => ({
    setCredits: set.setCredits,
    credits: set.credits,
  }));
  const onBuy = async (volume?: number) => {
    const variables: MutationTopupCreditsArgs = {
      amount: volume,
    };

    console.log(variables);
    const result = await mutateTopUpCreditsMutation({ variables });
    if (!result.data?.topupCredits?.success) return;
    setCredits(result.data?.topupCredits?.newBalance as number);
  };
  return (
    <div className="min-h-[100vh] w-full bg-gray-100 pt-52">
      <Loader
        isCustom={false}
        isSuccess={data !== undefined}
        isError={error !== undefined}
        isLoading={loading}
      />

      <div className="mx-auto w-[90%] border-b border-gray-600 p-20 sm:w-3/5">
        <div className="flex w-full items-end justify-center gap-5 text-center">
          <p className="flex items-end sm:mb-[-10px]">
            <div className="text-5xl text-primary-500 sm:text-9xl">
              {credits}
            </div>
            <div className="mb-[5px] text-4xl sm:text-8xl">.00</div>
          </p>
          <div className="text-3xl sm:text-6xl"> Kreditů</div>
        </div>
      </div>
      <div className="mx-auto flex w-[90%] flex-col gap-10 border-b border-gray-600 p-20 sm:w-3/5">
        {creditPackages.map((creditPackage) => {
          return (
            <CreditPackage
              {...creditPackage}
              onBuy={(volume?: number) => {
                if (!volume) {
                  onBuy(creditPackage.volume);
                  return;
                }
                onBuy(volume);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BuyCredits;
