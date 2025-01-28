import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function Features() {
  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center lg:text-left max-w-[250px] mx-auto lg:max-w-0 lg:max-w-none">
            Decentralized Funding Made Easy
          </h1>
          <p className="text-sm text-[#CCCCCC] text-center  lg:text-right font-light">
            Fundable: Decentralized funding for retroactive, quadratic, and
            giveaway distributions, streamlining complex payments.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Retroactive Funding */}
          <Card className="bg-[#0A0A0A] border-gray-800 relative">
            {" "}
            <CardContent className="pt-6 pr-0">
              {" "}
              <div>
                {" "}
                <h2 className="text-base font-semibold text-[#eaeaea]">
                  {" "}
                  Retroactive Funding{" "}
                </h2>
                <p className="text-[#A5AEC0] text-sm leading-relaxed mt-4">
                  Description: Reward contributors for their past work and
                  achievements, fostering a sense of appreciation and motivating
                  continued contributions.
                </p>
                {/* READ MORE AND IMAGE SECTION */}
                <div className="flex justify-between items-start gap-16 mt-4">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm hover:text-purple-400 transition-colors text-[#E1E4EA] w-[200px]"
                  >
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </a>

                  <div className="relative h-48 w-full ">
                    <img
                      src="/retro.svg"
                      alt="Geometric cube illustration"
                      className="absolute bottom-0 right-0 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <div className="absolute top-0 left-[50%] transform -translate-x-1/2">
              <img src="/topShade.svg" alt="" />
            </div>
            <div className="absolute top-[50%] left-0 transform -translate-y-1/2">
              <img src="/leftShade.svg" alt="" />
            </div>
          </Card>

          {/* Quadratic Funding */}
          <Card className="bg-[#0A0A0A] border-gray-800 relative">
            {" "}
            <CardContent className="pt-6 pr-0">
              {" "}
              <div>
                {" "}
                <h2 className="text-base font-semibold text-[#eaeaea]">
                  {" "}
                  Quadratic Funding{" "}
                </h2>
                <p className="text-[#A5AEC0] text-sm leading-relaxed mt-4">
                  Amplify the impact of small contributions, create a more
                  inclusive funding model, and ensure that every voice is heard.
                </p>
                {/* READ MORE AND IMAGE SECTION */}
                <div className="flex justify-between items-start gap-16 mt-4">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm hover:text-purple-400 transition-colors text-[#E1E4EA] w-[200px]"
                  >
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </a>

                  <div className="relative h-48 w-full ">
                    <img
                      src="/quadratic.svg"
                      alt="Geometric cube illustration"
                      className="absolute bottom-0 right-0 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <div className="absolute top-0 left-[50%] transform -translate-x-1/2">
              <img src="/topShade.svg" alt="" />
            </div>
            <div className="absolute top-[50%] left-0 transform -translate-y-1/2">
              <img src="/leftShade.svg" alt="" />
            </div>
          </Card>
        </div>

        <div className="w-full flex gap-6 flex-col lg:flex-row mt-6">
          {/* Streaming */}
          <div className="w-[60%]">
            <Card className=" bg-[#7C3AED]">
              <CardContent className="p-6">
                <div className="space-y-4 max-w-2xl">
                  <h2 className="text-xl font-semibold">Streaming</h2>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Streamline your payment workflows with automated solutions
                    for recurring payments, salaries, subscriptions, and more,
                    reducing administrative burdens and minimizing errors.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-sm hover:text-white/70 transition-colors"
                  >
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Airdrops */}
          <div className="w-[40%] relative">
            <Card className=" bg-[#0A0A0A] border-gray-800">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Airdrops</h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Effortlessly distribute funds to recipients, with complete
                    transparency, robust security, and real-time tracking.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-sm hover:text-purple-400 transition-colors"
                  >
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                  {/* <div className="relative h-48 w-full mt-4">
                    <img
                      src="/imgs/wallets.png"
                      alt="Geometric cube illustration"
                      className="object-cover rounded-lg"
                    />
                  </div> */}
                </div>
              </CardContent>
            </Card>

            <div className="absolute left-0 top-0">
              <img src="/imgs/solar.png" alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
