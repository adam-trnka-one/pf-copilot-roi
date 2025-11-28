import React from "react";
import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { formatCurrency, formatNumber } from "@/utils/churnCalculator";
import { generateAndDownloadPDF } from "@/utils/pdfGenerator";
interface ChurnCalculatorResultsProps {
  customerCount: number;
  currentChurnRate: number;
  results: {
    monthlySavings: number;
  } | null;
  productFruitsPlanPrice: number;
  averageHandlingTime: number;
  averageRevenuePerCustomer: number;
}
const ChurnCalculatorResults = ({
  customerCount,
  currentChurnRate,
  results,
  productFruitsPlanPrice,
  averageHandlingTime,
  averageRevenuePerCustomer
}: ChurnCalculatorResultsProps) => {
  if (!results) return null;

  const getXPrice = (conversations: number): number => {
    if (conversations <= 2000) return 149;
    if (conversations <= 3000) return 224;
    if (conversations <= 5000) return 262;
    if (conversations <= 10000) return 374;
    if (conversations <= 20000) return 449;
    return 449; // fallback for > 20000
  };

  const conversationsResolvedByCopilot = Math.round((customerCount * averageRevenuePerCustomer) / 100);
  const hoursResolvedByCopilot = Math.round((conversationsResolvedByCopilot * averageHandlingTime) / 60);
  const laborCostSavings = Math.round(hoursResolvedByCopilot * currentChurnRate);
  const copilotMonthlyCost = Math.round((conversationsResolvedByCopilot - 40) * 0.69);
  const netMonthlySavings = laborCostSavings - copilotMonthlyCost;

  const handleDownloadPDF = () => {
    generateAndDownloadPDF({
      customerCount,
      averageRevenuePerCustomer,
      currentChurnRate,
      results,
      productFruitsPlanPrice
    });
  };
  return <>
      <CardHeader>
        <CardTitle>Your support cost savings</CardTitle>
        <CardDescription>Based on your data, here's the business impact of Elvin Copilot</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-sm text-gray-600 font-normal">Conversations resolved by Copilot</span>
              <span className="font-medium">
                {formatNumber(conversationsResolvedByCopilot)}
              </span>
            </div>

            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-sm text-gray-600">Human agent hours saved</span>
              <span className="font-normal">{formatNumber(hoursResolvedByCopilot)}</span>
            </div>

            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-sm text-gray-600">Copilot monthly cost</span>
              <span className="font-normal text-[#ff4747]">{formatCurrency(copilotMonthlyCost)}</span>
            </div>

            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-sm text-gray-600">Labor cost savings</span>
              <span className="font-medium">{formatCurrency(laborCostSavings)}</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col justify-center items-center space-y-4">
            <div className="text-center">
              <p className="text-sm text-gray-500">Your net monthly savings</p>
              <p className="text-[28pt] font-bold text-[#03BF92]">
                {formatCurrency(netMonthlySavings)}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </>;
};
export default ChurnCalculatorResults;