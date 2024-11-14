import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactButton } from "@/components/layout/ContactButton";

export function LessImportantInfo() {
  return (
    // TODO: in a real app we would receive data from the server and iterate(map) / then render <Card>
    <section className="bg-secondary text-center px-3 py-4">
      <h2 className="text-2xl md:text-4xl font-bold mb-6">
        Less Important Info
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Additional information about your company product or service.</p>
          </CardContent>
        </Card>
      </div>
      <nav className="mt-4 mb-4 flex justify-center">
        <ContactButton />
      </nav>
    </section>
  );
}
