import { Card, CardContent } from "@/components/ui/card";
import ChurnCalculator from "@/components/ChurnCalculator";
import pfLogo from "@/assets/pf_logo.svg";
const Index = () => {
  return <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 bg-[fffffff] bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="mb-8">
                <img 
                  src={pfLogo}
                  alt="Product Fruits" 
                  className="mx-auto h-12 mb-6"
                />
              </div>
              <h2 className="text-3xl text-gray-900 mb-4 font-semibold md:text-4xl">Find out how much Elvin Copilot saves you</h2>
              <p className="whitespace-nowrap overflow-x-auto mx-auto text-slate-950 px-0 text-lg font-normal">Automatically resolve repetitive support questions with Copilot</p>
            </div>

            <div className="mb-8">
              <div className="border border-[#03bf92] rounded-lg p-4 mb-8 flex items-start bg-[#03bf92]/[0.06]">
                <div>
                  <p className="text-sm text-gray-800">
                    Product Fruits Copilot resolves <strong>50 to 80% of support queries</strong> before they ever reach your live agents.
                  </p>
                </div>
              </div>

              <ChurnCalculator />
              
              <div className="text-center mt-12 pt-8 border-t border-gray-200">
                <p className="text-lg text-gray-700">
                  Learn more about{" "}
                  <a 
                    href="https://productfruits.com/product/copilot" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600 underline font-medium"
                  >
                    Elvin Copilot
                  </a>
                  {" "}or book your 1-on-1{" "}
                  <a 
                    href="https://calendly.com/d/cv4g-v53-jmq/copilot-consultation" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600 underline font-medium"
                  >
                    consultation
                  </a>
                  {" "}with one of our experts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>;
};
export default Index;