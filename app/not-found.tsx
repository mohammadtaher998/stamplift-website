import Stampy from "./components/Stampy";

export default function NotFound() {
  return (
    <main className="not-found">
      <Stampy size={140} pose="confused" title="Stampy looking confused" />
      <h1>Stampy looked everywhere.</h1>
      <p>This page isn&apos;t here. It might have moved, or it never existed.</p>
      <a className="btn btn-primary" href="/">
        Back to the home page
      </a>
    </main>
  );
}
