-- CreateTable
CREATE TABLE "Mission" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "starts" TIMESTAMP(3) NOT NULL,
    "ends" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,
    "finished" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "carRegistrationNumber" TEXT NOT NULL,
    "carHolderName" TEXT NOT NULL,
    "carHolderEmail" TEXT NOT NULL,
    "carHolderPhone" TEXT NOT NULL,
    "assuranceContractNumber" TEXT NOT NULL,
    "repairAgencyName" TEXT NOT NULL,
    "repairAgencyResponsible" TEXT NOT NULL,
    "repairAgencyEmail" TEXT NOT NULL,
    "repairAgencyPhone" TEXT NOT NULL,
    "assuranceId" INTEGER NOT NULL,
    "employeeId" INTEGER NOT NULL,

    CONSTRAINT "Mission_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Mission" ADD CONSTRAINT "Mission_assuranceId_fkey" FOREIGN KEY ("assuranceId") REFERENCES "Assurance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mission" ADD CONSTRAINT "Mission_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
