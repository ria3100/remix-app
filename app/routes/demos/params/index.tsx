export default function Boundaries(): JSX.Element {
  return (
    <>
      <h2>Params</h2>
      <p>
        When you name a route segment with $ like{' '}
        <code>routes/users/$userId.js</code>, the $ segment will be parsed from
        the URL and sent to your loaders and actions by the same name.
      </p>
      <h2>Errors</h2>
      <p>
        When a route throws and error in its action, loader, or component, Remix
        automatically catches it, wont even try to render the component, but it
        will render the routes ErrorBoundary instead. If the route doesnt have
        one, it will bubble up to the routes above it until it hits the root.
      </p>
      <p>So be as granular as you want with your error handling.</p>
      <h2>Not Found</h2>
      <p>
        (and other{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses">
          client errors
        </a>
        )
      </p>
      <p>
        Loaders and Actions can throw a <code>Response</code> instead of an
        error and Remix will render the CatchBoundary instead of the component.
        This is great when loading data from a database isnt found. As soon as
        you know you cant render the component normally, throw a 404 response
        and send your app into the catch boundary. Just like error boundaries,
        catch boundaries bubble, too.
      </p>
    </>
  );
}
