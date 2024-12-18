
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";



const LoanModule = buildModule("LockModule", (m) => {
  // const initialOwner = m.getParameter("initialOwner", process.env.OWNER_PUBLIC_KEY);
  const loan = m.contract("Loan");
  return { loan };
});

export default LoanModule;
