import Header from "./header";
import Footer from "./footer";
import Navigation from "./Navigation";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen bg-backgroundShade">
      <Navigation />
      {/* <Header /> */}

      <main className="flex-1 lg:container px-2 py-6 mx-auto md:px-3 md:py-6">
        {props.children}
      </main>

      <Footer />
    </div>
  );
}
