import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactButton } from "@/components/layout/ContactButton";

export function ImportantInfo() {
  return (
    // TODO: in a real app we would receive data from the server and iterate(map) / then render <Card>
    <section className="text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">
        Also Very Important Info
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              nobis ex eos odit vitae recusandae et harum deserunt cupiditate
              rem quos totam consequuntur at ea, excepturi cum fugit vero unde!
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              nobis ex eos odit vitae recusandae et harum deserunt cupiditate
              rem quos totam consequuntur at ea, excepturi cum fugit vero unde!
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              nobis ex eos odit vitae recusandae et harum deserunt cupiditate
              rem quos totam consequuntur at ea, excepturi cum fugit vero unde!
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              nobis ex eos odit vitae recusandae et harum deserunt cupiditate
              rem quos totam consequuntur at ea, excepturi cum fugit vero unde!
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              nobis ex eos odit vitae recusandae et harum deserunt cupiditate
              rem quos totam consequuntur at ea, excepturi cum fugit vero unde!
            </p>
          </CardContent>
        </Card>
      </div>
      <nav className="mt-8 mb-4 flex justify-center">
        <ContactButton />
      </nav>
    </section>
  );
}
