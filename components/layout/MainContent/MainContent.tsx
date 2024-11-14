import { MostImportantInfo } from "./MostImportantInfo";
import { ImportantInfo } from "./ImportantInfo";
import { LessImportantInfo } from "./LessImportantInfo";

export function MainContent() {
  return (
    <div className="container mx-auto px-4 space-y-12">
      <MostImportantInfo />
      <ImportantInfo />
      <LessImportantInfo />
    </div>
  );
}
