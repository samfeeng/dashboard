import { FC } from "react";
import { UnifiedWalletButton } from "@jup-ag/wallet-adapter";
import StakingPoolCard from "./StakingPoolCard";
import { StakingPoolData } from "../../../types";

interface StakingPoolsProps {
  stakingPoolData: StakingPoolData[];
  selectedPoolIndex: number;
  onSelectPool: (index: number) => void;
}

const StakingPools: FC<StakingPoolsProps> = ({
  stakingPoolData,
  selectedPoolIndex,
  onSelectPool,
}) => (
  <div>
    <div className="mb-4 flex items-center gap-2.5">
      <h3 className="font-sans text-xl font-semibold text-white">
        Staking Pools
      </h3>
      <UnifiedWalletButton
        buttonClassName="wallet-button"
        overrideContent="Connect SOL WALLET"
      />
    </div>
    <div className="mt-3 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 3xl:grid-cols-4">
      {stakingPoolData.map((pool, index) => (
        <StakingPoolCard
          key={index}
          duration={pool.duration}
          maxStake={pool.maxStake}
          apy={pool.apy}
          isSelected={selectedPoolIndex === index}
          onSelect={() => onSelectPool(index)}
        />
      ))}
    </div>
  </div>
);

export default StakingPools;
