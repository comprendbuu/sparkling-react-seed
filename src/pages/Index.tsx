
// src/pages/Index.tsx

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "/logo.svg";

interface SearchEngine {
  name: string;
  icon: string;
}

interface PopularSearch {
  title: string;
  id: string;
}

function Index() {
  const navigate = useNavigate();

  const selectedSearchEngines = useState<string[]>([
    "PubMed",
    "Google Scholar",
    "Clinical trials",
    "Library",
  ]);

  const selectableEngines : SearchEngine[] = [
    { name: "PubMed", icon: "/pubmed.svg" },
    { name: "Google Scholar", icon: "/google-patents.svg" },
    { name: "Clinical trials", icon: "/clinical-trials.svg" },
    { name: "Library", icon: "" },
  ];

  const popularSearches : PopularSearch[] = [
    { title: "Do chemoresistant AML cells express IL1RAP?", id: "1" },
    { title: "Is IL1RAP expressed in CML and when was this first described?", id: "2" },
    { title: "Which markers are expressed on AML cells that have an NPM1-mutation?", id: "3" },
  ];

  return (
    <>
      <div className="container flex flex-col gap-8 items-center md:pt-40">
        <div className="items-center justify-center flex flex-col gap-4">
          <img src={logo} alt="Wayless" className="h-[72px] w-[72px]" />
          <h1 className="text-3xl font-semibold">Medical research made easy</h1>
        </div>

        <div className="flex flex-col gap-4 items-center w-full">
          <div className="border border-gray-300 rounded-lg p-4 flex flex-col w-[80%]">
            <Textarea
              placeholder="Start searching with any question you'd like"
              className="overflow-auto border-none shadow-none resize-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none text-lg"
            />
            <div className="flex flex-row justify-between">
              <div></div>
              <Button className="bg-[#2D67F6] hover:bg-[#2d4bf6]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </div>
          </div>

          <div className="w-[80%] flex flex-row gap-2">
            {selectableEngines.map((engine) => (
              <Badge
                variant="outline"
                className={(selectedSearchEngines[0].includes(engine.name) ? "border border-[#2D67F6]" : "") + " cursor-pointer flex flex-row gap-2 items-center p-2"}
                key={engine.name}
                onClick={() => {
                  selectedSearchEngines[1](
                    selectedSearchEngines[0].includes(engine.name)
                      ? selectedSearchEngines[0].filter((name) => name !== engine.name)
                      : [...selectedSearchEngines[0], engine.name]
                  );
                }}
              >
                {engine.icon !== "" && <img src={engine.icon} alt={engine.name} />}
                {engine.icon === "" && 
                  <span className="font-semibold text-gray-700">{engine.name}</span>
                }
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 items-start w-[80%] pt-16">
          <h2 className="text-2xl font-semibold">Popular searches</h2>
          <div className="flex flex-col gap-4 w-full">
            {popularSearches.map((search) => (
              <div 
                key={search.id}
                className="p-4 flex flex-row border border-gray-300 rounded-lg w-full justify-between items-center hover:cursor-pointer" 
                onClick={() => {
                  navigate(`/chat/${search.id}`);
                }}
              >
                <div className="items-center flex flex-row gap-4">
                  <div className="rounded-lg flex flex-row items-center gap-2">
                    <div className="stroke-[#2D67F6] bg-[#2d66f623] rounded-md h-10 w-10 p-2 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                        <path d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                        <path d="M13 7.1a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"></path>
                        <path d="M13 17.1a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"></path>
                        <path d="M17 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                        <path d="M7 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                      </svg>
                    </div>
                  </div>
                  <span className="font-semibold ">{search.title}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D67F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
